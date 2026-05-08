import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"
import { CanvasEdge, CanvasNode } from "../../plugins/index"
import { pathToRoot } from "../../util/path"
// @ts-ignore
import script from "../scripts/canvas.inline"
import style from "../styles/canvas.scss"

const OBSIDIAN_COLORS: Record<string, string> = {
  "1": "#fb464c",
  "2": "#e9973f",
  "3": "#e0de71",
  "4": "#44cf6e",
  "5": "#53dfdd",
  "6": "#a882ff",
}

function resolveColor(color?: string): string | undefined {
  if (!color) return undefined
  if (OBSIDIAN_COLORS[color]) return OBSIDIAN_COLORS[color]
  if (color.startsWith("#")) return color
  return undefined
}

interface ConnectionPoint {
  x: number
  y: number
}

function getConnectionPoint(
  node: CanvasNode,
  side: string,
  minX: number,
  minY: number,
): ConnectionPoint {
  const cx = node.x - minX
  const cy = node.y - minY
  switch (side) {
    case "top":
      return { x: cx + node.width / 2, y: cy }
    case "bottom":
      return { x: cx + node.width / 2, y: cy + node.height }
    case "left":
      return { x: cx, y: cy + node.height / 2 }
    case "right":
      return { x: cx + node.width, y: cy + node.height / 2 }
    default:
      return { x: cx + node.width / 2, y: cy + node.height / 2 }
  }
}

function getSideOffset(side: string, armLen: number): { dx: number; dy: number } {
  switch (side) {
    case "top":
      return { dx: 0, dy: -armLen }
    case "bottom":
      return { dx: 0, dy: armLen }
    case "left":
      return { dx: -armLen, dy: 0 }
    case "right":
      return { dx: armLen, dy: 0 }
    default:
      return { dx: 0, dy: 0 }
  }
}

interface EdgePathProps {
  edge: CanvasEdge
  nodeMap: Map<string, CanvasNode>
  minX: number
  minY: number
}

function EdgePath({ edge, nodeMap, minX, minY }: EdgePathProps) {
  const fromNode = nodeMap.get(edge.fromNode)
  const toNode = nodeMap.get(edge.toNode)
  if (!fromNode || !toNode) return null

  const p1 = getConnectionPoint(fromNode, edge.fromSide, minX, minY)
  const p2 = getConnectionPoint(toNode, edge.toSide, minX, minY)

  const dist = Math.hypot(p2.x - p1.x, p2.y - p1.y)
  const armLen = Math.min(150, dist * 0.4)

  const off1 = getSideOffset(edge.fromSide, armLen)
  const off2 = getSideOffset(edge.toSide, armLen)

  const cp1x = p1.x + off1.dx
  const cp1y = p1.y + off1.dy
  const cp2x = p2.x + off2.dx
  const cp2y = p2.y + off2.dy

  const d = `M ${p1.x} ${p1.y} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`

  const color = resolveColor(edge.color)
  const stroke = color ?? "var(--canvas-edge-color)"

  const toEnd = edge.toEnd ?? "arrow"
  const fromEnd = edge.fromEnd ?? "none"

  const markerId = color ? `arrow-custom-${edge.id}` : "canvas-arrow-default"

  const midX = (p1.x + p2.x) / 2
  const midY = (p1.y + p2.y) / 2

  return (
    <>
      {color && (
        <defs>
          <marker
            id={markerId}
            markerWidth="10"
            markerHeight="7"
            refX="9"
            refY="3.5"
            orient="auto"
          >
            <polygon points="0 0, 10 3.5, 0 7" fill={color} />
          </marker>
          {fromEnd === "arrow" && (
            <marker
              id={`arrow-from-${edge.id}`}
              markerWidth="10"
              markerHeight="7"
              refX="1"
              refY="3.5"
              orient="auto-start-reverse"
            >
              <polygon points="0 0, 10 3.5, 0 7" fill={color} />
            </marker>
          )}
        </defs>
      )}
      <path
        class="canvas-edge"
        d={d}
        stroke={stroke}
        marker-end={toEnd === "arrow" ? `url(#${markerId})` : undefined}
        marker-start={fromEnd === "arrow" ? `url(#${color ? `arrow-from-${edge.id}` : "canvas-arrow-from-default"})` : undefined}
      />
      {edge.label && (
        <text
          class="canvas-edge-label"
          x={midX}
          y={midY - 6}
          text-anchor="middle"
          dominant-baseline="auto"
        >
          {edge.label}
        </text>
      )}
    </>
  )
}

interface NodeProps {
  node: CanvasNode
  minX: number
  minY: number
  renderedHtml?: string
  fileSlug?: string
  fileTitle?: string
  baseUrl: string
}

