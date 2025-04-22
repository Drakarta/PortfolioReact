import { useEffect } from "react";
import { motion } from "motion/react";

import { useNameStore } from "../../resources/stores";

import ant from "../../assets/ant_flat.svg";
import honey from "../../assets/honey_pot_flat.svg";
import HoverIndicator from "./HoverIndicator";

export default function AntHoney(props: { size: number }) {
  const nameActive = useNameStore((state) => state.nameActive);
  const updateNameActive = useNameStore((state) => state.updateNameActive);
  const updateFirstActive = useNameStore((state) => state.updateFirstActive);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout> | undefined;
    if (nameActive) {
      timeout = setTimeout(() => updateFirstActive(true), 250);
    }
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [nameActive, updateFirstActive]);

  return (
    <>
      <h1
        className="flex font-bespoke text-orange-100"
        style={{
          lineHeight: "normal",
          letterSpacing: "-0.05em",
          fontSize: `${props.size}rem`,
        }}
        onMouseEnter={() => updateNameActive(true)}
        onMouseLeave={() => updateNameActive(false)}
      >
        <div className="flex overflow-hidden pr-0.5">
          <motion.div
            initial={false}
            animate={nameActive ? { x: `-${props.size}.5rem`, width: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <img
              className="aspect-square mt-3 drop-shadow-md max-w-none"
              style={{
                width: `${props.size}rem`,
              }}
              src={ant}
              alt="ant"
              aria-hidden="true"
            />
          </motion.div>
          <motion.div
            className="drop-shadow-md"
            initial={{ width: "0rem", x: "0.5rem" }}
            animate={
              nameActive ? { x: "0rem", width: "auto", marginLeft: 0 } : {}
            }
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            Ant
          </motion.div>
        </div>
        <div className="flex overflow-hidden pr-0.5">
          <motion.div
            initial={false}
            animate={nameActive ? { x: `-${props.size}rem`, width: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <img
              className="aspect-square mt-3 max-w-none drop-shadow-md"
              style={{
                width: `${props.size}rem`,
              }}
              src={honey}
              alt="honey"
              aria-hidden="true"
            />
          </motion.div>
          <motion.div
            className="flex"
            initial={{ width: "0rem" }}
            animate={nameActive ? { width: "auto" } : {}}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="drop-shadow-md">hon</div>
            <motion.div
              className="drop-shadow-md"
              initial={{ width: `${props.size / 2}rem`, y: `${props.size}rem` }}
              animate={
                nameActive
                  ? {
                      y: ["0rem", `${props.size}rem`, `${props.size}rem`],
                      width: [
                        `${props.size / 2}rem`,
                        `${props.size / 2}rem`,
                        "0rem",
                      ],
                    }
                  : {}
              }
              transition={{
                delay: 0.375,
                duration: nameActive ? 0.75 : 0,
                ease: "easeInOut",
                times: [0.3, 0.6, 0.9],
              }}
              aria-hidden="true"
            >
              e
            </motion.div>
            <div className="drop-shadow-md pr-1">y</div>
          </motion.div>
        </div>
      </h1>
      <HoverIndicator size={props.size} />
    </>
  );
}
