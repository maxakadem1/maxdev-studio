import Footer from '@/components/Footer'
import { useEffect, useRef } from 'react'
import { BiLogoReact } from 'react-icons/bi'
import { BiLogoJavascript } from 'react-icons/bi'
import { BiLogoTypescript } from 'react-icons/bi'
import { FaNodeJs } from 'react-icons/fa'

export default function Webdev() {
  // FOR VIDEO
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Check if the videoRef is currently being pointed to an element
    if (videoRef.current) {
      // Set the playback rate here. 0.5 is half the normal speed.
      videoRef.current.playbackRate = 1
    }
  }, [])

  return (
    <>
      <div className='z-[1] flex pt-40 w-screen flex-col items-center justify-center bg-black text-white'>
        {/* INTRO */}
        <div className='px-12 flex flex-col items-center gap-5 w-full'>
          <div className='lg:text-6xl text-4xl font-bold text-center'>
            WEB DEVELOPMENT
          </div>
          <div className='lg:w-[50%] w-full'>
            At MAXDEV studio, web development is at our core. We meticulously
            research, organize data, design, and develop to exceed our clients'
            expectations. Our expertise ranges from immersive web development to
            WordPress, and custom solutions, ready to impress even the most
            discerning clients.
          </div>
          <video
            className='lg:w-[50%] w-full'
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
          >
            <source src='/GlassBlocksHiRes.mp4' type='video/mp4' />
          </video>
        </div>
        {/* INFO */}
        <div className='flex flex-col items-center gap-5 w-full lg:px-40 px-4'>
          <div className='flex lg:flex-row flex-col lg:gap-20 gap-8 w-full items-center'>
            <div className='lg:w-[50%] w-full text-3xl font-semibold'>
              <div className='text-sm font-normal text-gray-700'>01</div>
              Immersive Web Experience
            </div>
            <div className='lg:w-[50%] w-full'>
              You only get one opportunity to make a memorable first impression,
              and you're entitled to an exceptional one. Leveraging our
              expertise and technical proficiency, we'll elevate your company or
              product's online presence. Engage your audience with an enriching
              web experience that includes captivating visualizations, dynamic
              animations, sleek 3D designs, and an overall extraordinary digital
              journey. Share your narrative in a way that leaves your website
              visitors thoroughly impressed.
            </div>
          </div>

          <div className='m-20 w-full'>
            <hr className=' border-gray-700' />
          </div>

          <div className='flex lg:flex-row flex-col lg:gap-20 gap-8 w-full items-center'>
            <div className='lg:w-[50%] w-full text-3xl font-semibold'>
              <div className='text-sm font-normal text-gray-700'>02</div>
              WordPress Development
            </div>
            <div className='lg:w-[50%] w-full'>
              WordPress stands as the world's leading CMS platform, offering
              straightforward daily web management, and we've become experts in
              it. Our team designs visually stunning, robust, captivating, and
              noteworthy solutions that will take your business to greater
              heights. Choose between a classic WordPress setup or opt for a
              headless WordPress CMS development, and leave the rest to us.
              We're here to transform your vision into reality.
            </div>
          </div>

          <div className='m-20 w-full'>
            <hr className=' border-gray-700' />
          </div>

          <div className='flex lg:flex-row flex-col lg:gap-20 gap-8 w-full items-center'>
            <div className='lg:w-[50%] w-full text-3xl font-semibold'>
              <div className='text-sm font-normal text-gray-700'>03</div>
              Custom Web Development
            </div>
            <div className='lg:w-[50%] w-full'>
              Who says everything must adhere strictly to standards? At MAXDEV,
              we respect the established rules and guidelines for product
              development, but our creativity knows no bounds. This is precisely
              why our custom web development services are capable of bringing
              almost any idea you can envision to life!
            </div>
          </div>

          <div className='m-20 w-full'>
            <hr className=' border-gray-700' />
          </div>
          <div className='flex lg:flex-row flex-col lg:gap-20 gap-8 w-full items-center'>
            <div className='lg:w-[50%] w-full text-3xl font-semibold'>
              <div className='text-sm font-normal text-gray-700'>04</div>
              Product Development
            </div>
            <div className='lg:w-[50%] w-full'>
              Got an idea but unsure where to start? Don't fret – MAXDEV is your
              launchpad. Just bring your concept to us, and we'll handle the
              heavy lifting. Our comprehensive services include research,
              branding, design, web development, crafting a go-to-market web
              strategy, launching, and ongoing support. Simply provide us with
              the details and outline your requirements. With our experience and
              expertise, we'll guide your project from its inception to a fully
              realized, successful product.
            </div>
          </div>

          <div className='m-20 w-full'>
            <hr className=' border-gray-700' />
          </div>
        </div>
        {/* tech stack */}
        <div className='flex lg:flex-row flex-col justify-between items-center w-full lg:px-40 px-4 py-10 gap-5'>
          <div className='text-sm'>Technologies</div>
          <div className='flex flex-row gap-10 text-6xl'>
            <BiLogoReact />
            <BiLogoJavascript />
            <BiLogoTypescript />
            <FaNodeJs />
          </div>
        </div>
        {/* process */}
        <div className='lg:px-20 px-4 py-10 w-full flex lg:flex-row flex-col gap-5'>
          <div className='rounded-lg p-6 lg:w-[30%] w-full bg-[#13133a] flex flex-col gap-7'>
            <div className='text-7xl text-[#7c7cff] font-semibold'>01</div>
            <div className='text-3xl'>Planning</div>
            <div className='text-[12px] font-light'>
              The first phase involves gathering client briefs and inputs for
              the project. Then based on that information we conduct research on
              the target audience, competition, and market trends to gain an
              understanding of the client's needs and preferences. As a result,
              a plan is created outlining the project scope, identifying the
              target audience, and creating a site map.
            </div>
          </div>
          <div className='rounded-lg p-6 lg:w-[30%] w-full bg-[#13133a] flex flex-col gap-7'>
            <div className='text-7xl text-[#7c7cff] font-semibold'>02</div>
            <div className='text-3xl'>Design</div>
            <div className='text-[12px] font-light'>
              This is where the magic happens, this is where we show why we are
              different. This phase involves creating the design concepts,
              wireframes, and prototypes based on the planning phase. We share
              design mockups with the client once they are ready and start an
              iteration process where we get feedback on minor details until the
              final design is approved.
            </div>
          </div>
          <div className='rounded-lg p-6 lg:w-[30%] w-full bg-[#13133a] flex flex-col gap-7'>
            <div className='text-7xl text-[#7c7cff] font-semibold'>03</div>
            <div className='text-3xl'>Development</div>
            <div className='text-[12px] font-light'>
              The website development stage involves the actual creation of the
              website based on the approved design. Front-end development refers
              to the parts that are visible to the user, such as the layout,
              design, and user interface. Back-end development for creating a
              user-friendly CMS system and connecting the front-end content,
              server-side logic, and integrations with third-party systems.
            </div>
          </div>
          <div className='rounded-lg p-6 lg:w-[30%] w-full bg-[#13133a] flex flex-col gap-7'>
            <div className='text-7xl text-[#7c7cff] font-semibold'>04</div>
            <div className='text-3xl'>Maintenance</div>
            <div className='text-[12px] font-light'>
              At MAXDEV, we care about our clients. So, after-sales care is
              critical to us. We monitor our products carefully after
              deployment. Once the site is launched, ongoing maintenance is
              necessary to ensure that it continues to function properly and
              remains up-to-date with security patches and software updates.
            </div>
          </div>
        </div>
        {/* footer */}
        <Footer />
      </div>
    </>
  )
}
