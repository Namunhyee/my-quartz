interface CanvasBounds {
  minX: number
  minY: number
  maxX: number
  maxY: number
}

interface PanZoomState {
  scale: number
  tx: number
  ty: number
  dragging: boolean
  lastX: number
  lastY: number
  // pinch-zoom state
  pinching: boolean
  lastPinchDist: number
}

function applyTransform(el: HTMLElement, tx: number, ty: number, scale: number) {
  el.style.transform = `translate(${tx}px, ${ty}px) scale(${scale})`
}

function fitCanvas(
  wrapper: HTMLElement,
  bounds: CanvasBounds,
): { scale: number; tx: number; ty: number } {
  const W = wrapper.clientWidth
  const H = wrapper.clientHeight
  const cw = bounds.maxX - bounds.minX
  const ch = bounds.maxY - bounds.minY
  const padding = 60
  const scale = Math.min(
    (W - padding * 2) / Math.max(cw, 1),
    (H - padding * 2) / Math.max(ch, 1),
    1.5,
  )
  const tx = (W - cw * scale) / 2
  const ty = (H - ch * scale) / 2
  return { scale, tx, ty }
}

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value))
}

function setupCanvas() {
  const wrapper = document.querySelector<HTMLElement>(".canvas-wrapper")
  const viewport = document.getElementById("canvas-viewport")
  if (!wrapper || !viewport) return

  const boundsAttr = wrapper.dataset.bounds
  if (!boundsAttr) return
  const bounds: CanvasBounds = JSON.parse(boundsAttr)

  const state: PanZoomState = {
    ...fitCanvas(wrapper, bounds),
    dragging: false,
    lastX: 0,
    lastY: 0,
    pinching: false,
    lastPinchDist: 0,
  }

  applyTransform(viewport, state.tx, state.ty, state.scale)

  const onPointerDown = (e: PointerEvent) => {
    if (e.target !== wrapper && !(e.target as Element).closest(".canvas-controls")) {
      state.dragging = true
      state.lastX = e.clientX
      state.lastY = e.clientY
      wrapper.setPointerCapture(e.pointerId)
    }
  }

  const onPointerMove = (e: PointerEvent) => {
    if (!state.dragging) return
    state.tx += e.clientX - state.lastX
    state.ty += e.clientY - state.lastY
    state.lastX = e.clientX
    state.lastY = e.clientY
    applyTransform(viewport, state.tx, state.ty, state.scale)
  }

  const onPointerUp = () => {
    state.dragging = false
  }

  const onWheel = (e: WheelEvent) => {
    e.preventDefault()
    const rect = wrapper.getBoundingClientRect()
    const mx = e.clientX - rect.left
    const my = e.clientY - rect.top

    // normalize deltaY across different wheel modes
    let delta = e.deltaY
    if (e.deltaMode === WheelEvent.DOM_DELTA_LINE) delta *= 16
    if (e.deltaMode === WheelEvent.DOM_DELTA_PAGE) delta *= 400

    const factor = 1 - delta * 0.001
    const newScale = clamp(state.scale * factor, 0.05, 8)
    const ratio = newScale / state.scale
    state.tx = mx - ratio * (mx - state.tx)
    state.ty = my - ratio * (my - state.ty)
    state.scale = newScale
    applyTransform(viewport, state.tx, state.ty, state.scale)
  }

  // Fit button
  const fitBtn = document.getElementById("canvas-fit")
  const fitHandler = () => {
    const { scale, tx, ty } = fitCanvas(wrapper, bounds)
    state.scale = scale
    state.tx = tx
    state.ty = ty
    applyTransform(viewport, tx, ty, scale)
  }

  // Zoom buttons
  const zoomIn = document.getElementById("canvas-zoom-in")
  const zoomOut = document.getElementById("canvas-zoom-out")

  const zoomInHandler = () => {
    const W = wrapper.clientWidth
    const H = wrapper.clientHeight
    const newScale = clamp(state.scale * 1.25, 0.05, 8)
    const ratio = newScale / state.scale
    state.tx = W / 2 - ratio * (W / 2 - state.tx)
    state.ty = H / 2 - ratio * (H / 2 - state.ty)
    state.scale = newScale
    applyTransform(viewport, state.tx, state.ty, state.scale)
  }

  const zoomOutHandler = () => {
    const W = wrapper.clientWidth
    const H = wrapper.clientHeight
    const newScale = clamp(state.scale * 0.8, 0.05, 8)
    const ratio = newScale / state.scale
    state.tx = W / 2 - ratio * (W / 2 - state.tx)
    state.ty = H / 2 - ratio * (H / 2 - state.ty)
    state.scale = newScale
    applyTransform(viewport, state.tx, state.ty, state.scale)
  }

  wrapper.addEventListener("pointerdown", onPointerDown)
  wrapper.addEventListener("pointermove", onPointerMove)
  wrapper.addEventListener("pointerup", onPointerUp)
  wrapper.addEventListener("pointercancel", onPointerUp)
  wrapper.addEventListener("wheel", onWheel, { passive: false })
  fitBtn?.addEventListener("click", fitHandler)
  zoomIn?.addEventListener("click", zoomInHandler)
  zoomOut?.addEventListener("click", zoomOutHandler)

  // SPA cleanup
  ;(window as any).addCleanup?.(() => {
    wrapper.removeEventListener("pointerdown", onPointerDown)
    wrapper.removeEventListener("pointermove", onPointerMove)
    wrapper.removeEventListener("pointerup", onPointerUp)
    wrapper.removeEventListener("pointercancel", onPointerUp)
    wrapper.removeEventListener("wheel", onWheel)
    fitBtn?.removeEventListener("click", fitHandler)
    zoomIn?.removeEventListener("click", zoomInHandler)
    zoomOut?.removeEventListener("click", zoomOutHandler)
  })
}

document.addEventListener("nav", setupCanvas)
