import { motion } from "motion/react";
import { useNameStore } from "../../resources/stores";
import { Icon } from "@iconify/react";

export default function HoverIndicator(props: Readonly<{ size: number }>) {
  const firstActive = useNameStore((state) => state.firstActive);
  return (
    <motion.div
      className="relative flex content-center opacity-30 w-auto font-sans text-orange-100 text-lg pointer-events-none"
      style={{
        top: `-${props.size / 6}rem`,
      }}
      initial={false}
      animate={firstActive ? { opacity: 0 } : "initial"}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <Icon icon="fluent:arrow-sort-up-16-filled" width="26" height="26" />
      <div className="drop-shadow-md font-semibold">Hover</div>
      <Icon icon="fluent:arrow-sort-up-16-filled" width="26" height="26" />
    </motion.div>
  );
}
