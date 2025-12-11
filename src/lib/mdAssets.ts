// Build-time import map for markdown-linked assets so we don't rely on public/.
// Only use the lowercase 'images' folder name to avoid case issues on Vercel.

// The glob returns an object mapping module paths to their built URLs (as string)
const rawImagesLower = import.meta.glob("../assets/pd3/images/*", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>

// Also support singular folder name variants just in case (Image/image)

const raw: Record<string, string> = {
  ...rawImagesLower,
}

// Normalize keys to lowercase and to common prefixes so lookups are easy
export const mdAssetByRelLower: Record<string, string> = {}

Object.entries(raw).forEach(([key, url]) => {
  // key looks like '../assets/pd3/images/foo.png' relative to this file
  const rel = key
    .replace(/^[.]{2}\/(?:assets)\/pd3\/(?:images)\//, "")
  // map by 'images/foo.png' and plain 'foo.png'
  mdAssetByRelLower[`images/${rel}`.toLowerCase()] = url
  mdAssetByRelLower[rel.toLowerCase()] = url
})

export function resolveMdAssetPath(src: string | undefined): string | undefined {
  if (!src) return undefined
  const s = String(src).replace(/^\.\//, "")
  const lc = s.toLowerCase()
  const cands = new Set<string>()
  cands.add(lc)
  // Normalize leading folder variants to "images/"
  cands.add(lc.replace(/^images\//, "images/"))
  // Also try prefixing with images/
  if (!lc.startsWith("images/")) {
    cands.add(("images/" + lc).toLowerCase())
  }
  for (const k of cands) {
    const found = mdAssetByRelLower[k]
    if (found) return found
  }
  return undefined
}
