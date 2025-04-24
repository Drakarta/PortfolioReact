import HomeDesktop from "./home/HomeDesktop";
import HomeMobile from "./home/HomeMobile";
import ScrollIndicator from "./home/ScrollIndicator";

export default function HomeSection() {
  return (
    <section id="home" className="z-100 relative w-full h-svh">
      <HomeDesktop />
      <HomeMobile />
      <ScrollIndicator />
    </section>
  );
}
