import { Box, Button, Container, Typography } from '@mui/material'
import React, { useState } from 'react'
import { AccountPageData, CurrentUserData } from '../constants'
import { Edit } from '@mui/icons-material'
import { Link, useNavigate, useNavigation } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Account = () => {
  const user = useSelector((state) => state.auth.user);
const navigation = useNavigate()
  if(!user) {
    navigation('/login')
  }
else {
  return (
    <>
    <Box className="bg-[#f2f2f2]">

    <Container className=' w-full h-full flex flex-wrap md:gap-10 max-sm:gap-2 justify-center items-center p-4 px-24 py-10 max-sm:pt-20 '>
        {
          AccountPageData.map((item) => (
            <>
            <Link to={item.link}>
            <Box className="flex bg-[#fff] w-[350px] h-[120px] px-10 py-7 gap-4 justify-around items-center rounded-md " sx={{
              // border:'1px solid gray'
              boxShadow:'0px 0px 9px rgba(120,120,120,0.4)'
            }}>
              <img className='w-24 h-24 object-cover' src={item.icon} alt=''  />
             <Box className='flex flex-col items-start'>
              <Typography>
                {item.title}
              </Typography>
              <Typography>
                {item.description}
              </Typography>
             </Box>
            </Box>
              </Link>
            </>
          ))
        }
        <hr className='w-[100%]' />
    </Container>
    
    </Box>
    </>
  )

}
  // const CurrentUser = useState(CurrentUserData)
  // console.log(CurrentUser);
  
}

export default Account