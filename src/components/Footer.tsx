import ContactsButton from './ContactsButton'
import { Button } from '@/components/ui/button'
import { PersonIcon } from '@radix-ui/react-icons'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <div className='bg-zinc-950 py-[24px] md:px-[300px] mt-10 px-[30px] flex  items-center justify-center gap-10 tracking-wide'>
      <div className='lg:text-xl md:text-md text-sm flex flex-col items-start'>
        <p>Посещение только по </p>
        <p>предварительной записи</p>
      </div>
      <motion.div whileHover={{ scale: 1.1 }}>
        <ContactsButton>
          <Button className='lg:text-lg md:text-md text-sm dark rounded-full h-12 w-12 p-3 bg-lightgray'>
            <PersonIcon className='h-full w-full' />
          </Button>
        </ContactsButton>
      </motion.div>
    </div>
  )
}
