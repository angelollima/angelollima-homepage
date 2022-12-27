import Head from 'next/head'
import Image from 'next/image'
import Paragraph from '../components/paragraph'
import Button from '../components/button'
import Angelo from '../public/images/Angelo.jpeg'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import Footer from '../components/footer'

const Home = () => {
  return (
    <>
      <Head>
        <title>Angelo Lima</title>
        <meta name="description" content="Portfolio about Angelo Lima, a junior developer always looking for development." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='w-[90vw] flex flex-col justify-center mx-auto'>
        <div className='space-y-6'>
          <div className='flex flex-col items-center sm:flex-row sm:justify-evenly'>
            <div>
              <Paragraph className='rounded-lg mb-6 py-2 px-2 bg-transparent_screen'>
                <p className='text-sm lg:text-base text-center'>Hi, I&apos;m a fullstack developer based in Brazil!</p>
              </Paragraph>
              <Paragraph className='rounded-lg mb-6 sm:mb-0 pt-6 px-2'>
                <p className='text-md lg:text-lg text-center'>Angelo Antonio L.S. Filho</p>
                <p className='text-xs lg:text-sm text-center'>Junior Programmer ( Student / Developer / Monitor )</p>
              </Paragraph>
            </div>
            <div className='w-40 h-40 border-t border-l rounded-full shadow-r_b_shadow dark:border-0 dark:shadow-shadow'>
              <Image 
                  src={Angelo}
                  priority={true}
                  alt='Angelo photo'
                  width='160'
                  height='160'
                  className='flex justify-center rounded-full border-8 border-transparent'
                  placeholder='blur'
              />
            </div>
          </div>
          <div className='text-sm'>
            <div className='flex flex-col space-y-1 tracking-wide text-justify'>
              <p className='text-[17px] font-semibold'>Bio</p>
              <Paragraph className='flex space-x-6'>
                <p>2001</p>
                <p>-</p>
                <p>Born in Espirito Santo, Brazil.</p>
              </Paragraph>
              <Paragraph className='flex space-x-6'>
                <p>2022 to 2023</p>
                <p>-</p>
                <p>Studying IT at IFES.</p>
              </Paragraph>
              <Paragraph className='flex space-x-6'>
                <p>2022 to present</p>
                <p>-</p>
                <p>Working as a monitor on IFES on the present programation course</p>
              </Paragraph>
            </div>
          </div>
          <div className='flex justify-end'>
            <div className='text-sm'>
              <div className='space-y-1 tracking-widest text-justify'>
                <p className='text-[17px] font-semibold'>About</p>
                <p>
                  Programming student and full-stack developer
                  with a passion for creating solutions for daily challenges.
                  I love the feeling of seeing a project leaving the paper and going to the screens.
                </p>
              </div>
            </div>
          </div>

          <div className='flex justify-center gap-3 sm:gap-10 text-xs min-[450px]:text-sm text_hover pt-6'>
              <Button text='Visit my Github' href="https://github.com/angelollima" icon={<IoLogoGithub />} />
              <Button text='Visit my Linkedin' href="https://www.linkedin.com/in/angelollima/" icon={<IoLogoLinkedin />} />
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}

export default Home