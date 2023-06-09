import React from 'react'

const Herosection = () => {
    return (
        <div className="flex flex-row items-center gap-8">
            <div>
                <h4>Hello there, i&apos;m omar</h4>
                <p>Web Developer</p>
            </div>
            {/* <Image src="" /> */}
            <img src="https://dvyvvujm9h0uq.cloudfront.net/com/articles/1525891879-379720-warren-wong-242286-unsplashjpg.jpg" className='w-32 h-32 rounded-md object-cover' />
        </div>
    )
}

export default Herosection