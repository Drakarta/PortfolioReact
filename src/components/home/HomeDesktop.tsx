import { useEffect, useState } from "react";
import AntHoneyD from "./AntHoneyD";

function getResponsiveSize() {
  if (typeof window !== "undefined") {
    const w = window.innerWidth;
    if (w >= 1280) return 12;
  }
  return 10;
}

export default function HomeDesktop() {
  const [size, setSize] = useState(getResponsiveSize());

  useEffect(() => {
    const handleResize = () => {
      setSize(getResponsiveSize());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="hidden md:grid grid-cols-5 grid-rows-5 w-full h-svh">
      <div className="flex flex-col items-center col-start-3 row-start-3">
        <AntHoneyD key={`size-${size}`} size={size} />
      </div>
      <div className="flex col-start-2 col-end-5 row-start-5">
        <p className="font-sans text-md text-orange-100">
          Hi, I'm Anthony — a software engineer with
          <br /> a passion for solving problems through
          <br /> innovative software design and development.
        </p>
      </div>
    </div>
  );
}
