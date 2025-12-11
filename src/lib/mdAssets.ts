// Build-time import map for markdown-linked assets so we don't rely on public/.
// This supports both 'Images' and 'images' folder names and resolves to hashed URLs.

// The glob returns an object mapping module paths to their built URLs (as string)
const rawImagesUpper = import.meta.glob("../assets/pd3/Images/*", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>

const rawImagesLower = import.meta.glob("../assets/pd3/images/*", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>

const raw = { ...rawImagesUpper, ...rawImagesLower }

// Normalize keys to lowercase and to common prefixes so lookups are easy
export const mdAssetByRelLower: Record<string, string> = {}

Object.entries(raw).forEach(([key, url]) => {
  // key looks like '../assets/pd3/Images/Foo.png' relative to this file
  const rel = key
    .replace(/^[.]{2}\/(?:assets)\/pd3\/(?:images|Images)\//, "")
  // map by 'images/foo.png' and plain 'foo.png'
  mdAssetByRelLower[`images/${rel}`.toLowerCase()] = url
  mdAssetByRelLower[rel.toLowerCase()] = url
})

export function resolveMdAssetPath(src: string | undefined): string | undefined {
  if (!src) return undefined
  const s = String(src).replace(/^\.\//, "")
  const candidateA = s.toLowerCase()
  const candidateB = (s.startsWith("images/") ? s : `images/${s}`).toLowerCase()
  return mdAssetByRelLower[candidateB] || mdAssetByRelLower[candidateA]
}
