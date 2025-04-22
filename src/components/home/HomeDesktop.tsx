import { useEffect, useState } from "react";
import AntHoney from "./AntHoney";

function getResponsiveSize() {
  if (typeof window !== "undefined") {
    const w = window.innerWidth;
    if (w >= 1280) return 12;
    if (w >= 1024) return 10;
  }
  return 8;
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
    <div className="h-svh w-full grid-cols-5 grid-rows-5 hidden md:grid">
      <div className="flex flex-col items-center col-start-3 row-start-3">
        <AntHoney key={`size-${size}`} size={size} />
      </div>
      <div className="col-start-2 col-end-5 row-start-5 flex">
        <p className="text-orange-100 text-md font-bespoke">
          Hi, I'm Anthony — a software engineer with
          <br /> a passion for solving problems through
          <br /> innovative software design and development.
        </p>
      </div>
    </div>
  );
}
