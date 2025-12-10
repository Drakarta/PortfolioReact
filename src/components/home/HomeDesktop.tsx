import { useEffect, useState } from "react"
import AntHoneyD from "./AntHoneyD"

function getResponsiveSize() {
  if (typeof window !== "undefined") {
    const w = window.innerWidth
    if (w >= 1280) return 12
  }
  return 10
}

export default function HomeDesktop() {
  const [size, setSize] = useState(getResponsiveSize())

  useEffect(() => {
    const handleResize = () => {
      setSize(getResponsiveSize())
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="hidden h-svh w-full grid-cols-5 grid-rows-5 md:grid">
      <div className="col-start-3 row-start-3 flex flex-col items-center">
        <AntHoneyD key={`size-${size}`} size={size} />
      </div>
    </div>
  )
}
