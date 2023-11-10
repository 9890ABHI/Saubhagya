import { Box } from '@mui/material';
import React from 'react'
import { HeaderBottomData } from '../constants';
import { useLocation } from 'react-router-dom';
import LinkOptions from './LinkOptions';

const BottomBar = () => {
    const location = useLocation()
  return (
   <>
   <Box className='fixed flex h-[60px] z-10 bottom-0 w-full bg-white sm:hidden'>

<Box
  className=" w-full flex justify-center items-center z-20"
  sx={{
    // background:'linear-gradient(90deg, #c90f7290 0% 2%, #c90f72 0% 20%);'
    background:
      (location.pathname === '/' &&
        "linear-gradient(to right,  #c90f7290, #c90f72 , #c90f72 , #c90f72)") ||
      (location.pathname ===  "/shop" &&
        "linear-gradient(to right,  #c90f72, #c90f7290 , #c90f72 , #c90f72)") ||
        (location.pathname === "/cart" &&
        "linear-gradient(to right,  #c90f72, #c90f72 , #c90f7290 , #c90f72)") ||
      (location.pathname === "/account" &&
        "linear-gradient(to right,  #c90f72, #c90f72 , #c90f72 , #c90f7290)") ||  "linear-gradient(to right,  #c90f72, #c90f72 , #c90f72 , #c90f7290)",

      }}
>
  <Box className="flex justify-around items-center w-full">
    {HeaderBottomData.map((item) => {
      return (
        <>
          <LinkOptions
            id={item.id}
            title={item.title}
            icon={item.icon}
            link={item.link}
            // setCount={setCount}
            />
        </>
      );
    })}
  </Box>
    </Box>
</Box>
   </>
  )
}

export default BottomBar