import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { PrivacyPoliciesData, ReturnPoliciesData } from '../../constants'

export const PrivacyPolicies = () => {
  return (
 <>
 <Box className='bg-[#f2f2f2] flex justify-center items-center'>
  <Box className="pt-16 flex flex-col w-[75%] px-20 pb-10 bg-[#fff]">
    <Typography variant='h4' className='font-bold py-5' color={'GrayText'}>
    Privacy Policy
    </Typography>
    {
      PrivacyPoliciesData.map((item , id) => (
        <>
        <Box className='pb-5'>

        
        <Typography variant='h5' className='pt-5 font-[400]' color={''}>
         {id + 1 } {item.title} :-
        </Typography>
        <Typography variant='body1' className='pt-2 font-light' color={"GrayText"}>
          {item.desc}
        </Typography>
        {
          item.info && item.info.map((item) => (
            <>
            <Box className="pt-5">
            <Typography variant='' className='pt-5 text-md font-[500]'>
            •  {item.title}
            </Typography>
            <Typography variant='body2' className='pt-2 font-light' color={'GrayText'}>
              {item.desc}
            </Typography>
            </Box>
            </>
          ))
        }
        {
item.bulletPoint &&
<>
<Box className="flex flex-col pt-2">


{item.bulletPoint.map((item) => (
  <>
  <Typography variant='' className='pt-2 text-md font-[400]'>
  • {item.title}
  </Typography>
  </>
))}</Box>
</>
        }
        </Box>
        </>
      ))
    }
  </Box>
 </Box>
 </>
  )
}

export const ReturnPolicies = () => {
    return (
      <>
      <Box className='bg-[#f2f2f2] flex justify-center items-center'>
  <Box className="pt-16 flex flex-col w-[75%] px-20 pb-10 bg-[#fff]">
    <Typography variant='h4' className='font-bold py-5' color={'GrayText'}>
    Cancellation & Returns Policies
    </Typography>
    {
      ReturnPoliciesData.map((item , id) => (
        <>
        <Box className='pb-5'>

        
        <Typography variant='h5' className='pt-5 font-[400]' color={''}>
         {id + 1 } {item.title} :-
        </Typography>
        <Typography variant='body1' className='pt-2 font-light' color={"GrayText"}>
          {item.desc}
        </Typography>
        {
          item.desc2 && <Typography variant='body1' className='pt-2 font-light' color={"GrayText"}>
          {item.desc2}
        </Typography>
        }
        {
          item.info && item.info.map((item) => (
            <>
            <Box className="pt-5">
            <Typography variant='' className='pt-5 text-md font-[400]'>
            •  {item.title}
            </Typography>
            </Box>
            </>
          ))
        }
        </Box>
        </>
      ))
    }
  </Box>
 </Box>
      
      </>
    )
  }
  
export const ShippingPolicies = () => {
    return (
      <div>ShippingPolicies</div>
    )
  }
  