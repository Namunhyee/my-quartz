import { StaticResources } from "../util/resources"
import { FilePath, FullSlug } from "../util/path"
import { BuildCtx } from "../util/ctx"

export interface CanvasNode {
  id: string
  type: "text" | "file" | "link" | "group"
  x: number
  y: number
  width: number
  height: number
  color?: string
  text?: string
  file?: string
  url?: string
  label?: string
}

export interface CanvasEdge {
  id: string
  fromNode: string
  fromSide: "top" | "bottom" | "left" | "right"
  toNode: string
  toSide: "top" | "bottom" | "left" | "right"
  label?: string
  color?: string
  fromEnd?: "none" | "arrow"
  toEnd?: "none" | "arrow"
}

export interface CanvasData {
  nodes: CanvasNode[]
  edges: CanvasEdge[]
  renderedTextNodes: Record<string, string>
  fileNodeSlugs: Record<string, string>
  fileNodeTitles: Record<string, string>
  bounds: { minX: number; minY: number; maxX: number; maxY: number }
}

export function getStaticResourcesFromPlugins(ctx: BuildCtx) {
  const staticResources: StaticResources = {
    css: [],
    js: [],
    additionalHead: [],
  }

  for (const transformer of [...ctx.cfg.plugins.transformers, ...ctx.cfg.plugins.emitters]) {
    const res = transformer.externalResources ? transformer.externalResources(ctx) : {}
    if (res?.js) {
      staticResources.js.push(...res.js)
    }
    if (res?.css) {
      staticResources.css.push(...res.css)
    }
    if (res?.additionalHead) {
      staticResources.additionalHead.push(...res.additionalHead)
    }
  }

  // if serving locally, listen for rebuilds and reload the page
  if (ctx.argv.serve) {
    const wsUrl = ctx.argv.remoteDevHost
      ? `wss://${ctx.argv.remoteDevHost}:${ctx.argv.wsPort}`
      : `ws://localhost:${ctx.argv.wsPort}`

    staticResources.js.push({
      loadTime: "afterDOMReady",
      contentType: "inline",
      script: `
        const socket = new WebSocket('${wsUrl}')
        // reload(true) ensures resources like images and scripts are fetched again in firefox
        socket.addEventListener('message', () => document.location.reload(true))
      `,
    })
  }

  return staticResources
}

export * from "./transformers"
export * from "./filters"
export * from "./emitters"

declare module "vfile" {
  // inserted in processors.ts
  interface DataMap {
    slug: FullSlug
    filePath: FilePath
    relativePath: FilePath
    canvasData?: import("./index").CanvasData
  }
}
