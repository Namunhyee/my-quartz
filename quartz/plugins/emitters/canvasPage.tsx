import path from "path"
import fs from "fs"
import { QuartzEmitterPlugin } from "../types"
import { QuartzComponentProps } from "../../components/types"
import HeaderConstructor from "../../components/Header"
import BodyConstructor from "../../components/Body"
import { pageResources, renderPage } from "../../components/renderPage"
import { FullPageLayout } from "../../cfg"
import { FullSlug, pathToRoot } from "../../util/path"
import { sharedPageComponents } from "../../../quartz.layout"
import { write } from "./helpers"
import { ProcessedContent } from "../vfile"
import { CanvasData, CanvasEdge, CanvasNode } from "../index"
import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkGfm from "remark-gfm"
import remarkRehype from "remark-rehype"
import { toHtml } from "hast-util-to-html"
import { Root as HastRoot } from "hast"
import ArticleTitle from "../../components/ArticleTitle"
import CanvasContent from "../../components/pages/CanvasContent"
import { BuildCtx } from "../../util/ctx"
import { StaticResources } from "../../util/resources"

async function renderMarkdownToHtml(text: string): Promise<string> {
  const processor = unified().use(remarkParse).use(remarkGfm).use(remarkRehype)
  const hast = (await processor.run(processor.parse(text))) as HastRoot
  return toHtml(hast, { allowDangerousHtml: true })
}

function resolveFileNodeSlug(nodeFilePath: string, allSlugs: FullSlug[]): string | undefined {
  // strip .md extension and get the basename for shortest-path matching
  const stripped = nodeFilePath.replace(/\.md$/, "")
  const basename = stripped.split("/").pop()!.toLowerCase().replace(/\s+/g, "-")
  return (
    allSlugs.find((s) => s.toLowerCase().split("/").pop() === basename) ??
    allSlugs.find((s) => s.toLowerCase() === stripped.toLowerCase())
  )
}

function getBounds(nodes: CanvasNode[]) {
  if (nodes.length === 0) return { minX: 0, minY: 0, maxX: 800, maxY: 600 }
  const xs = nodes.map((n) => n.x)
  const ys = nodes.map((n) => n.y)
  const rights = nodes.map((n) => n.x + n.width)
  const bottoms = nodes.map((n) => n.y + n.height)
  return {
    minX: Math.min(...xs),
    minY: Math.min(...ys),
    maxX: Math.max(...rights),
    maxY: Math.max(...bottoms),
  }
}

async function* emitAllCanvas(
  ctx: BuildCtx,
  content: ProcessedContent[],
  resources: StaticResources,
  opts: FullPageLayout,
) {
  const { cfg } = ctx
  const allFiles = content.map((c) => c[1].data)
  const allSlugs = ctx.allSlugs

  // canvas stubs were injected into content by build.ts
  const canvasStubs = content.filter(([, vfile]) => vfile.data.frontmatter?.isCanvas)

  for (const [tree, vfile] of canvasStubs) {
    const fullPath = vfile.data.filePath as string
    if (!fullPath) continue

    let json: { nodes?: CanvasNode[]; edges?: CanvasEdge[] }
    try {
      const raw = await fs.promises.readFile(fullPath, "utf-8")
      json = JSON.parse(raw)
    } catch {
      continue
    }

    const nodes: CanvasNode[] = json.nodes ?? []
    const edges: CanvasEdge[] = json.edges ?? []

    const renderedTextNodes: Record<string, string> = {}
    for (const node of nodes) {
      if (node.type === "text" && node.text) {
        renderedTextNodes[node.id] = await renderMarkdownToHtml(node.text)
      }
    }

    const fileNodeSlugs: Record<string, string> = {}
    const fileNodeTitles: Record<string, string> = {}
    for (const node of nodes) {
      if (node.type === "file" && node.file) {
        const resolved = resolveFileNodeSlug(node.file, allSlugs)
        if (resolved) {
          fileNodeSlugs[node.id] = resolved
        }
        const matchedFile = allFiles.find((f) => f.slug === resolved)
        fileNodeTitles[node.id] =
          matchedFile?.frontmatter?.title ?? path.basename(node.file, ".md")
      }
    }

    const bounds = getBounds(nodes)
    const canvasData: CanvasData = {
      nodes,
      edges,
      renderedTextNodes,
      fileNodeSlugs,
      fileNodeTitles,
      bounds,
    }

    // attach canvasData to vfile for CanvasContent component
    vfile.data.canvasData = canvasData

    const slug = vfile.data.slug!
    const externalResources = pageResources(pathToRoot(slug), resources)
    const componentData: QuartzComponentProps = {
      ctx,
      fileData: vfile.data,
      externalResources,
      cfg: cfg.configuration,
      children: [],
      tree,
      allFiles,
    }

    const htmlContent = renderPage(cfg.configuration, slug, componentData, opts, externalResources)
    yield write({ ctx, content: htmlContent, slug, ext: ".html" })
  }
}

export const CanvasPage: QuartzEmitterPlugin = () => {
  const Header = HeaderConstructor()
  const Body = BodyConstructor()
  const ArticleTitleComp = ArticleTitle()
  const CanvasBody = CanvasContent()

  const opts: FullPageLayout = {
    ...sharedPageComponents,
    beforeBody: [ArticleTitleComp],
    left: [],
    right: [],
    pageBody: CanvasBody,
    afterBody: [],
  }

  const { head: Head, header, beforeBody, pageBody, afterBody, left, right, footer: Footer } = opts

  return {
    name: "CanvasPage",
    getQuartzComponents() {
      return [
        Head,
        Header,
        Body,
        ...header,
        ...beforeBody,
        pageBody,
        ...afterBody,
        ...left,
        ...right,
        Footer,
      ]
    },
    async *emit(ctx, content, resources) {
      yield* emitAllCanvas(ctx, content, resources, opts)
    },
    async *partialEmit(ctx, content, resources, changeEvents) {
      const hasCanvasChanges = changeEvents.some(
        (e) => e.path.endsWith(".canvas") && (e.type === "add" || e.type === "change"),
      )
      if (!hasCanvasChanges) return null
      yield* emitAllCanvas(ctx, content, resources, opts)
    },
  }
}
