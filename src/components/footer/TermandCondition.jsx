import { Box, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import { TermsandConditionData } from '../../constants';

const TermsandCondition = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
    <Box className='bg-[#f2f2f2] flex justify-center items-center'>
  <Box className="pt-16 flex flex-col w-[75%] px-20 pb-10 bg-[#fff]">
    <Typography variant='h4' className='font-bold py-5' color={'GrayText'}>
    Terms and Conditions 
    </Typography>
    {
      TermsandConditionData.map((item , id) => (
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
        
        </Box>
        </>
      ))
    }
  </Box>
 </Box>
    </>
  )
}

export default TermsandCondition