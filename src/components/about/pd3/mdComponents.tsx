// no runtime React import needed; react-markdown produces React elements via JSX here

// Build-time map of images in this folder (Vite will rewrite to final URLs).
const __assetsImageMap: Record<string, string> = import.meta.glob('../../../assets/pd3/images/*', { query: '?url', import: 'default', eager: true }) as Record<string, string>

export function makeMDComponents(mdUrl: string) {
  // helper to resolve an asset (image/pdf) to a usable URL in dev and production
  function resolveAsset(src: string) {
    if (!src) return src
    const isAbsolute = /^(https?:)?\/\//i.test(src) || src.startsWith('data:')
    if (isAbsolute) return src

    // Prefer matching against the import.meta.glob *keys* (the original source paths).
    // Keys look like "../../../assets/pd3/images/Welkom.png" or "./Images/foo.png".
    const combinedMap: Record<string, string> = Object.assign({}, __assetsImageMap)

    // Normalized source path from the markdown (strip leading ./ or /)
    const normalizedSrc = src.replace(/^\.\/?/, '').replace(/^\//, '')
    const srcLower = normalizedSrc.toLowerCase()
    const filename = src.split('/').pop() || src
    const filenameLower = filename.toLowerCase()

    // 1) Try exact key suffix match: key endsWith the same relative path used in the markdown
    for (const [key, val] of Object.entries(combinedMap)) {
      const keyLower = key.toLowerCase()
      if (keyLower.endsWith('/' + srcLower) || keyLower.endsWith(srcLower)) {
        return val
      }
    }

    // 2) Fallback: match by filename presence in the key (useful when markdown uses just `images/foo.png`)
    for (const [key, val] of Object.entries(combinedMap)) {
      const keyLower = key.toLowerCase()
      if (keyLower.endsWith(filenameLower) || keyLower.includes('/' + filenameLower) || keyLower.includes('%2f' + filenameLower)) {
        return val
      }
    }

    // 3) As a last resort, try to resolve relative to the markdown file location (dev mode / other cases)

    try {
      return new URL(src, mdUrl).href
    } catch (e) {
      return src
    }
  }

  return {
    // resolve relative image paths against the markdown file location
    img: (props: any) => {
      try {
        const src = props.src || ''
        const resolved = resolveAsset(src)
        // If the asset is a PDF, embed it using an object tag
        if (resolved && resolved.toLowerCase().endsWith('.pdf')) {
          return (
            <div className="my-4">
              <object data={resolved} type="application/pdf" className="w-full h-[700px]">
                <a href={resolved} target="_blank" rel="noreferrer">Open PDF</a>
              </object>
            </div>
          )
        }

        return <img {...props} src={resolved} />
      } catch (e) {
        return <img {...props} />
      }
    },

    // remap heading levels so files that use H1 become H2 on the site, H2 -> H3, etc.
    h1: (props: any) => (
      <h2 className="mt-6 mb-2 text-2xl font-semibold">{props.children}</h2>
    ),
    h2: (props: any) => (
      <h3 className="mt-5 mb-2 text-xl font-semibold">{props.children}</h3>
    ),
    h3: (props: any) => (
      <h4 className="mt-4 mb-1 text-lg font-semibold">{props.children}</h4>
    ),
    h4: (props: any) => (
      <h5 className="mt-3 mb-1 text-base font-semibold">{props.children}</h5>
    ),
    // small paragraph tweaks (optional)
    p: (props: any) => (
      <p className="mt-2 mb-2 leading-relaxed">{props.children}</p>
    ),

    // table support with simple responsive styling
    table: (props: any) => (
      <div className="my-4 w-full overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          {props.children}
        </table>
      </div>
    ),
    thead: (props: any) => (
      <thead className="bg-muted text-muted-foreground">{props.children}</thead>
    ),
    tbody: (props: any) => <tbody className="bg-card">{props.children}</tbody>,
    tr: (props: any) => (
      <tr className="border-b last:border-b-0">{props.children}</tr>
    ),
    th: (props: any) => (
      <th className="px-3 py-2 text-left text-sm font-semibold">
        {props.children}
      </th>
    ),
    td: (props: any) => (
      <td className="px-3 py-2 align-top text-sm">{props.children}</td>
    ),
    // list support (unordered, ordered, and task lists)
    ul: (props: any) => (
      <ul className="mt-2 ml-6 list-disc space-y-1">{props.children}</ul>
    ),
    ol: (props: any) => (
      <ol className="mt-2 ml-6 list-decimal space-y-1">{props.children}</ol>
    ),
    li: (props: any) => {
      // react-markdown + remark-gfm passes a `checked` prop for task list items
      const { checked } = props as any
      if (typeof checked === "boolean") {
        return (
          <li className="flex items-start gap-3">
            <input
              type="checkbox"
              checked={checked}
              readOnly
              className="mt-1 h-4 w-4 rounded border"
              aria-hidden="true"
            />
            <span className="flex-1">{props.children}</span>
          </li>
        )
      }

      return <li className="ml-0">{props.children}</li>
    },
    // link styling: underline links from markdown for visibility
    a: (props: any) => {
      const href = props.href || ''
      const resolved = resolveAsset(href)
      // If the link points to a PDF, show a download/open link and embed the PDF below
      if (resolved && resolved.toLowerCase().endsWith('.pdf')) {
        return (
          <div className="my-4">
            <a
              href={resolved}
              target="_blank"
              rel="noreferrer"
              className={(props.className ? props.className + ' ' : '') + 'text-primary underline underline-offset-2 hover:opacity-90'}
            >
              {props.children}
            </a>

            <div className="mt-3">
              <object data={resolved} type="application/pdf" className="w-full h-[700px]">
                <a href={resolved} target="_blank" rel="noreferrer">Open PDF</a>
              </object>
            </div>
          </div>
        )
      }

      return (
        <a
          {...props}
          href={resolved}
          className={(props.className ? props.className + ' ' : '') + 'text-primary underline underline-offset-2 hover:opacity-90'}
        >
          {props.children}
        </a>
      )
    },
  }
}
