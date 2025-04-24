import { useState } from "react";
import { motion } from "motion/react";

import ant from "../../assets/ant_flat.svg";
import honey from "../../assets/honey_pot_flat.svg";

export default function AntHoneyM() {
  const size = 4;
  const [nameActive, setNameActive] = useState(false);
  return (
    <div>
      <h1
        className="flex flex-col font-bespoke text-orange-100"
        style={{
          lineHeight: "normal",
          letterSpacing: "-0.05em",
          fontSize: `${size}rem`,
        }}
        onClick={() => setNameActive(!nameActive)}
      >
        <div className="flex flex-row justify-center">
          <img
            className="drop-shadow-md mt-3 max-w-none aspect-square"
            style={{
              width: `${size * 2}rem`,
            }}
            src={ant}
            alt="ant"
            aria-hidden="true"
          />
          <img
            className="drop-shadow-md mt-3 max-w-none aspect-square"
            style={{
              width: `${size * 2}rem`,
            }}
            src={honey}
            alt="honey"
            aria-hidden="true"
          />
        </div>
        <motion.div
          className="flex flex-row justify-center overflow-hidden"
          initial={{ height: "0rem" }}
          animate={nameActive ? { height: "auto" } : {}}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div>Ant</div>
          <div>hon</div>
          <motion.div
            initial={{ width: `${size / 2}rem`, y: `${size}rem` }}
            animate={
              nameActive
                ? {
                    y: ["0rem", `${size}rem`, `${size}rem`],
                    width: [`${size / 2}rem`, `${size / 2}rem`, "0rem"],
                  }
                : {}
            }
            transition={{
              delay: 0.375,
              duration: nameActive ? 0.75 : 0,
              ease: "easeInOut",
              times: [0.3, 0.6, 0.9],
            }}
          >
            e
          </motion.div>
          <div>y</div>
        </motion.div>
      </h1>
    </div>
  );
}
