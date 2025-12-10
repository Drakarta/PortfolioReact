import { useState } from "react"
import { Card, CardHeader, CardTitle } from "./ui/card"
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover"

function PDMenu() {
  const [open, setOpen] = useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button className="bg-muted text-muted-foreground hover:bg-muted/90 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm transition">
          PD
        </button>
      </PopoverTrigger>

      <PopoverContent
        side="bottom"
        align="end"
        className="bg-card text-card-foreground z-50 mt-2 w-56 rounded-md shadow-lg ring-1 ring-black/5"
      >
        <div>
          <a
            href="/about/pd/hboi-event"
            onClick={() => setOpen(false)}
            className="hover:bg-muted/80 block rounded px-2 py-2 text-sm"
            role="menuitem"
          >
            HBO‑I Event
          </a>
          <a
            href="/about/pd/stage"
            onClick={() => setOpen(false)}
            className="hover:bg-muted/80 mt-1 block rounded px-2 py-2 text-sm"
            role="menuitem"
          >
            Stage
          </a>
          <a
            href="/about/pd/ambitie"
            onClick={() => setOpen(false)}
            className="hover:bg-muted/80 mt-1 block rounded px-2 py-2 text-sm"
            role="menuitem"
          >
            Ambitie
          </a>
          <a
            href="/about/pd/linkedin-en-cv"
            onClick={() => setOpen(false)}
            className="hover:bg-muted/80 mt-1 block rounded px-2 py-2 text-sm"
            role="menuitem"
          >
            LinkedIn en CV
          </a>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default function AboutSection() {
  return (
    <section id="about" className="text-foreground py-16">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex justify-center">
          <Card className="bg-card text-card-foreground w-full max-w-3xl p-6 shadow">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">About me</CardTitle>
            </CardHeader>

            <div className="mt-2 grid grid-cols-1 items-start gap-6 md:grid-cols-[120px_1fr]">
              <div className="flex items-start">
                <div className="bg-accent text-accent-foreground flex h-28 w-28 items-center justify-center rounded-full text-3xl font-semibold shadow-xl">
                  AS
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold">Anthony Suhendra</h3>
                <p className="text-muted-foreground mt-1 text-sm">
                  Student Software Engineer — aspiring Full-Stack Engineer
                </p>

                <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
                  I build thoughtful, user-focused web apps with React and
                  modern tooling. I enjoy turning fuzzy problems into elegant,
                  maintainable solutions and shipping production-ready features.
                  Currently exploring server-side tooling and scalable frontend
                  architecture.
                </p>

                <div className="mt-6">
                  <h4 className="text-muted-foreground text-sm tracking-wide uppercase">
                    Tech stack
                  </h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {[
                      "React",
                      "TypeScript",
                      "Node.js",
                      "PostgreSQL",
                      "Tailwind",
                      "C#",
                      "Python",
                    ].map((t) => (
                      <span
                        key={t}
                        className="bg-muted text-muted-foreground rounded-full px-3 py-1.5 text-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links section */}
                  <div className="mt-4">
                    <h4 className="text-muted-foreground text-sm tracking-wide uppercase">
                      Links
                    </h4>
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      {/* PD popover */}
                      <PDMenu />

                      <a
                        className="bg-muted text-muted-foreground hover:bg-muted/90 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm transition"
                        href="mailto:anthony.suhendra@gmail.com"
                      >
                        Email
                      </a>

                      <a
                        className="bg-muted text-muted-foreground hover:bg-muted/90 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm transition"
                        href="https://www.linkedin.com/in/anthony-suhendra/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        LinkedIn
                      </a>

                      <a
                        className="bg-primary text-primary-foreground inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium transition hover:brightness-95"
                        href="/Anthony_Suhendra_CV.pdf"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Download CV
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
