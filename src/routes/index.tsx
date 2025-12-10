import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "🐜🍯 | Anthony",
      },
    ],
  }),
  component: Index,
})

import KonamiCode from "../components/KonamiCode"
import HomeSection from "../components/HomeSection"
import AboutSection from "../components/AboutSection"

import grainy from "../assets/grainy.png"
import ProjectSection from "../components/ProjectSection"

function Index() {
  KonamiCode(() => {
    window.location.href =
      "https://www.youtube.com/watch?v=dQw4w9WgXcQ?autoplay=1&mute=1"
  })

  return (
    <>
      <div
        className="fixed z-50 flex h-lvh w-full flex-col items-center justify-center bg-[109px] bg-repeat opacity-40 bg-blend-multiply mix-blend-multiply"
        style={{
          backgroundImage: `url(${grainy})`,
        }}
      ></div>
      <HomeSection />
      <AboutSection />
      <ProjectSection />
    </>
  )
}
