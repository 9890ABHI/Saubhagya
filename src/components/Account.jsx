import { Box } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';

export const Account = () => {
    const user = useSelector((state) => state.user);
    console.log("user info" ,user);
    
  return (
    <>
    <Box>
        <Box>
            User name
        </Box>
        <Box>
            User Address
        </Box>
    </Box>
    </>
  )
}
