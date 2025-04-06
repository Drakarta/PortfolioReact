import { useEffect } from "react";
import { motion } from "framer-motion";

import { useNameStore } from "../../resources/stores";
1;
import { Icon } from "@iconify/react";

export default function ScrollIndicator() {
  const scrolled = useNameStore((state) => state.scrolled);
  const updateScrolled = useNameStore((state) => state.updateScrolled);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        updateScrolled(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      className="-right-4 bottom-8 opacity-30 absolute flex gap-1 font-sans text-lg text-orange-100 transform rotate-90 drop-shadow-md"
      initial={false}
      animate={scrolled ? { bottom: "-80px", opacity: "0%" } : "initial"}
      transition={{ duration: 0.75, ease: "easeInOut" }}
    >
      <div className="font-semibold">Scroll</div>
      <div className="flex flex-col justify-center h-7">
        <Icon
          icon="fluent:arrow-sort-up-16-filled"
          width="26"
          height="26"
          className="rotate-90"
        />
      </div>
    </motion.div>
  );
}
