import React, { useState } from 'react'
import { Menu, MenuItem, MenuList, MenuButton, IconButton, Box} from '@chakra-ui/react'
import Logo from './logo'
import Link from 'next/link'
import { HiMenu } from 'react-icons/hi'
import { HiX } from 'react-icons/hi'
import { IoLogoGithub } from 'react-icons/io5'
import ToggleTheme from './toggle-theme'

const NavBar = () => {

  const [open, setOpen] = useState(false);

  return (
    <div className='text_color fixed w-full bg-[#dfd7ce42] dark:bg-[#4b403338] shadow-r_b_shadow backdrop-blur-sm z-20'>
      <div className='p-2 flex justify-between mx-0.5 md:justify-around items-center'>
        <div className='flex items-center'>
          <h1 className='text-xl font-bold leading-tight'>
            <Logo />
          </h1>
        </div>

        <Box className='flex gap-2 md:gap-4'>
          <div className='hidden md:flex md:gap-4 flex-grow-1'>
            <Link
              href='/'
              className='mt-1.5 text_hover'
              >
              About
            </Link>
            <Link
              href='/projects'
              className='mt-1.5 text_hover'
              >
              Projects
            </Link>
            <Link
              target='_blank'
              href='https://github.com/angelollima/angelollima-homepage'
              className='inline-flex items-center gap-1 text_hover'
              >
                <IoLogoGithub />
                Source
            </Link>
          </div>

          <ToggleTheme />

          <Box className='flex md:hidden mr-1.5 border border-transparent_border rounded-md' onClick={()=>setOpen(!open)}>
            <Menu id='navbar-menu'>
              {({ isOpen }) => (
                <>
                  <MenuButton isActive={isOpen} as={IconButton} aria-label='Options' variant='outline'>
                    {isOpen ? <HiX size={34} /> : <HiMenu size={34} />}
                  </MenuButton>
                  <MenuList className='bodyMenu rounded-md w-32 mt-1 space-y-1.5 p-1.5'>
                    <MenuItem>
                      <Link href="/" passHref>
                        About
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link href="/projects" passHref>
                        Projects
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link href="https://github.com/angelollima/angelollima-homepage">
                        View Source
                      </Link>
                    </MenuItem>
                  </MenuList>
                </>
              )}
            </Menu>
          </Box>
        </Box>
      </div>
    </div>
  )
}

export default NavBar