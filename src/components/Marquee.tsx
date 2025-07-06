import { motion } from 'motion/react'


export default function Marquee() {
  return (
            <div data-scroll data-scroll-section data-scroll-speed="-.07" className='bg-[#f15025] w-full py-20 pt-[6rem] rounded-tr-2xl rounded-tl-2xl'>
            <div className='flex whitespace-nowrap text border-t-2 border-b-2 border-zinc-700 overflow-hidden text-amber-200'>
                <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear" , duration: 10 , repeat: Infinity}} className='text-[17vw] leading-none font-["grotesk"] uppercase px-8'>we are ochi</motion.h1>
                <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear" , duration: 10 , repeat: Infinity}} className='text-[17vw] leading-none font-["grotesk"] uppercase px-8'>we are ochi</motion.h1>
                <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear" , duration: 10 , repeat: Infinity}} className='text-[17vw] leading-none font-["grotesk"] uppercase px-8'>we are ochi</motion.h1>
            </div>
        </div>
  )
}
