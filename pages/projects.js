import Footer from '../components/footer'
import BackEndProjects from './projects/back-end-projects'
import FrontEndProjects from './projects/front-end-projects'

const Projects = () => {
  return (
    <div className='w-[90vw] mx-auto space-y-10 text-center mb-10'>
      <section>
        <h1 className='text-[17px] text-center underline font-semibold mb-6'>Front-end Projects</h1>
        <FrontEndProjects />
      </section>
      <section>
        <h1 className='text-[17px] text-center underline font-semibold mb-6'>Back-end Projects</h1>
        <BackEndProjects />
      </section>

      <Footer />
    </div>
  )
}

export default Projects