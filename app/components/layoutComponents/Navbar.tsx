'use client'

import Link from 'next/link'
import { useState } from 'react'
import {RxHamburgerMenu} from 'react-icons/rx'
import {GrFormClose} from 'react-icons/gr'

const Navbar = () => {
  const [openHamburger, setOpenHamburger] = useState(false)
  const [mobile, setMobile] = useState(false)
  return (
    <header className={`w-full border-b border-b-slate-100 backdrop-blur-lg fixed z-50 transition-all ease-in-out duration-300 ${mobile && ' backdrop-blur-xl'} `}>
        <nav>
            <div className="flex flex-row items-center justify-between mx-auto max-w-7xl py-6 font-semibold px-4 xl:px-0">
              <Link href="/">Omar Jabraoui</Link>
              {
                mobile ? <GrFormClose className='text-2xl font-semibold cursor-pointer md:hidden' onClick={() => setMobile(false)} /> : <RxHamburgerMenu className='text-black text-xl font-semibold cursor-pointer md:hidden' onClick={() => setMobile(true)} />
              }
              <ul className="hidden md:flex md:flex-row md:items-center gap-4">
                  <li><Link href="/blog">Blog</Link></li>
                  <li><Link href="/about">About</Link></li>
              </ul>
            </div>
            {
              mobile && (
                <div className='px-4 my-8 h-full mb-16 md:hidden'>
                  <ul className="flex flex-col items-center gap-8">
                    <li><Link href="/blog" className='text-lg font-semibold'>Blog</Link></li>
                    <li><Link href="/about" className='text-lg font-semibold'>About</Link></li>
                  </ul>
                </div>    
              )
            }
        </nav>
    </header>
  )
}

export default Navbar