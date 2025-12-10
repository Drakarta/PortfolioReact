// no runtime React import needed; react-markdown produces React elements via JSX here

export function makeMDComponents(mdUrl: string) {
  return {
    // resolve relative image paths against the markdown file location
    img: (props: any) => {
      try {
        const src = props.src || ''
        const isAbsolute = /^(https?:)?\/\//i.test(src) || src.startsWith('data:')
        const resolved = isAbsolute ? src : new URL(src, mdUrl).href
        return <img {...props} src={resolved} />
      } catch (e) {
        return <img {...props} />
      }
    },

    // remap heading levels so files that use H1 become H2 on the site, H2 -> H3, etc.
    h1: (props: any) => <h2 className="text-2xl font-semibold mt-6 mb-2">{props.children}</h2>,
    h2: (props: any) => <h3 className="text-xl font-semibold mt-5 mb-2">{props.children}</h3>,
    h3: (props: any) => <h4 className="text-lg font-semibold mt-4 mb-1">{props.children}</h4>,
    h4: (props: any) => <h5 className="text-base font-semibold mt-3 mb-1">{props.children}</h5>,
      // small paragraph tweaks (optional)
      p: (props: any) => <p className="leading-relaxed mt-2 mb-2">{props.children}</p>,

      // table support with simple responsive styling
      table: (props: any) => (
        <div className="w-full overflow-x-auto my-4">
          <table className="w-full table-auto border-collapse">{props.children}</table>
        </div>
      ),
      thead: (props: any) => <thead className="bg-muted text-muted-foreground">{props.children}</thead>,
      tbody: (props: any) => <tbody className="bg-card">{props.children}</tbody>,
      tr: (props: any) => <tr className="border-b last:border-b-0">{props.children}</tr>,
      th: (props: any) => (
        <th className="px-3 py-2 text-left text-sm font-semibold">{props.children}</th>
      ),
      td: (props: any) => <td className="px-3 py-2 text-sm align-top">{props.children}</td>,
      // list support (unordered, ordered, and task lists)
      ul: (props: any) => (
        <ul className="list-disc ml-6 mt-2 space-y-1">{props.children}</ul>
      ),
      ol: (props: any) => (
        <ol className="list-decimal ml-6 mt-2 space-y-1">{props.children}</ol>
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
      a: (props: any) => (
        <a
          {...props}
          className={(props.className ? props.className + ' ' : '') + 'underline underline-offset-2 text-primary hover:opacity-90'}
        >
          {props.children}
        </a>
      ),
  }
}
