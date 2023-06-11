import { urlFor } from "@/sanity/sanity-utils"
import Image from "next/image"
import CodePost from '@/app/components/CodePost'

const CustomPortableText = {
  types: {
    image: ({ value }) => <Image src={urlFor().image(value).fit('max').auto('format').url()} width={1280} height={720} className="rounded-md my-4" />,
    code: ({ value }) => <CodePost data={value} />
  },
  block: {
    h1: ({ children }) => <h1 className="text-5xl font-semibold mb-4 mt-2">{children}</h1>,
    h2: ({ children }) => <h2 className="text-4xl font-semibold mb-4 mt-2">{children}</h2>,
    h3: ({ children }) => <h3 className="text-3xl font-semibold mb-4 mt-1">{children}</h3>,
    h4: ({ children }) => <h4 className="text-2xl font-semibold mb-4 mt-1">{children}</h4>,
    h5: ({ children }) => <h5 className="text-xl font-semibold mb-4">{children}</h5>,
    h6: ({ children }) => <h6 className="text-lg font-semibold mb-4">{children}</h6>,
    normal: ({ children }) => <p className="leading-8 text-black py-2">{children}</p>,
    blockquote: ({children}) => <blockquote className="pl-2 border-l-blue-400 border-l-4">{children}</blockquote>,
  },

}

export default CustomPortableText