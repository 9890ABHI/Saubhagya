import { Box, Container, Typography } from '@mui/material'
import React, { useState } from 'react'
import { AccountPageData } from '../../constants'
import { Addresses, Logins, Orders } from './Orders'
import { Logout } from '@mui/icons-material'
import { useDispatch } from 'react-redux'
import { logout } from '../../Store/actions'

const Deatils = () => {
    const dispatch = useDispatch()
    const [active , setActive ] = useState(0)
  return (
    <>
    <Box className='flex h-full'>
        <Box className='flex w-[25%] justify-between items-center flex-col bg-white gap-10'>
       <Box className='flex flex-col gap-3 pt-10 px-5  items-center'>
        {
            AccountPageData.map((item) => (
                <>
                <Box className={`flex justify-start px-5 w-full items-center gap-5 py-3 border-2 border-gray rounded-md ${active === item.id - 1 ? "bg-gray-300" : ""} `}
                onClick={() => setActive(item.id - 1)}
                >
                    <img src={item.icon} className={`w-[50px] h-[50px] ${active === item.id ? "bg-gray-300" : ""}`} style={{mixBlendMode:"multiply"}} />
                    <Typography className='text-gray-700'>
                        {item.title}
                    </Typography>
                </Box>
                </>
            ))
        }
        </Box>
        <Box className='flex w-full px-5'>
        <Box className={`flex justify-center px-5 w-full items-center gap-5 py-3 border-2 border-gray rounded-md`}
                onClick={() => dispatch(logout())}
                >
                    <Logout />
                    <Typography className='text-gray-700'>
                        Logout
                    </Typography>
                </Box>
        </Box>
        </Box>
        
        <Box className='w-[100%] p-10 flex justify-center items-start'>
            <Container>
            {
                active === 0 ? <Orders />  : active === 1 ? <Logins /> : active === 2 ? <Addresses /> : null
            }
            </Container>
            </Box>
    </Box>
    </>
  )
}

export default Deatils