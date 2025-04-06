import AntHoney from "./AntHoney";
import HoverIndicator from "./HoverIndicator";

export default function HomeDesktop() {
  return (
    <div className="absolute top-0 flex h-svh w-full flex-col items-center justify-center">
      <AntHoney />
      <HoverIndicator />
    </div>
  );
}
