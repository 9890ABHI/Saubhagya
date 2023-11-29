import { Box,  Container,  Typography } from "@mui/material";
import React, { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { ImagesData } from "../constants";
import { ArrowRightAlt, ChevronRight } from "@mui/icons-material";
import { Ratings } from "../components/Rating";

const Home = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
    <Box className="max-sm:h-screen  max-sm:overflow-y-scroll ">
    {/* <Box className="w-full flex justify-center pt-7 md:hidden ">
      <img src={require('../assets/pb.png')} className="w-fit h-16 object-fill" alt="" />

      </Box> */}
   
      {/* home page container 1 */}
      <Box
        sx={{
          // width: "100vw",

        }}
        className="pt-3 max-sm:pt-5"
      >
        <Link to={`/shop`}>
          <Carousel
            autoPlay
            // infiniteLoop
            swipeable={true}

            showThumbs={false}
            showIndicators={false}
            showArrows={false}
            showStatus={false}
            interval={3500}
            transitionTime={2500}
            className="text-[#000] h-[500px] overflow-hidden rounded-md max-sm:h-[200px] "
          >
            {ImagesData.map((item) => (
              <>
                <Box className="w-full h-full overflow-hidden rounded-sm">
                  <img
                    src={item.img}
                    alt=""
                    // width={""}
                    // height={500}
                    className="object-cover w-full h-full rounded-md"
                  />
                </Box>
              </>
            ))}
          </Carousel>
          {/* <img
            src={
              "https://img.freepik.com/free-photo/magnificent-woman-long-bright-skirt-dancing-studio-carefree-inspired-female-model-posing-with-pleasure-yellow_197531-11084.jpg?size=626&ext=jpg&ga=GA1.1.2085897651.1682179198&semt=sph"
            }
            alt="home"
            className="object-cover w-[100%] h-[100%] rounded-md"
          /> */}
        </Link>
      </Box>
      {/* home page container 2 */}
      <Container
        sx={{
          width: "100%",
          height: 800,
        }}
        className="flex justify-between items-center max-sm:hidden  pb-10 "
      >
        <Box
          sx={{ width: "35%", height: "100%" }}
          className="flex items-center"
        >
          <img
            src="https://img.freepik.com/free-photo/young-indian-woman-wearing-sari_23-2149400904.jpg?size=626&ext=jpg&ga=GA1.1.1529557540.1698478113&semt=sph"
            alt=""
            width={"100%"}
            className="object-fill rounded-md"
          />
        </Box>
        <Box
          sx={{ width: "60%" }}
          className="flex flex-col justify-center items-center"
        >
          <Box className="flex">
            <Box className="w-[200px] h-[350px] p-2 flex flex-col justify-center">
              <img
                src={require("../assets/HomeImages/img1.jpg")}
                // src="https://img.freepik.com/free-photo/young-indian-woman-wearing-sari_23-2149400843.jpg?w=360&t=st=1698742717~exp=1698743317~hmac=9b254ba82707d4394e9090f35448732ed1cc37f7a8205239ba851b5238350332"
                alt=""
                className="w-[200px] h-[350px] object-cover rounded-md"
              />
              <Typography
                className="pt-2 font-semibold underline cursor-pointer"
                sx={{
                  transition: "0.5s",
                  ":hover": { color: "blueviolet" },
                }}
              >
                Shop Now
                <ChevronRight />
              </Typography>
            </Box>
            <Box className="w-[200px] h-[350px] p-2 flex flex-col justify-center">
              <img
                src={require("../assets/HomeImages/img2.jpg")}
                // src="https://img.freepik.com/free-photo/young-indian-woman-wearing-sari_23-2149400846.jpg?size=626&ext=jpg"
                alt=""
                className="w-[200px] h-[350px] object-cover rounded-md"
              />
              <Typography
                className="pt-2 font-semibold underline cursor-pointer"
                sx={{
                  transition: "0.5s",
                  ":hover": { color: "blueviolet" },
                }}
              >
                Shop Now
                <ChevronRight />
              </Typography>
            </Box>
          </Box>
          <Box className="flex">
            <Box className="w-[200px] h-[350px] p-2 flex flex-col justify-center">
              <Typography className="pt-2" variant="h5">
                Effortlessly Chic Wrap Dress{" "}
              </Typography>
              <Typography className="pt-2 font-light">
                Achieve that coveted "effortlessly chic" look with our wrap
                dress.
              </Typography>
            </Box>
            <Box className="w-[200px] h-[350px] p-2 flex flex-col justify-center">
              <img
                src={require("../assets/HomeImages/img3.jpg")}
                // src="https://img.freepik.com/free-photo/young-indian-woman-wearing-sari_23-2149400842.jpg?size=626&ext=jpg"
                alt=""
                className="w-[200px] h-[350px] object-cover rounded-md"
              />
              <Typography
                className="pt-2 font-semibold underline cursor-pointer"
                sx={{
                  transition: "0.5s",
                  ":hover": { color: "blueviolet" },
                }}
              >
                Shop Now
                <ChevronRight />
              </Typography>
            </Box>
            <Box className="w-[200px] h-[350px] p-2 flex flex-col justify-center">
              <img
                src={require("../assets/HomeImages/img4.jpg")}
                // src="https://img.freepik.com/free-photo/young-indian-woman-wearing-sari_23-2149400843.jpg?w=360&t=st=1698742717~exp=1698743317~hmac=9b254ba82707d4394e9090f35448732ed1cc37f7a8205239ba851b5238350332"
                alt=""
                className="w-[200px] h-[350px] object-cover rounded-md  "
              />
              <Typography
                className="pt-2 font-semibold underline cursor-pointer"
                sx={{
                  transition: "0.5s",
                  ":hover": { color: "blueviolet" },
                }}
              >
                Shop Now
                <ChevronRight />
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
      {/* home Mobile page container 2 */}
      <Box className="sm:hidden flex flex-col justify-center items-center bg-[#f2f2f2] ">
        <Box className='flex flex-col items-center gap-5'>
          <Box className="flex justify-between items-center gap-3 bg-[#fff] px-1 py-4 rounded-md">
            <img
              src={require("../assets/HomeImages/img1.png")}
              alt=""
              className="w-full h-40 rounded-md object-contain "
            />
            <Box className='flex flex-col justify-center gap-1'>
              <Typography variant="h5">Luxurious Velvet Saree</Typography>
              {/* <Typography  variant="body2">
                Exude opulence and glamour with our luxurious velvet saree.
                Velvet, known for its rich texture and timeless appeal, adds a
                touch of sophistication to any ensemble.
              </Typography> */}
              <Typography
                className="pt-2 font-semibold underline cursor-pointer"
                sx={{
                  transition: "0.5s",
                  ":hover": { color: "blueviolet" },
                }}
              >
                Shop Now
                <ChevronRight />
                </Typography>
            </Box>
          </Box>
          <Box className="py-0">
            <img src="https://img.freepik.com/free-vector/female-friends-enjoying-shopping-together_74855-7345.jpg" alt=" " className="w-full h- o
            bject-fill rounded-md" />
          </Box>
          <Box className="flex justify-between items-center gap-2 bg-[#fff] pl-3 px-1 py-4 rounded-md">
            
            <Box className='flex flex-col justify-center gap-1 px-10'>
              <Typography variant="h5">Boho-Chic Printed Saree</Typography>
              {/* <Typography  variant="body2">
              Embrace your inner bohemian spirit with our boho-chic printed saree. This delightful piece features an eclectic mix of patterns and colors, perfect for free-spirited fashionistas.
              </Typography> */}
              <Typography
                className="pt-2 font-semibold underline cursor-pointer"
                sx={{
                  transition: "0.5s",
                  ":hover": { color: "blueviolet" },
                }}
              >
                Shop Now
                <ChevronRight />
                </Typography>
            </Box>
            <img
              src={require("../assets/HomeImages/img5.png")}
              alt=""
              className="w-full h-40 rounded-md object-contain "
            />
          </Box>
        </Box>
        <Box className="flex p-2 pt-7 w-full ">
        <Box className="border-solid border-2 border-gray-400 bg-[#f2f2f2] rounded-md p-3 pb-7 w-full h-fit">
          <Box className='flex justify-between px-7'>

                <Typography variant="h5" className="font-semibold text-[#be5890]">
                  Top Rated
                </Typography>
                <Link to={'/shop'}>
                {/* <Button className="p-2" variant="text" sx={{}}> */}
                  <ArrowRightAlt sx={{
                    color:'#fff',
                    fontSize:29,
                    backgroundColor:"#be5890",
                    borderRadius:"25%"
                  }} />
                {/* </Button> */}
                  </Link>
          </Box>
          <hr className="w-[100%] mt-2 " />
        <Box className="flex justify-around pt-5 ">
          <Box className='flex flex-col gap-1 bg-[#fff] p-2 rounded-md w-[170px] shadow-md'>
          <img src={require('../assets/HomeImages/img-12.png')} className="h-48 w-fit object-contain rounded-md" alt="" />
                  <Typography className="pt-1">
                  Elegant Blue Saree 
                  </Typography>
                  <Ratings product={4.2} gap/>
          </Box>
          <Box className='flex flex-col gap-1 bg-[#fff] p-2 rounded-md w-[170px] shadow-md'>
          {/* <img src={require('../assets/HomeImages/img10.jpg')} className="h-48 w-fit object-contain rounded-md" alt="" /> */}
          <img src={require('../assets/HomeImages/img-12.png')} className="h-48 w-fit object-contain rounded-md" alt="" />
                  <Typography className="pt-1">
                  Elegant Silk Saree
                  </Typography>
                  <Ratings product={4.2} gap/>
          </Box>
        </Box>
        <Box className="flex justify-around pt-7 ">
        <Box className='flex flex-col gap-1 bg-[#fff] p-2 rounded-md w-[170px]'>
          {/* <img src={require('../assets/HomeImages/img10.jpg')} className="h-48 w-fit object-contain rounded-md" alt="" /> */}
          <img src={require('../assets/HomeImages/img3.png')} className="h-48 w-fit object-contain  rounded-md" alt="" />
                  <Typography className="pt-1 ">
                  {/* Luxurious Velvet Saree */}
                  Artisan Handwoven saree
                  </Typography>
                  <Ratings product={4.2} gap/>
          </Box>
          <Box className='flex flex-col gap-1 bg-[#fff] p-2 rounded-md w-[170px]'>
          <img src={require('../assets/HomeImages/img9.png')} className="h-48 w-fit object-contain  rounded-md" alt="" />
          {/* <img src={require('../assets/HomeImages/img10.jpg')} className="h-48 w-fit object-contain rounded-md" alt="" /> */}
                  <Typography className="pt-1">
                  Georgette Party Saree 
                  </Typography>
                  <Ratings product={4.2} gap/>
          </Box>
        </Box>
        </Box>
        </Box>
      </Box>
      <Box>
        <Box
          className={
            "w-[100%] h-[100px] flex justify-center items-center md:py-32 px-5"
          }
        >
          <Carousel
            autoPlay
            // infiniteLoop
            // animationHandler="fade"
            // showThumbs={false}
            // showIndicators={false}
            // showArrows={false}
            // showStatus={false}
            interval={3500}
            transitionTime={1500}
            className="text-[#000] w-full"
          >
            <Box className="flex w-full justify-around ">
              <Typography 
              variant="h4" 
              className="font-semibold ">Luca Faloni </Typography>
              <Typography variant="h4"  className="font-semibold">Louis Vuitton </Typography>
              <Typography variant="h4"  className="font-semibold"> Gucci </Typography>
              <Typography variant="h4"  className="font-semibold">Balenciaga </Typography>
            </Box>
             <Box className="flex w-full justify-around">
              <Typography variant="h4"  className="font-semibold">Dior Homme </Typography>
              <Typography variant="h4"  className="font-semibold">Prada </Typography>
              <Typography variant="h4"  className="font-semibold">Stella McCartney </Typography>
              <Typography variant="h4"  className="font-semibold">Fendi </Typography>
            </Box>
           <Box className="flex w-full justify-around">
              <Typography variant="h4"  className="font-semibold">Saint Laurent </Typography>
              <Typography variant="h4"  className="font-semibold">Givenchy </Typography>
              <Typography variant="h4"  className="font-semibold">Balmain </Typography>
              <Typography variant="h4"  className="font-semibold">Kenzo </Typography>
            </Box>
            <Box className="flex w-full justify-around">
              <Typography variant="h4"  className="font-semibold">Alexander McQueen </Typography>
              <Typography variant="h4"  className="font-semibold">Chanel </Typography>
              <Typography variant="h4"  className="font-semibold">Armani </Typography>
              <Typography variant="h4"  className="font-semibold">Calvin Klein </Typography>
            </Box>
          </Carousel>
        </Box>
      </Box>
      {/* home page container 3 */}
      <Container
        sx={{
          width: "100%",
          height: 600,
          mt: 10,
        }}
        className="flex flex-col justify-center  max-sm:hidden  pb-10 relative"
      >
        <Box className="flex justify-center gap-14">
          <Box className="w-[250px] h-[400px] flex z-10">
            <img
              src={require("../assets/HomeImages/img5.jpg")}
              // src="https://img.freepik.com/free-photo/young-indian-woman-wearing-sari_23-2149400883.jpg?size=626&ext=jpg&ga=GA1.1.1529557540.1698478113&semt=sph"
              alt=""
              width={"100%"}
              height={"80%"}
              className="object-cover rounded-sm"
            />
          </Box>
          <Box className="w-[250px] h-[400px] flex  z-10">
            <img
              src={require("../assets/HomeImages/img10.jpg")}
              // src="https://img.freepik.com/free-photo/cartoon-character-woman-sari-with-word-it_1340-28825.jpg?size=626&ext=jpg&ga=GA1.1.1529557540.1698478113&semt=sph"
              alt=""
              width={"100%"}
              height={"80%"}
              className="object-cover rounded-sm"
            />
          </Box>
          <Box className="w-[250px] h-[400px] flex z-10">
            <img
              src={require("../assets/HomeImages/img12.jpg")}
              // src="https://img.freepik.com/free-photo/studio-portrait-young-woman-wearing-traditional-sari-garment_23-2149565125.jpg?size=626&ext=jpg&ga=GA1.1.1529557540.1698478113&semt=ais"
              alt=""
              width={"100%"}
              height={"80%"}
              className="object-cover rounded-sm"
            />
          </Box>
        </Box>
        <Box className="absolute w-[100%] h-[350px] bg-slate-400 bottom-10 left-0 right-0 z-0" />
        <Box className="z-10 w-full flex justify-center items-center py-24">
          <Typography
            className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#c90f7290] to-[#c90f72] "
            variant="h2"
          >
            TOP RATED
          </Typography>
        </Box>
      </Container>

      {/* home page container 6 */}
      <Container
        sx={{
          width: "100%",
          height: 800,
        }}
        className="flex justify-between items-center max-sm:hidden  pb-10 "
      >
        <Box
          sx={{ width: "60%" }}
          className="flex flex-col justify-center items-center"
        >
          <Box className="flex">
            <Box className="w-[200px] h-[350px] p-2 flex flex-col justify-center">
              <img
                src={require("../assets/HomeImages/img6.jpg")}
                // src="https://img.freepik.com/premium-photo/new-pink-color-saree_917855-65.jpg?size=626&ext=jpg&ga=GA1.1.1529557540.1698478113&semt=ais"
                alt=""
                className="w-[200px] h-[350px] object-cover rounded-md"
              />
              <Typography
                className="pt-2 font-semibold underline cursor-pointer"
                sx={{
                  transition: "0.5s",
                  ":hover": { color: "blueviolet" },
                }}
              >
                Shop Now
                <ChevronRight />
              </Typography>
            </Box>
            <Box className="w-[200px] h-[350px] p-2 flex flex-col justify-center">
              <img
                src={require("../assets/HomeImages/img7.jpg")}
                // src="https://img.freepik.com/free-photo/bridesmaid-helps-wear-traditional-indian-bride-dress_8353-9960.jpg?size=626&ext=jpg&ga=GA1.1.1529557540.1698478113&semt=ais"
                alt=""
                className="w-[200px] h-[350px] object-cover rounded-md"
              />
              <Typography
                className="pt-2 font-semibold underline cursor-pointer"
                sx={{
                  transition: "0.5s",
                  ":hover": { color: "blueviolet" },
                }}
              >
                Shop Now
                <ChevronRight />
              </Typography>
            </Box>
          </Box>
          <Box className="flex">
            <Box className="w-[200px] h-[350px] p-2 flex flex-col justify-center">
              <img
                src={require("../assets/HomeImages/img8.jpg")}
                // src="https://img.freepik.com/free-photo/young-woman-beautiful-red-dress_1303-17503.jpg?size=626&ext=jpg&ga=GA1.1.1529557540.1698478113&semt=ais"
                alt=""
                className="w-[200px] h-[350px] object-cover rounded-md"
              />
              <Typography
                className="pt-2 font-semibold underline cursor-pointer"
                sx={{
                  transition: "0.5s",
                  ":hover": { color: "blueviolet" },
                }}
              >
                Shop Now
                <ChevronRight />
              </Typography>
            </Box>
            <Box className="w-[200px] h-[350px] p-2 flex flex-col justify-center">
              <img
                src={require("../assets/HomeImages/img9.jpg")}
                // src="https://img.freepik.com/premium-photo/women-s-beautiful-soft-lichi-silk-saree_920356-6327.jpg?size=626&ext=jpg&ga=GA1.1.1529557540.1698478113&semt=ais"
                alt=""
                className="w-[200px] h-[350px] object-cover rounded-md"
              />
              <Typography
                className="pt-2 font-semibold underline cursor-pointer"
                sx={{
                  transition: "0.5s",
                  ":hover": { color: "blueviolet" },
                }}
              >
                Shop Now
                <ChevronRight />
              </Typography>
            </Box>
            <Box className="w-[200px] h-[350px] p-2 flex flex-col justify-center pl-2">
              <Typography className="pt-2" variant="h5">
                Effortlessly Chic Wrap Dress{" "}
              </Typography>
              <Typography className="pt-2 font-light">
                Achieve that coveted "effortlessly chic" look with our wrap
                dress.
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{ width: "35%", height: "100%" }}
          className="flex items-center"
        >
          <img
            src={require("../assets/HomeImages/img10.jpg")}
            // src="https://img.freepik.com/free-photo/woman-with-floral-dress-bare-feet_23-2148261281.jpg?size=626&ext=jpg&ga=GA1.1.1529557540.1698478113&semt=ais"
            alt=""
            width={"100%"}
            className="object-fill rounded-md"
          />
        </Box>
      </Container>
      </Box>
    </>
  );
};

export default Home;
