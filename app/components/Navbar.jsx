'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import {RxHamburgerMenu} from 'react-icons/rx'


const Navbar = () => {
    
    const [openHamburger, setOpenHamburger] = useState(false)
    
    return (
        <div className="flex flex-row justify-between p-8 items-center">
            <Link href="/" className='font-semibold'>Omar Jabraoui</Link>
            <RxHamburgerMenu className='text-black' />
            <ul className='flex flex-row items-center gap-4'>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/about">About</Link></li>
            </ul>
        </div>
    )
}

export default Navbar