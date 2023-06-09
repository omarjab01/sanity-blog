import Link from 'next/link'

const Navbar = () => {
  return (
    <header className="w-full border-b border-b-slate-100">
        <nav className="flex flex-row items-center justify-between mx-auto max-w-7xl py-6 font-semibold px-4 xl:px-0">
            <Link href="/">Omar Jabraoui</Link>
            <ul className="flex flex-row items-center gap-4">
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/about">About</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar