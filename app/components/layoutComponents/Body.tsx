import { childrenProps } from '@/types/types'

const Body = ({children} : childrenProps) => {
  return (
    <main className="w-full flex-1 py-7 mt-16">
        <div className="max-w-7xl mx-auto px-4 xl:px-0">{children}</div>
    </main>
  )
}

export default Body