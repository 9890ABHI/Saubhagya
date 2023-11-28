import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useEffect } from 'react'

export const AboutUs = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
    
    <Box className="w-full bg-[#f2f2f2]">
      <Box className='w-full flex max-sm:flex-col justify-around bg-white py-10 px-20 max-sm:px-3 max-sm:py-3'>
      <img src='https://img.freepik.com/free-vector/people-doing-shopping_1262-19845.jpg'  alt='' className='w-[45%] max-sm:w-full object-fill mix-blend-multiply' />
        <Box className='w-[45%] max-sm:w-full flex flex-col justify-center max-sm:text-justify'>
<Typography variant='h2' className='font-bold text-[#c90f80]'>
  About Us
</Typography>
<Box className='flex-col flex gap-2 pt-10'>
<Typography variant='h5' className='font-medium'>
{/* At PRATIKSHA B ENTERPRISE , we are dedicated to bringing you the finest collection of sarees that reflect the timeless charm and elegance of Indian fashion. Our journey started with a deep passion for the rich heritage of sarees, and we have made it our mission to share this exquisite tradition with you. */}
Discover the essence of elegance at <Typography  variant='h5' className='font-semibold'>PRATIKSHA B ENTERPRISE .</Typography> We curate a selection of timeless sarees that blend tradition with contemporary style. Our commitment to quality and authenticity ensures that every saree tells a unique story. Explore our collection and embrace the beauty of Indian fashion.
</Typography>

<Typography >
{/* Each saree in our collection is a masterpiece, carefully curated to cater to a diverse range of tastes and preferences. Whether you're looking for traditional silk sarees, contemporary designs, or unique fusion styles, we have something special to offer to every saree connoisseur. */}
</Typography>
<Typography >


</Typography>
</Box>
        </Box>
       
      </Box>
    </Box>

    <Box className="w-full bg-[#f2f2f2]">
      <Box className='w-full flex justify-around bg-white py-10 px-20  max-sm:px-3 max-sm:py-3'>
     
        <Box className='w-[45%] max-sm:w-full flex flex-col justify-center'>
<Typography variant='h2' className='font-bold text-[#c90f80]'>
  About PRATIKSHA B ENTERPRISE
</Typography>
<Box className='flex-col flex gap-2 pt-10'>
<Typography>
At PRATIKSHA B ENTERPRISE , we are dedicated to bringing you the finest collection of sarees that reflect the timeless charm and elegance of Indian fashion. Our journey started with a deep passion for the rich heritage of sarees, and we have made it our mission to share this exquisite tradition with you.
{/* Discover the essence of elegance at PRATIKSHA B ENTERPRISE . We curate a selection of timeless sarees that blend tradition with contemporary style. Our commitment to quality and authenticity ensures that every saree tells a unique story. Explore our collection and embrace the beauty of Indian fashion. */}
</Typography>

<Typography >
Each saree in our collection is a masterpiece, carefully curated to cater to a diverse range of tastes and preferences. Whether you're looking for traditional silk sarees, contemporary designs, or unique fusion styles, we have something special to offer to every saree connoisseur.
</Typography>



</Box>
        </Box>
        <img src='https://img.freepik.com/free-vector/people-doing-shopping_1262-19845.jpg'  alt='' className='w-[45%] object-fill mix-blend-multiply flex max-sm:hidden' />
      </Box>
    </Box>
    <Box className="w-full bg-[#f2f2f2] max-sm:pb-16">
      <Box className='w-full flex justify-around bg-white py-10 px-20  max-sm:px-3 max-sm:py-3'>
      <img src='https://img.freepik.com/free-vector/people-doing-shopping_1262-19845.jpg'  alt='' className='w-[45%] object-fill mix-blend-multiply flex max-sm:hidden' />
        <Box className='w-[45%] max-sm:w-full flex flex-col justify-center'>
<Typography variant='h2' className='font-bold text-[#c90f80]'>
  our Products
</Typography>
<Box className='flex-col flex gap-2 pt-10'>
<Typography>
Quality, authenticity, and customer satisfaction are at the core of our values. We collaborate with skilled artisans and designers to ensure that every saree tells a story of craftsmanship and artistry. PRATIKSHA B ENTERPRISE  is more than just an online store; it's a celebration of culture and an exploration of the endless possibilities of saree fashion.
</Typography>
<Typography>
We invite you to explore our wide range of sarees, each a testament to our commitment to tradition and style. Your journey into the world of PRATIKSHA B ENTERPRISE  is a voyage into the heart of Indian fashion, where you'll find the perfect saree to celebrate every occasion and moment in life.
</Typography>
<Typography variant='h6'>
Thank you for choosing PRATIKSHA B ENTERPRISE , and we look forward to being a part of your special moments.
</Typography>



</Box>
        </Box>
        
      </Box>
    </Box>
    </>
  )
}
export const ContactUs = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <Box className='w-full h-screen bg-[#f2f2f2] px-20 py-10'>
      <Box className="w-full h-full flex justify-around bg-white py-5">
        <img className=' h-full' src='https://img.freepik.com/free-vector/customer-support-illustration_23-2148891227.jpg' alt='' />
        <Box className=' h-full flex flex-col justify-center '>
          <Typography variant='h4' className='font-[500] text-[#c90f73]'>
            Contact Us
          </Typography>
          <form className='flex flex-col items-center'>
            <Box className="flex justify-between gap-4 pt-5 w-[100%]">
            <TextField
            label="First Name"
            size=""
            type="text"
            name="name"
            variant="filled"
            className='w-full'
            // value={values.email}
            // onChange={onChange}
          />
            <TextField
            label="Last Name"
            size=""
            type="name"
            name="name"
            variant="filled"
            className='w-full'
            // value={values.email}
            // onChange={onChange}
          />
            </Box>
            <Box className="flex justify-between gap-4 pt-5 pb-10 w-[100%]">
            <TextField
            label="Mobile Number"
            size=""
            type='text'
            definitions={{
              '#': /[1-9]/,
            }}
            // type="number"
            name="number"
            variant="filled"
            className='w-full'
            // value={values.email}
            // onChange={onChange}
          />
            <TextField
            label="email"
            size=""
            type="email"
            name="email"
            variant="filled"
            className='w-full'
            // value={values.email}
            // onChange={onChange}
          />
            </Box>
            <TextField
            label="Your message"
            size=""
            type="text"
            name="text"
            multiline
            rows={4}
            variant="filled"
            // value={values.email}
            // onChange={onChange}
            className='w-full'
          />
          <Box className="pt-10">

            <Button variant='contained' className="px-16 py-2 bg-[#c90f72] hover:bg-[#c90f7299]">
              Submit
            </Button>
          </Box>
          </form>

        </Box>

      </Box>
    </Box>
  )
}
