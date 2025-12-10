import { useEffect, useState } from "react"
import { motion } from "framer-motion"

import { Icon } from "@iconify/react"

export default function ScrollIndicator() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <motion.div
      className="absolute -right-4 bottom-8 flex rotate-90 transform gap-1 font-sans text-lg text-orange-100 opacity-30 drop-shadow-md"
      initial={false}
      animate={scrolled ? { bottom: "-80px", opacity: "0%" } : "initial"}
      transition={{ duration: 0.75, ease: "easeInOut" }}
    >
      <div className="font-semibold">Scroll</div>
      <div className="flex h-7 flex-col justify-center">
        <Icon
          icon="fluent:arrow-sort-up-16-filled"
          width="26"
          height="26"
          className="rotate-90"
        />
      </div>
    </motion.div>
  )
}
