import { motion } from "motion/react";
import { useNameStore } from "../../resources/stores";
import { Icon } from "@iconify/react";

export default function HoverIndicator(props: { size: number }) {
  const firstActive = useNameStore((state) => state.firstActive);
  return (
    <motion.div
      className="relative flex content-center w-auto font-sans text-lg pointer-events-none opacity-30 text-orange-100"
      style={{
        top: `-${props.size / 6}rem`,
      }}
      initial={false}
      animate={firstActive ? { opacity: 0 } : "initial"}
    >
      <Icon icon="fluent:arrow-sort-up-16-filled" width="26" height="26" />
      <div className="font-semibold drop-shadow-md">Hover</div>
      <Icon icon="fluent:arrow-sort-up-16-filled" width="26" height="26" />
    </motion.div>
  );
}
