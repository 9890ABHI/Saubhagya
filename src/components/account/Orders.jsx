import { Box, Button, Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Clothingproducts, CurrentUserAddresses, CurrentUserData } from '../../constants';
import { CartCard, OrderCard } from '../Card';
import Account from './Account';
import { BackButton } from '../Button';
import { Add } from '@mui/icons-material';

export const Orders = () => {
  const [products
    // , setProducts
  ] = useState(Clothingproducts);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const prods = products.slice(0, 4);
  const [filterProds, setFilterProds] = useState(prods);
  return (
    <>
    <Container sx={{background:"#f2f2f2" ,pt:2 , pb:1}} className='max-sm:pt-20'>
      <Box className=" flex px-24 py-10">
        {/* <Account /> */}
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



  export const Logins = () => {
    useEffect(() => {
      window.scroll(0, 0);
    }, []);
    return(
        <>
       <Box className='w-full h-screen'>
        <Box className='pl-10'>
        <BackButton />
        </Box>
        <Box className="pt-10">

        <Account />
        </Box>
       </Box>
        </>
    )
  }

  export const Addresses = () => {
    useEffect(() => {
      window.scroll(0, 0);
    }, []);
    return (
      <>
      <BackButton />
      <Box className='flex flex-col gap-3 pt-10 px-5 bg-[#f2f2f2] h-screen'>
        {
          CurrentUserAddresses.map((item , id) => (
            <>
            <Box className='flex justify-center bg-white px-5 py-3 gap-5 rounded-md'>
              {
                item.isActive ? <> <Box className="w-5  bg-[#c90f72] rounded-full" /></> : <> <Box className="w-5 bg-gray-400 rounded-full"/></>
              }
              <Box>
              <Typography variant='h6'>
                Address {id + 1} :
                </Typography>
             
              <Typography variant='body1' className='capitalize'>
                {item.address}
              </Typography>
              </Box>
            </Box>
            </>
          ))
        }
        <Button variant='text' color='secondary' className='bg-white py-2 gap-2 flex ' >
        <Add/>  Add Address
        </Button>
      </Box>
      </>
    )
  }