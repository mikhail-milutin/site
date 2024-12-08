import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { HomeIcon } from '@radix-ui/react-icons'

export default function HomeButton() {
  return (
    <div className='flex justify-center mt-16'>
      <Link to='/'>
        <Button
          variant='link'
          className='dark text-xl text-[#b0b0b0] hover:text-white tracking-wide'
        >
          <HomeIcon className='mr-2 w-6 h-6' />
          На главную
        </Button>
      </Link>
    </div>
  )
}
