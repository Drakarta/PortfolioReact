import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "🐜🍯 | Anthony",
      },
    ],
  }),
  component: Index,
});

import KonamiCode from "../components/KonamiCode";
import HomeSection from "../components/HomeSection";
import AboutSection from "../components/AboutSection";

import grainy from "../assets/grainy.png";
import ProjectSection from "../components/ProjectSection";

function Index() {
  KonamiCode(() => {
    window.location.href =
      "https://www.youtube.com/watch?v=dQw4w9WgXcQ?autoplay=1&mute=1";
  });

  return (
    <>
      <div
        className="z-50 fixed flex flex-col justify-center items-center bg-[109px] bg-blend-multiply bg-repeat opacity-40 w-full h-lvh mix-blend-multiply"
        style={{
          backgroundImage: `url(${grainy})`,
        }}
      ></div>
      <HomeSection />
      <ProjectSection />
      <AboutSection />
    </>
  );
}
