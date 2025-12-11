// no runtime React import needed; react-markdown produces React elements via JSX here
// Using public/ assets: resolve markdown image/PDF paths to /images/* served by Vercel

export function makeMDComponents(mdUrl: string) {
  // Resolve to public paths: /images/* for images and /Anthony_Suhendra_CV.pdf for the CV.
  const resolveAsset = (src: string): string => {
    const s = String(src || "")
    if (/^(https?:)?\/\//i.test(s) || s.startsWith("data:")) return s
    // normalize ./ prefix
    const noDot = s.replace(/^\.\//, "")
    const lc = noDot.toLowerCase()
    // CV special case referenced in markdown
    if (lc === "images/anthony_suhendra_cv.pdf" || lc === "anthony_suhendra_cv.pdf") {
      return "/Anthony_Suhendra_CV.pdf"
    }
    // images or image folder => map to public /images/*
    if (lc.startsWith("images/")) return `/images/${noDot.slice(7)}`
    if (lc.startsWith("image/")) return `/images/${noDot.slice(6)}`
    // otherwise try to resolve relative to md file (dev fallback)
    try {
      return new URL(s, mdUrl).href
    } catch {
      return s
    }
  }
  return {
    // resolve relative image paths against the markdown file location
    img: (props: any) => {
      const resolved = resolveAsset(props.src || "")
      return <img {...props} src={resolved} />
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
  // also resolve relative hrefs (including PDFs/images) to public paths
    a: (props: any) => {
      const href = resolveAsset(props.href || "")
      const isExternal = /^(https?:)?\/\//i.test(href)
      const extraProps = isExternal
        ? { target: "_blank", rel: "noreferrer" }
        : {}
      return (
        <a
          {...props}
          {...extraProps}
          href={href}
          className={
            (props.className ? props.className + " " : "") +
            "text-primary underline underline-offset-2 hover:opacity-90"
          }
        >
          {props.children}
        </a>
      )
    },
  }
}
