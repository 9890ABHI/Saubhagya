import { Box, Container, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Clothingproducts } from '../../constants';
import { CartCard, OrderCard } from '../Card';
import {Account} from '../Account';

export const Orders = () => {
  const [products
    // , setProducts
  ] = useState(Clothingproducts);

  const prods = products.slice(0, 4);
  const [filterProds, setFilterProds] = useState(prods);
  return (
    <>
    <Container sx={{background:"#f2f2f2" ,pt:2 , pb:1}} className=''>
      <Box className=" flex px-24 py-10">
        <Account />
      </Box>
        <Box className='relative'>
            <Box className="flex flex-col items-center gap-2 pb-24">
                {
                  filterProds.map((item) => (
                    <>
                    <OrderCard item={item} />
                    </>
                  ))
                  
                }
            </Box>
            <Box className="absolute bottom-0 w-full px-24 max-sm:hidden flex justify-around items-center h-16 bg-[#fff] rounded-md">
             <Typography variant='h5'>
              Total number of purchese : 
             </Typography>
              <Typography variant='h5'>
                {
                  filterProds.length
                }
              </Typography>
            </Box>
        </Box>
    </Container>
    </>
  )
}


export const Payments = () => {
    return (
      <>
      Payments
      </>
    )
  }


  export const Logins = () => {
    return(
        <>
        Logins
        </>
    )
  }