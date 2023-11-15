import Footer from '@/components/Footer'
import { useEffect, useRef } from 'react'
import { FiFigma } from 'react-icons/fi'
import { SiAdobephotoshop } from 'react-icons/si'
import { BiLogoBlender } from 'react-icons/bi'
import { FaNodeJs } from 'react-icons/fa'

export default function UserInterface() {
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
          <div className='text-6xl font-bold'>UI/UX DESIGN</div>
          <div className='w-[50%]'>
            Our focus is on user-centered design and solutions, leveraging not
            only our expertise but also the latest technologies. Our methodology
            is rooted in a comprehensive understanding of users and their
            requirements. This involves extensive research, data organization,
            analysis of user behavior and habits, design, and rigorous testing.
            We visually present all insights, with the primary objective of
            crafting distinct digital products in a refined manner.
          </div>
          <video
            className='w-[50%]'
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
          >
            <source src='/glassDonuts.mp4' type='video/mp4' />
          </video>
        </div>
        {/* INFO */}
        <div className='flex flex-col items-center gap-5 w-full px-40'>
          <div className='flex flex-row gap-20 w-full items-center'>
            <div className='w-[50%] text-3xl font-semibold'>
              <div className='text-sm font-normal text-gray-700'>01</div>
              Web Design
            </div>
            <div className='w-[50%]'>
              In today's digital age, your company website is essentially your
              new business card. It's the first point of contact for anyone who
              discovers your company online. Therefore, maintaining a sharp and
              up-to-date online presence is crucial. A website that's
              well-designed and appealing is key to converting visitors into
              clients.
            </div>
          </div>

          <div className='m-20 w-full'>
            <hr className=' border-gray-700' />
          </div>

          <div className='flex flex-row gap-20 w-full items-center'>
            <div className='w-[50%] text-3xl font-semibold'>
              <div className='text-sm font-normal text-gray-700'>02</div>
              User Interface Design
            </div>
            <div className='w-[50%]'>
              Even if your website looks appealing, it's just another site in
              the vast digital landscape unless it makes a lasting impression
              and excites your users. This is where proper, intuitive, and
              contemporary UI design comes into play.
            </div>
          </div>

          <div className='m-20 w-full'>
            <hr className=' border-gray-700' />
          </div>

          <div className='flex flex-row gap-20 w-full items-center'>
            <div className='w-[50%] text-3xl font-semibold'>
              <div className='text-sm font-normal text-gray-700'>03</div>
              User Experience Design
            </div>
            <div className='w-[50%]'>
              To ensure your website converts as envisioned, it's crucial to
              meticulously consider the journey of your potential users. This
              entails creating an experience on your website that is both
              engaging and interactive, and that's where our expertise is
              invaluable. We are dedicated to developing solutions that are not
              only simple and usable but also user-friendly.
            </div>
          </div>

          <div className='m-20 w-full'>
            <hr className=' border-gray-700' />
          </div>

          <div className='flex flex-row gap-20 w-full items-center'>
            <div className='w-[50%] text-3xl font-semibold'>
              <div className='text-sm font-normal text-gray-700'>04</div>
              Mobile Design
            </div>
            <div className='w-[50%]'>
              We design mobile apps too! Our team will take care of everything
              from research, graphic solution, and app structure to user
              interface, user experience, accessibility, and optimization.
            </div>
          </div>

          <div className='m-20 w-full'>
            <hr className=' border-gray-700' />
          </div>

          <div className='flex flex-row gap-20 w-full items-center'>
            <div className='w-[50%] text-3xl font-semibold'>
              <div className='text-sm font-normal text-gray-700'>05</div>
              Motion Design and 3D
            </div>
            <div className='w-[50%]'>
              The emergence of new technologies has brought new visual concepts.
              And as we follow trends, MAXEDEV also specialized in motion
              design. Simple 2D motion graphics, or stunning 3D animations, you
              choose, we deliver.
            </div>
          </div>

          <div className='m-20 w-full'>
            <hr className=' border-gray-700' />
          </div>
        </div>
        {/* tech stack */}
        <div className='flex flex-row justify-between items-center w-full px-40 py-10'>
          <div className='text-sm'>Technologies</div>
          <div className='flex flex-row gap-10 text-5xl'>
            <FiFigma />
            <SiAdobephotoshop />
            <BiLogoBlender />
          </div>
        </div>
        {/* process */}
        <div className='px-20 py-10 w-full flex flex-row gap-5'>
          <div className='rounded-lg p-6 w-[30%] bg-[#13133a] flex flex-col gap-7'>
            <div className='text-7xl text-[#7c7cff] font-semibold'>01</div>
            <div className='text-3xl'>Research</div>
            <div className='text-[12px] font-light'>
              The initial step encompasses collecting briefs and inputs from the
              client about the project. Following this, we undertake research
              focused on the target audience, competitors, and prevailing market
              trends. This research is aimed at comprehending the client's
              requirements and preferences in-depth.
            </div>
          </div>
          <div className='rounded-lg p-6 w-[30%] bg-[#13133a] flex flex-col gap-7'>
            <div className='text-7xl text-[#7c7cff] font-semibold'>02</div>
            <div className='text-3xl'>Planning</div>
            <div className='text-[12px] font-light'>
              In the second phase, which involves analysis and planning, we
              scrutinize the research data to pinpoint design necessities and
              possibilities. This leads to the formulation of a detailed plan
              that specifies design objectives, strategies, and requisites. This
              step provides us with a more defined understanding of the tasks
              ahead.
            </div>
          </div>
          <div className='rounded-lg p-6 w-[30%] bg-[#13133a] flex flex-col gap-7'>
            <div className='text-7xl text-[#7c7cff] font-semibold'>03</div>
            <div className='text-3xl'>Design</div>
            <div className='text-[12px] font-light'>
              At this stage, our distinct approach becomes evident. We develop
              design concepts, wireframes, and prototypes that are derived from
              the previous planning phase. Once these design mockups are
              prepared, we present them to the client. This initiates an
              iterative process where we refine based on feedback, focusing on
              the minutiae until the final design is perfected.
            </div>
          </div>
          <div className='rounded-lg p-6 w-[30%] bg-[#13133a] flex flex-col gap-7'>
            <div className='text-7xl text-[#7c7cff] font-semibold'>04</div>
            <div className='text-3xl'>Monitoring</div>
            <div className='text-[12px] font-light'>
              At MAXDEV studio, our commitment to our clients is paramount.
              Therefore, post-sales support is a key aspect of our service. We
              diligently track our products post-launch, paying close attention
              to user behavior, product usability, and responsiveness. Our team
              assesses these aspects to decide if additional adjustments are
              necessary. Our ultimate aim is to consistently impress and satisfy
              you, our client.
            </div>
          </div>
        </div>
        {/* footer */}
        <Footer />
      </div>
    </>
  )
}
