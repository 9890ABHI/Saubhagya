import React, { useState } from 'react'
import { CurrentUserData } from '../../constants';
import { Box, Button, Typography } from '@mui/material';
import { Edit } from '@mui/icons-material';

const Account = () => {
  const user = useSelector((state) => state.auth);
  // console.log(user);
    const CurrentUser = useState(CurrentUserData)
    console.log(CurrentUser);
  return (
    <>
    <Box className="w-[400px] h-fit bg-[#f2f2f2] flex  p-5 justify-center rounded">
           <Box className="flex flex-col  items-center" >
            <img src={CurrentUser[0].img} alt='' className='w-[100px] h-[100px] rounded-2xl' />
            <Box className='pt-3 flex flex-col items-start gap-2'>
<Box className="flex gap-2 bg-[#fff] pl-4 py-1 rounded">
<Typography className='w-[100px] font-semibold'>
  Name :
</Typography>
            <Typography className='w-[200px] text-2xl '>
              {CurrentUser[0].name}
            </Typography>
</Box>
<Box className="flex gap-2 bg-[#fff]  pl-4 py-1 rounded">
<Typography className='w-[100px]  font-semibold '>
  Email :
</Typography>
            <Typography className='w-[200px] font-extrabold '>
              {CurrentUser[0].email}
            </Typography>
</Box>
<Box className="flex gap-2 bg-[#fff]  pl-4 py-1 rounded">
<Typography className='w-[100px]  font-semibold '>
  Mobile no. :
</Typography>
            <Typography className='w-[200px] font-extrabold '>
             {''}{CurrentUser[0].mobile}
            </Typography>
</Box>
<Box className="flex gap-2 bg-[#fff]  pl-4 py-1 rounded">
<Typography className='w-[100px]  font-semibold '>
  Address :
</Typography>
            <Typography className='w-[200px] font-extrabold pr-3 '>
              {''}{CurrentUser[0].address}
            </Typography>
</Box>

            </Box>
            <Box className="pt-10">
            <Button variant='contained' sx={{  color:"#f2f2f2" , backgroundColor:'#000',"&.MuiButton-root": {
              background: "linear-gradient(to left,  #f88b69, #f7d)",
            }, fontSize:15, fontWeight:600 , textAlign:"center"}}>
<Edit className='mr-2 text-blue-900'/>  Edit
</Button>
            </Box>
           </Box>
        </Box>
    </>
  )
}

export default Account