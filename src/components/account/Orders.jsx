import { Box, Button, Container, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Clothingproducts, CurrentUserAddresses, CurrentUserData } from '../../constants';
import { CartCard, OrderCard } from '../Card';
import Account from './Account';
import { BackButton } from '../Button';
import { Add, Close } from '@mui/icons-material';

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
    <Box sx={{background:"#f2f2f2"}} className='max-sm:pt-20'>
            <Box className="flex flex-col items-center gap-2">
                {
                  filterProds.map((item) => (
                    <>
                    <OrderCard item={item} />
                    </>
                  ))
                  
                }
            </Box>
    </Box>
    </>
  )
}



  export const Logins = () => {
    useEffect(() => {
      window.scroll(0, 0);
    }, []);
    return(
        <>
       <Box className='w-full'>
        {/* <Box className='pl-10'>
        <BackButton />
        </Box> */}
        <Box className="">
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

const [open , setOpen] = React.useState(false)


    return (
      <>
      <BackButton />
      <Box className='flex flex-col gap-3 pt-10 px-5 bg-[#f2f2f2]'>
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
        <Button variant='text' onClick={() => setOpen(!open)} color='secondary' className='bg-white py-2 gap-2 flex rounded-md' >
        <Add/>  Add Address
        </Button>
      {
        open && (
          <>
<Box className='fixed inset-0 bg-[rgba(20,20,20,0.5)] w-full h-[100%] flex items-center justify-center'>
<Box className="flex w-[50%] h-[50%] relative px-10 py-5 bg-white rounded-md flex-col">
  <Box className="absolute right-0 top-2"> 
<Button onClick={() => setOpen(false)} >
  <Close color='success'/>
</Button>
  </Box>
  <Box className="
  flex flex-col py-10 px-5">
<Typography variant='h5'>
  Add new Address
</Typography>
<Box className="
  flex flex-col py-5 px-5">
<TextField
            label="New Address"
            size=""
            type="text"
            name="address"
            variant="standard"
            // value={values.email}
            // onChange={onChange}
            multiline
            rows={3}
          />
</Box>
<Box className="pt-10">
  <Button  variant='text' sx={{
    border:"none",
    color:"#c90f72",
    backgroundColor:'#000',
    ":hover":{
      backgroundColor:"#c90f72",
      color:"#fff",
      border:'none',
    }
  }}
  className='flex justify-center items-center gap-2'
  >
   <Add/> Add Address
  </Button>
</Box>
  </Box>
</Box>
</Box>
          </>
        )
      }
      </Box>

      </>
    )
  }