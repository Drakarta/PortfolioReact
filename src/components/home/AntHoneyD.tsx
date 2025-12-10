import { useEffect, useState } from "react"
import { motion } from "motion/react"

import ant from "../../assets/ant_flat.svg"
import honey from "../../assets/honey_pot_flat.svg"
import AntHoneyIndicator from "./AntHoneyIndicator"

export default function AntHoney(props: Readonly<{ size: number }>) {
  const [nameActive, setNameActive] = useState(false)
  const [firstActive, setFirstActive] = useState(false)

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout> | undefined
    if (nameActive) {
      timeout = setTimeout(() => setFirstActive(true), 250)
    }
    return () => {
      if (timeout) clearTimeout(timeout)
    }
  }, [nameActive, firstActive])

  return (
    <>
      <h1
        className="font-bespoke flex text-orange-100"
        style={{
          lineHeight: "normal",
          letterSpacing: "-0.05em",
          fontSize: `${props.size}rem`,
        }}
        onMouseEnter={() => setNameActive(true)}
        onMouseLeave={() => setNameActive(false)}
      >
        <div className="flex overflow-hidden pr-0.5">
          <motion.div
            initial={false}
            animate={nameActive ? { x: `-${props.size}.5rem`, width: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <img
              className="mt-3 aspect-square max-w-none drop-shadow-md"
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
              className="mt-3 aspect-square max-w-none drop-shadow-md"
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
            <div className="pr-1 drop-shadow-md">y</div>
          </motion.div>
        </div>
      </h1>
      <AntHoneyIndicator
        name={"Hover"}
        firstActive={firstActive}
        size={props.size}
      />
    </>
  )
}
