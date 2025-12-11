// Build-time import map for markdown-linked assets (lowercase 'images' only).

// The glob returns an object mapping module paths to their built URLs (as string)
const rawImagesLower = import.meta.glob("../assets/pd3/images/*", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>

// Exact key map: 'images/<file>' -> built URL
export const mdAssetByRel: Record<string, string> = {}

Object.entries(rawImagesLower).forEach(([key, url]) => {
  // key looks like '../assets/pd3/images/foo.png' relative to this file
  const rel = key
    .replace(/^[.]{2}\/(?:assets)\/pd3\/(?:images)\//, "")
  // map by exact 'images/foo.png'
  mdAssetByRel[`images/${rel}`] = url
})

export function resolveMdAssetPath(src: string | undefined): string | undefined {
  if (!src) return undefined
  const normalized = String(src).replace(/^\.\//, "")
  return mdAssetByRel[normalized]
}
