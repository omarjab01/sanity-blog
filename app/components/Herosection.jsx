import { url } from 'inspector'
import React from 'react'
import Macbook from '@/public/macbook.png'
import Image from 'next/image'

const Herosection = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16 my-4 md:my-32">
            <div>
                <h2 className='text-3xl md:text-5xl font-semibold mb-8'>Cutting-Edge Web Design and Development for the Modern Business</h2>
                {/* <p className='mb-8'>I specialize in creating custom websites for businesses and individuals, including landing pages, blogs, and portfolios. I provide personalized attention to every project and ensure that your website reflects your unique brand.<br />
                With my custom WordPress themes and ongoing maintenance and support, you can have a website that stands out and achieves your online goals.<br />
                </p> */}
                <p className='mb-12 leading-6 md:leading-7 text-base md:text-lg text-gray-700'>
                    I create custom websites that align with your brand and drive traffic to your site. Whether you need a landing page, blog, or portfolio, I specialize in providing tailored solutions that meet your unique needs. With my expertise in custom WordPress themes, ongoing maintenance, and dedicated support, your website is in good hands.
                </p>
                <a className='px-6 py-3 rounded-full bg-black text-white' href='mailto:omarjab01@gmail.com' target='_blank'>Let's Collaborate</a>
            </div>
            <div className='relative h-96 w-full bgMacbook' style={{backgroundImage: url(Macbook)}}>
                <Image src="/graph_1.png" height="280" width="420" className='absolute z-10 -top-4 left-8' />
                <Image src="/graph_2.png" height="140" width="200" className='absolute z-20 bottom-16 right-8 drop-shadow-xl' />
            </div>
        </div>
    )
}

export default Herosection