import { Card, CardContent, CardHeader } from '@/components/ui/card'
import type { ReactNode } from 'react'
import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Home } from 'lucide-react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className='w-full flex justify-center items-center p-8'>
    <Card className="w-4xl">
      <CardHeader>
        <div className="flex items-start justify-between w-full">
          <div className="flex items-center gap-4">
            <Button asChild size="sm">
              <Link to="/" aria-label="Go to home" className="inline-flex items-center gap-2">
                <Home className="h-4 w-4" />
              </Link>
            </Button>

            <h1 className="text-lg font-semibold">Personal development 3</h1>
          </div>

          <div className="flex items-center gap-2">
            <Link to="/about/pd/hboi-event" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted text-muted-foreground text-sm hover:bg-muted/90">HBO‑I Event</Link>
            <Link to="/about/pd/stage" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted text-muted-foreground text-sm hover:bg-muted/90">Stage</Link>
            <Link to="/about/pd/ambitie" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted text-muted-foreground text-sm hover:bg-muted/90">Ambitie</Link>
            <Link to="/about/pd/linkedin-en-cv" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted text-muted-foreground text-sm hover:bg-muted/90">LinkedIn & CV</Link>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        {children}
      </CardContent>
    </Card>
        </div>
  )
}
