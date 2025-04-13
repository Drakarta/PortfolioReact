import AntHoney from "./AntHoney";
import HoverIndicator from "./HoverIndicator";

export default function HomeDesktop() {
  return (
    <div className="top-0 flex h-svh w-full flex-col items-center justify-evenly">
      <AntHoney />
      <HoverIndicator />
      <p className="text-orange-100">Hello I'm Anthony,</p>
    </div>
  );
}
