import Animate from './animate-icons'
import { HiMoon } from 'react-icons/hi'

const DarkIcoon = ({ onClick }) => {
  return (
    <Animate>
      <div className='bg-blue-500 p-0.5 rounded-md hover:bg-blue-400 duration-500 ease-in-out'>
        <HiMoon className='p-1.5 text-white' size={32} onClick={onClick} />
      </div>
    </Animate>
  )
}

export default DarkIcoon