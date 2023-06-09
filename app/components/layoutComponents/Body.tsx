import { childrenProps } from '@/types/types'

const Body = ({children} : childrenProps) => {
  return (
    <main className="w-full flex-1 py-7">
        <div className="max-w-7xl mx-auto">{children}</div>
    </main>
  )
}

export default Body