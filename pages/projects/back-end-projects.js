import Image from 'next/image'
import Button from '../../components/button'
import Stickers from '../../public/images/Stickers.png'
import CalculatorPython from '../../public/images/CalculatorPython.png'
import { IoLogoGithub } from 'react-icons/io5'

const StickersGenerator = () => {
  return (
    <div className='space-y-4'>
      <h1 className='text-[15px] font-semibold text-center'>Stickers Generator</h1>
      <Image src={Stickers} alt='Stickers' title='Stickers Generator' className='w-full rounded-lg' placeholder='blur' />
      <p>Sticker generator made in python with the aim of creating stickers to your computer from the mocki api, which has the 250 best movies according to the IMDb website</p>
      
      <div className='flex justify-center'>
        <Button href="https://github.com/angelollima/stickers" text='View code' icon={<IoLogoGithub />} />
      </div>
    </div>
  )
}

const Calculator = () => {
  return (
    <div className='space-y-4'>
      <h1 className='text-[15px] font-semibold text-center'>Calculator</h1>
      <Image src={CalculatorPython} alt='Calculator Python' title='Calculator Python' className='w-full rounded-lg' placeholder='blur' />
      <p>Calculator built in python as a way of studies</p>

      <div className='flex justify-center'>
        <Button href="https://github.com/angelollima/calculator" text='View code' icon={<IoLogoGithub />} />
      </div>
    </div>
  )
}

const BackEndProjects = () => {
  return (
    <div className='lg:w-[60vw] lg:mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6'>
      <StickersGenerator />
      <Calculator />
    </div>
  )
}

export default BackEndProjects