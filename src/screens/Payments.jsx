import { ExpandMore, ShoppingCart } from '@mui/icons-material'
import { Box, Button, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { BackButton } from '../components/Button'

const Payments = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
   <>
   <BackButton />
   <Box className="flex flex-col h-screen items-center pt-12 gap-5">
    <Box className='flex flex-col items-center w-full bg-white px-3 py-2 gap-3'>
      <Box className="w-[75%] max-sm:w-[90%]   flex justify-between">
      <Box className="w-[55%]">

        <Typography variant='h6'>

        Total no. Products : 
        </Typography>
      </Box>
        <Typography variant='h6'>
          4
          {/* {cartProducts.length} */}
        </Typography>
      </Box>
      <Box className="w-[75%] max-sm:w-[90%]  flex justify-between">
        <Box className="w-[55%]">

        <Typography variant='h6'>

        Total price : 
        </Typography>
        </Box>
        <Typography variant='h6'>
        ₹  679.9
          {/* {cartProducts.length} */}
          {' '}
          /-
        </Typography>
      </Box>
    </Box>
      <Box className="w-[75%] max-sm:w-[100%] bg-white px-6 py-2 flex justify-between">
        <Typography>
          Select Payment Method
        </Typography>
        <ExpandMore/>
      </Box>
   </Box>

    <Button className='fixed rounded-tr-xl rounded-tl-xl bottom-[60px] w-full px-6 py-3 text-white gap-3 bg-[#c90f72] flex items-center justify-center'>

    <ShoppingCart />
    <Typography className=' font-[600]' variant='h5'> 
      Buy Now
    </Typography>
    </Button>
    

   
   </>
  )
}

export default Payments