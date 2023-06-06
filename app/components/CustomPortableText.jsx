import { urlFor } from "@/sanity/sanity-utils"

const CustomPortableText = {
  types: {
    image: ({ value, isInline }) => {
      return <img
        src={urlFor().image(value).fit('max').auto('format').url()}
        className="rounded-md my-4"
      />
    },
    code: ({ value }) => <pre className="p-4 bg-slate-100 dark:bg-slate-800 rounded-lg my-4">
      <code>{value.code}</code>
    </pre>
  },
  block: {
    h1: ({ children }) => <h1 className="text-5xl font-semibold mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-4xl font-semibold mb-4">{children}</h2>,
    h3: ({ children }) => <h3 className="text-3xl font-semibold mb-4">{children}</h3>,
    h4: ({ children }) => <h4 className="text-2xl font-semibold mb-4">{children}</h4>,
    h5: ({ children }) => <h5 className="text-xl font-semibold mb-4">{children}</h5>,
    h6: ({ children }) => <h6 className="text-lg font-semibold mb-4">{children}</h6>,
    normal: ({ children }) => <p className="leading-8 text-black dark:text-slate-400">{children}</p>
  },

}

export default CustomPortableText