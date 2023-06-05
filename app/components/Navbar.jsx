import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className="flex flex-row justify-between p-8 items-center">
            <Link href="/">Omar Jabraoui</Link>
            <ul className='flex flex-row items-center gap-4'>
                <li><Link href="/">Blog</Link></li>
                <li><Link href="/">Projects</Link></li>
                <li><Link href="/">About</Link></li>
            </ul>
        </div>
    )
}

export default Navbar