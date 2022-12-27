import Image from 'next/image'
import { SwiperSlide } from 'swiper/react'
import Button from '../../components/button'
import ImageSwiper from '../../components/imageSwiper'
import MemoryGameBack from '../../public/images/memory-game-back.png'
import MemoryGameFront from '../../public/images/memory-game-front.png'
import LandingPageDark from '../../public/images/landing-page-dark.png'
import LandingPageCreateDark from '../../public/images/landing-page-create-dark.png'
import LandingPageLight from '../../public/images/landing-page-light.png'
import LandingPageCreateLight from '../../public/images/landing-page-create-light.png'
import Watch from '../../public/images/watch.png'
import { IoLogoGithub } from 'react-icons/io5'
import { MdFindInPage } from 'react-icons/md'

const MemoryGame = () => {
  return (
    <div className='space-y-4'>
      <h1 className='text-[15px] font-semibold text-center'>Memory Game</h1>
      {/*Carousel*/}
      <ImageSwiper className='rounded-lg z-20'>
        <SwiperSlide><Image src={MemoryGameBack} alt='Memory Game Back Card' className='rounded-lg' placeholder='blur' /></SwiperSlide>
        <SwiperSlide><Image src={MemoryGameFront} alt='Memory Game Front Card' className='rounded-lg' placeholder='blur' /></SwiperSlide>
      </ImageSwiper>
      <p>Memory Games buid in ReactJs.</p>

      <div className='flex justify-evenly'>
        <Button href="https://angelollima-memory-game.vercel.app/" text='Visit the site' icon={<MdFindInPage size={16}/>} />
        <Button href="https://github.com/angelollima/memory-game" text='View code' icon={<IoLogoGithub />} />
      </div>
    </div>
  )
}

const LandingPage = () => {
  return (
    <div className='space-y-4'>
      <h1 className='text-[15px] font-semibold text-center'>Landing Page</h1>
      {/*Carousel*/}
      <ImageSwiper className="rounded-lg z-20">
        <SwiperSlide><Image src={LandingPageDark} className="rounded-lg" alt='Landing Page mode Dark' placeholder='blur' /></SwiperSlide>
        <SwiperSlide><Image src={LandingPageCreateDark} className="rounded-lg" alt='Landing Page mode Light' placeholder='blur' /></SwiperSlide>
        <SwiperSlide><Image src={LandingPageLight} className="rounded-lg" alt='Landing Page mode Light' placeholder='blur' /></SwiperSlide>
        <SwiperSlide><Image src={LandingPageCreateLight} className="rounded-lg" alt='Landing Page mode Light' placeholder='blur' /></SwiperSlide>
      </ImageSwiper>
      <p>Landing Page created with the aim of welcoming the customer in a clean and cozy way.</p>

      <div className="flex justify-evenly">
        <Button href="https://angelollima-landing-page.vercel.app/" text='Visit the site' icon={<MdFindInPage size={16}/>} />
        <Button href="https://github.com/angelollima/landing-page" text='View code' icon={<IoLogoGithub />} />
      </div>
    </div>
  )
}

const DigitalWatch = () => {
  return (
    <div className='space-y-4'>
      <h1 className='text-[15px] font-semibold text-center'>Digital Watch</h1>
      {/*carousel*/}
      <ImageSwiper className="rounded-lg z-20">
        <SwiperSlide><Image src={Watch} className="rounded-lg" alt='Digital Watch' placeholder='blur' /></SwiperSlide>
        <SwiperSlide><Image src={Watch} className="rounded-lg" alt='Digital Watch' placeholder='blur' /></SwiperSlide>
      </ImageSwiper>
      <p>Clock made as base model for screen lock</p>

      <div className="flex justify-evenly">
        <Button href="https://angelollima.github.io/digitalWatch/" text='Visit the site' icon={<MdFindInPage size={16} />} />
        <Button href="https://github.com/angelollima/digitalWatch" text='View code' icon={<IoLogoGithub />} />
      </div>
    </div>
  )
}

const FrontEndProjects = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
      <MemoryGame />
      <LandingPage />
      <DigitalWatch />
    </div>
  )
}

export default FrontEndProjects