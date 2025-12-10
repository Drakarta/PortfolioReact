import { useEffect } from "react"

export default function KonamiCode(result: () => void) {
  const konamiCode = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
  ]
  let pressedKeys: string[] = []
  const handleKeyPress = (e: KeyboardEvent) => {
    const pressedKey = e.key
    if (konamiCode[pressedKeys.length] === pressedKey) {
      pressedKeys.push(pressedKey)
      if (pressedKeys.length === konamiCode.length) {
        pressedKeys = []
        result()
      }
    } else {
      pressedKeys = []
    }
  }

  let startX: number = 0
  let startY: number = 0
  const handleSwipeStart = (event: TouchEvent) => {
    startX = event.changedTouches[0].screenX
    startY = event.changedTouches[0].screenY
  }
  const handleSwipeEnd = (event: TouchEvent) => {
    const diffX: number = event.changedTouches[0].screenX - startX
    const diffY: number = event.changedTouches[0].screenY - startY

    if (Math.abs(diffX) > Math.abs(diffY)) {
      handleKeyPress({
        key: diffX > 0 ? "ArrowRight" : "ArrowLeft",
      } as KeyboardEvent)
    } else {
      handleKeyPress({
        key: diffY > 0 ? "ArrowDown" : "ArrowUp",
      } as KeyboardEvent)
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress)
    window.addEventListener("touchstart", handleSwipeStart)
    window.addEventListener("touchend", handleSwipeEnd)
    return () => {
      window.removeEventListener("keydown", handleKeyPress)
      window.removeEventListener("touchstart", handleSwipeStart)
      window.removeEventListener("touchend", handleSwipeEnd)
    }
  }, [])
}
