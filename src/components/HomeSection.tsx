import HomeDesktop from "./home/HomeDesktop";
import ScrollIndicator from "./home/ScrollIndicator";

export default function HomeSection() {
  return (
    <section id="home" className="relative z-100 h-svh w-full">
      <HomeDesktop />
      <ScrollIndicator />
    </section>
  );
}
