import Animate from './animate-icons'
import { HiSun } from 'react-icons/hi'

const LightIcoon = ({ onClick }) => {
  return (
    <Animate>
      <div className='bg-zinc-500 p-0.5 rounded-md hover:bg-zinc-400 duration-500 ease-in-out'>
        <HiSun className='p-1.5 text-yellow-400' size={32} onClick={onClick} />
      </div>
    </Animate>
  )
}

export default LightIcoon