import AntHoney from "./AntHoney";
import HoverIndicator from "./HoverIndicator";

export default function HomeDesktop() {
  return (
    <div className="h-svh w-full grid grid-cols-5 grid-rows-5">
      <div className="flex flex-col items-center col-start-3 row-start-3">
        <AntHoney />
        <HoverIndicator />
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