function NodeElement({ node, minX, minY, renderedHtml, fileSlug, fileTitle, baseUrl }: NodeProps) {
  const cx = node.x - minX
  const cy = node.y - minY
  const colorStr = resolveColor(node.color)
  const style: Record<string, string> = {
    left: `${cx}px`,
    top: `${cy}px`,
    width: `${node.width}px`,
    height: `${node.height}px`,
  }
  if (colorStr) {
    style["--node-color"] = colorStr
  }

  const styleStr = Object.entries(style)
    .map(([k, v]) => `${k}: ${v}`)
    .join("; ")

  if (node.type === "text") {
    return (
      <div
        class="canvas-node canvas-node--text"
        style={styleStr}
        data-color={node.color}
        dangerouslySetInnerHTML={{ __html: renderedHtml ?? "" }}
      />
    )
  }

  if (node.type === "file") {
    const href = fileSlug ? `${baseUrl}/${fileSlug}` : "#"
    return (
      <a class="canvas-node canvas-node--file" style={styleStr} data-color={node.color} href={href}>
        <span class="canvas-file-title">{fileTitle ?? fileSlug ?? node.file}</span>
      </a>
    )
  }

  if (node.type === "link") {
    let domain = node.url ?? "#"
    try {
      domain = new URL(node.url ?? "").hostname
    } catch {}
    return (
      <a
        class="canvas-node canvas-node--link"
        style={styleStr}
        data-color={node.color}
        href={node.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span class="canvas-link-icon">🔗</span>
        <span class="canvas-link-domain">{domain}</span>
      </a>
    )
  }

  return null
}

interface GroupProps {
  node: CanvasNode
  minX: number
  minY: number
}

function GroupElement({ node, minX, minY }: GroupProps) {
  const cx = node.x - minX
  const cy = node.y - minY
  const colorStr = resolveColor(node.color)
  const styleObj: Record<string, string> = {
    left: `${cx}px`,
    top: `${cy}px`,
    width: `${node.width}px`,
    height: `${node.height}px`,
  }
  if (colorStr) {
    styleObj["--node-color"] = colorStr
  }
  const styleStr = Object.entries(styleObj)
    .map(([k, v]) => `${k}: ${v}`)
    .join("; ")

  return (
    <div class="canvas-node canvas-node--group" style={styleStr} data-color={node.color}>
      {node.label && <span class="canvas-group-label">{node.label}</span>}
    </div>
  )
}

const CanvasContent: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
  const canvasData = fileData.canvasData
  if (!canvasData) {
    return <div class="canvas-error">Canvas 데이터를 불러올 수 없습니다.</div>
  }

  const { nodes, edges, bounds, renderedTextNodes, fileNodeSlugs, fileNodeTitles } = canvasData
  const { minX, minY, maxX, maxY } = bounds
  const W = maxX - minX
  const H = maxY - minY

  const groups = nodes.filter((n) => n.type === "group")
  const otherNodes = nodes.filter((n) => n.type !== "group")

  const nodeMap = new Map<string, CanvasNode>(nodes.map((n) => [n.id, n]))

  const baseUrl = pathToRoot(fileData.slug!)

  return (
    <div
      class="canvas-wrapper"
      data-bounds={JSON.stringify(bounds)}
    >
      <div class="canvas-viewport" id="canvas-viewport">
        {/* Groups — 뒤에 렌더링 */}
        {groups.map((g) => (
          <GroupElement key={g.id} node={g} minX={minX} minY={minY} />
        ))}

        {/* SVG 엣지 레이어 */}
        <svg
          class="canvas-edges"
          width={W}
          height={H}
          style="position:absolute;top:0;left:0;overflow:visible;pointer-events:none;"
        >
          <defs>
            <marker
              id="canvas-arrow-default"
              markerWidth="10"
              markerHeight="7"
              refX="9"
              refY="3.5"
              orient="auto"
            >
              <polygon points="0 0, 10 3.5, 0 7" fill="var(--canvas-edge-color)" />
            </marker>
            <marker
              id="canvas-arrow-from-default"
              markerWidth="10"
              markerHeight="7"
              refX="1"
              refY="3.5"
              orient="auto-start-reverse"
            >
              <polygon points="0 0, 10 3.5, 0 7" fill="var(--canvas-edge-color)" />
            </marker>
          </defs>
          {edges.map((e) => (
            <EdgePath key={e.id} edge={e} nodeMap={nodeMap} minX={minX} minY={minY} />
          ))}
        </svg>

        {/* 노드들 — 그룹 위에 렌더링 */}
        {otherNodes.map((n) => (
          <NodeElement
            key={n.id}
            node={n}
            minX={minX}
            minY={minY}
            renderedHtml={renderedTextNodes[n.id]}
            fileSlug={fileNodeSlugs[n.id]}
            fileTitle={fileNodeTitles[n.id]}
            baseUrl={baseUrl}
          />
        ))}
      </div>

      {/* 컨트롤 버튼 */}
      <div class="canvas-controls">
        <button id="canvas-fit" title="Fit to screen">⊞</button>
        <button id="canvas-zoom-in" title="Zoom in">+</button>
        <button id="canvas-zoom-out" title="Zoom out">−</button>
      </div>
    </div>
  )
}

CanvasContent.css = style
CanvasContent.afterDOMLoaded = script

export default (() => CanvasContent) satisfies QuartzComponentConstructor
