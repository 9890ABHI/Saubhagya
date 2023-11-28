import { Box, Button, Container, Typography } from '@mui/material'
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
    <Box sx={{height:'100%', py:20 , backgroundColor:'#c90f72'}} >
    <Box className='w-full flex justify-center items-center'>
        <Box className='bg-[rgba(200,200,200,0.7)] flex flex-col justify-center items-center h-fit rounded-md py-20 px-20'>
            <Typography variant='h3' className='font-[700] text-[#c90f72] '>
                404 
            </Typography>
            <Typography variant='h3' className='font-[700] text-[#c90f72] '>
            Page Not Found
            </Typography>
            <Typography variant='h5' className='pt-10 text-gray-100'>
           !!! Uh-Oh, Looks Like You're Lost
                {/* Page Not Found ,<br/> something went wrong                             */}
            </Typography>
            <Typography className='pt-5'>
              <Link to={'/'} className='pl-3'>
              <Button variant='contained' className='bg-[#c90f72] hover:bg-[#c80f72] text-white'>
                Home Page
                </Button> 
              </Link>
            </Typography>
        </Box>
    </Box>
    </Box>
    </>
  )
}

export default PageNotFound