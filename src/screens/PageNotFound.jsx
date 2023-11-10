import { Box, Button, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { BackButton } from '../components/Button'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
    <BackButton  />
    <Box className='w-full h-screen flex justify-center pt-20'>
        <Box className='bg-white h-fit rounded-md py-10 px-10'>
            <Typography variant='h4' className='font-[700] text-[#c90f72] '>
                404 <br/> Page Not Found
            </Typography>
            <Typography variant='h5' className='pt-10  text-gray-600'>
           !!! Uh-Oh, Looks Like You're Lost
                {/* Page Not Found ,<br/> something went wrong                             */}
            </Typography>
            <Typography>
              go to the 
              <Link to={'/'} className='pl-3'>
              <Button variant='contained' className='bg-[#c90f72] hover:bg-[#c80f72] text-white'>
                Home Page
                </Button> 
              </Link>
            </Typography>
        </Box>
    </Box>
    </>
  )
}

export default PageNotFound