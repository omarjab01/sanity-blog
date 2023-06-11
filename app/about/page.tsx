import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <div className='my-16'>
      <section className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <Image src="/pfp.jpg" width={1080} height={1080} alt="Omar Jabraoui"
          className='rounded-xl'
        />
        <div className='py-4'>
          <h4 className='text-2xl font-semibold mb-4'>Hi, i&#39;m omar</h4>
          <p className='text-lg leading-8'>
          I am Omar Jabraoui, a professional frontend developer and web designer residing in Italy.<br />
          My expertise lies in crafting visually appealing and highly functional websites catering to the needs of both corporate entities and individuals.<br />
          I began my career as a Video Editor and Graphic Designer, delivering exceptional services to a diverse range of clients.<br />
          Over time, I transitioned into the realm of Web Design and Development, honing my skills in HTML, CSS, JS, React, Bootstrap, MySQL, Php, NodeJS, and Express.<br />

          When it comes to creating captivating designs, I primarily utilize Figma for UI/UX purposes.<br />
          In addition to that, I possess proficiency in the Adobe suite, ensuring a comprehensive approach to design.
          </p>
          <div className='mt-8'>
            <Link href="https://twitter.com/its_omarjab" target='_blank' className='text-blue-500 font-semibold'>Twitter</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default page