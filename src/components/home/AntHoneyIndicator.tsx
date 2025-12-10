import { motion } from "motion/react"
import { Icon } from "@iconify/react"

export default function HoverIndicator(
  props: Readonly<{ name: string; firstActive: boolean; size: number }>,
) {
  return (
    <motion.div
      className="pointer-events-none relative flex w-auto content-center font-sans text-lg text-orange-100 opacity-30"
      style={{
        top: `-${props.size / 6}rem`,
      }}
      initial={false}
      animate={props.firstActive ? { opacity: 0 } : "initial"}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <Icon icon="fluent:arrow-sort-up-16-filled" width="26" height="26" />
      <div className="font-semibold drop-shadow-md">{props.name}</div>
      <Icon icon="fluent:arrow-sort-up-16-filled" width="26" height="26" />
    </motion.div>
  )
}
