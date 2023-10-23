import { Box, Container, Typography } from "@mui/material";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { ImagesData } from "../constants";
import {
  ArrowForwardIos,
  ArrowRight,
  ChevronRight,
  East,
} from "@mui/icons-material";

const Home = () => {
  return (
    <>
      {/* home page container 1 */}
      <Container
        sx={{
          width: "100vw",
        }}
        className=" pb-10"
      >
        <Link to={`/shop`}>
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showIndicators={false}
            showArrows={false}
            showStatus={false}
            interval={3500}
            transitionTime={2500}
            className="text-[#000] h-[500px] overflow-hidden rounded-md max-sm:h-[300px] "
          >
            {ImagesData.map((item) => (
              <>
                <Box className="w-full h-full overflow-hidden rounded-sm">
                  <img
                    src={item.img}
                    alt=""
                    // width={""}
                    // height={500}
                    className="object-fill rounded-md"
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
      </Container>
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
            src="https://img.freepik.com/free-photo/still-life-spring-wardrobe-switch_23-2150479001.jpg?size=626&ext=jpg&ga=GA1.1.2085897651.1682179198&semt=sph"
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
                src="https://img.freepik.com/free-photo/still-life-spring-wardrobe-switch_23-2150479001.jpg?size=626&ext=jpg&ga=GA1.1.2085897651.1682179198&semt=sph"
                alt=""
                width={"100%"}
                height={"80%"}
                className="object-contain rounded-md"
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
                src="https://img.freepik.com/free-photo/still-life-spring-wardrobe-switch_23-2150479001.jpg?size=626&ext=jpg&ga=GA1.1.2085897651.1682179198&semt=sph"
                alt=""
                width={"100%"}
                height={"80%"}
                className="object-contain rounded-md"
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
              <Typography className="pt-2 font-semibold">Text 1 </Typography>
              <Typography className="pt-2 font-light">
                description 1{" "}
              </Typography>
            </Box>
            <Box className="w-[200px] h-[350px] p-2 flex flex-col justify-center">
              <img
                src="https://img.freepik.com/free-photo/still-life-spring-wardrobe-switch_23-2150479001.jpg?size=626&ext=jpg&ga=GA1.1.2085897651.1682179198&semt=sph"
                alt=""
                width={"100%"}
                height={"80%"}
                className="object-contain rounded-md"
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
                src="https://img.freepik.com/free-photo/still-life-spring-wardrobe-switch_23-2150479001.jpg?size=626&ext=jpg&ga=GA1.1.2085897651.1682179198&semt=sph"
                alt=""
                width={"100%"}
                height={"80%"}
                className="object-contain rounded-md  "
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
      <Box>
        <Box
          className={
            "w-[100%] h-[100px] flex justify-center items-center my-10 px-5"
          }
        >
          <Carousel
            autoPlay
            infiniteLoop
            animationHandler="fade"
            showThumbs={false}
            showIndicators={false}
            showArrows={false}
            showStatus={false}
            interval={3500}
            transitionTime={2000}
            className="text-[#000] w-full"
          >
            <Box className="flex w-full justify-around">
              <Typography>H Brand Name 1 </Typography>
              <Typography>H Brand Name 2 </Typography>
              <Typography>H Brand Name 3 </Typography>
              <Typography>H Brand Name 4 </Typography>
            </Box>
            <Box className="flex w-full justify-around">
              <Typography>P Brand Name 1 </Typography>
              <Typography>P Brand Name 2 </Typography>
              <Typography>P Brand Name 3 </Typography>
              <Typography>P Brand Name 4 </Typography>
            </Box>
            <Box className="flex w-full justify-around">
              <Typography>Q Brand Name 1 </Typography>
              <Typography>Q Brand Name 2 </Typography>
              <Typography>Q Brand Name 3 </Typography>
              <Typography>Q Brand Name 4 </Typography>
            </Box>
            <Box className="flex w-full justify-around">
              <Typography>A Brand Name 1 </Typography>
              <Typography>A Brand Name 2 </Typography>
              <Typography>A Brand Name 3 </Typography>
              <Typography>A Brand Name 4 </Typography>
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
        <Box className="flex justify-center gap-7">
          <Box className="w-[250px] h-[400px] flex z-10">
            <img
              src="https://img.freepik.com/free-photo/still-life-spring-wardrobe-switch_23-2150479001.jpg?size=626&ext=jpg&ga=GA1.1.2085897651.1682179198&semt=sph"
              alt=""
              width={"100%"}
              height={"80%"}
              className="object-cover rounded-sm"
            />
          </Box>
          <Box className="w-[250px] h-[400px] flex  z-10">
            <img
              src="https://img.freepik.com/free-photo/still-life-spring-wardrobe-switch_23-2150479001.jpg?size=626&ext=jpg&ga=GA1.1.2085897651.1682179198&semt=sph"
              alt=""
              width={"100%"}
              height={"80%"}
              className="object-cover rounded-sm"
            />
          </Box>
          <Box className="w-[250px] h-[400px] flex z-10">
            <img
              src="https://img.freepik.com/free-photo/still-life-spring-wardrobe-switch_23-2150479001.jpg?size=626&ext=jpg&ga=GA1.1.2085897651.1682179198&semt=sph"
              alt=""
              width={"100%"}
              height={"80%"}
              className="object-cover rounded-sm"
            />
          </Box>
        </Box>
        <Box className="absolute w-[100%] h-[350px] bg-slate-400 bottom-10 left-0 right-0 z-0" />
        <Box className="z-10 w-full flex justify-center items-center py-24">
          <Typography className="font-semibold text-[#4f4f94] " variant="h3">
            PBSARRES
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
                src="https://img.freepik.com/free-photo/still-life-spring-wardrobe-switch_23-2150479001.jpg?size=626&ext=jpg&ga=GA1.1.2085897651.1682179198&semt=sph"
                alt=""
                width={"100%"}
                height={"80%"}
                className="object-contain rounded-md"
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
                src="https://img.freepik.com/free-photo/still-life-spring-wardrobe-switch_23-2150479001.jpg?size=626&ext=jpg&ga=GA1.1.2085897651.1682179198&semt=sph"
                alt=""
                width={"100%"}
                height={"80%"}
                className="object-contain rounded-md"
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
                src="https://img.freepik.com/free-photo/still-life-spring-wardrobe-switch_23-2150479001.jpg?size=626&ext=jpg&ga=GA1.1.2085897651.1682179198&semt=sph"
                alt=""
                width={"100%"}
                height={"80%"}
                className="object-contain rounded-md"
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
                src="https://img.freepik.com/free-photo/still-life-spring-wardrobe-switch_23-2150479001.jpg?size=626&ext=jpg&ga=GA1.1.2085897651.1682179198&semt=sph"
                alt=""
                width={"100%"}
                height={"80%"}
                className="object-contain rounded-md"
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
              <Typography className="pt-2 font-semibold">Text 1 </Typography>
              <Typography className="pt-2 font-light">
                description 1{" "}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{ width: "35%", height: "100%" }}
          className="flex items-center"
        >
          <img
            src="https://img.freepik.com/free-photo/still-life-spring-wardrobe-switch_23-2150479001.jpg?size=626&ext=jpg&ga=GA1.1.2085897651.1682179198&semt=sph"
            alt=""
            width={"100%"}
            className="object-fill rounded-md"
          />
        </Box>
      </Container>
    </>
  );
};

export default Home;
