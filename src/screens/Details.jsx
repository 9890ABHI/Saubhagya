import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Clothingproducts } from "../constants";
import {
  Typography,
  Box,
  Container,

  Tab,
  Rating,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import {
  ArrowBack,
  Circle,
  EmailOutlined,
  Info,
  Instagram,
  LocalShippingOutlined,
  Policy,
  ShoppingBagOutlined,
  ShoppingCartOutlined,
  Star,
  WhatsApp,
} from "@mui/icons-material";
import { ShoppingButton } from "../components/Button";
import { PrimaryText, SecondaryText } from "../components/TextComponent";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
  InformationDetails,
  ReturnsPolicyDetails,
  ReviewDetails,
} from "../components/Informations";
import { connect } from "react-redux";

const Details = () => {
  const { id } = useParams();
  const Mobile = useMediaQuery("(max-width: 640px)");
  const Navigate = useNavigate() 
  // console.log(id);
  const [product, setProduct] = useState([]);
  const [imge, setImge] = useState("");
  const [Size, setSize] = useState("");
  const [value, setValue] = React.useState("1");

  const offerOfProduct = Math.round(
    ((product.oldPrice - product.price) / product.oldPrice) * 100
  );

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // const handleAddtoCArt = (id) => {
  //   const responce = product.filter((prod) => prod.id === id);
  //   console.log(responce);
  // };
  useEffect(() => {
    const productId = parseInt(id, 10);
    // console.log(Clothingproducts);
    const filteredProducts = Clothingproducts.filter(
      (prod) => prod.id === productId
    );
    // console.log(filteredProducts);
    filteredProducts.length > 0
      ? setProduct(filteredProducts[0])
      : setProduct(null);
    setImge(filteredProducts[0]?.images[0]?.img);
  }, [id]);

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  if (!product) {
    return <div>Loading...</div>;
  }


  return (
    <>
    <Box className='max-sm:h-screen  max-sm:overflow-y-scroll max-sm:pt-20'>

    
      <Container className="flex flex-row justify-between pt-5 max-md:hidden max-sm:h-screen   max-sm:overflow-y-scroll  ">
        <Box
          sx={{
            width: "45% ",
            display: "flex",
            height:"600px",
            gap: 2,
            overflow:'hidden'
           // flexDirection:Mobile ? 'fle' : undefined,
          //  flexDirection:Mobile ? 'column-reverse' : undefined,
          //  overflow:Mobile ? 'unset' : 'auto',
          //  justifyContent:Mobile ? "space-around" : undefined
          }}
        >
          <Box className='flex max-sm:w-full h-[100px] gap-3 md:h-[100%] overflow-y-scroll md:flex-col'>
            {product?.images?.map((item) => (
              <>
                <img
                  src={item.img}
                  onMouseEnter={() => setImge(item.img)}
                  key={item.id}
                  alt=""
                  className="object-cover rounded-sm"
                  style={{
                    width:Mobile? 200 :undefined, 
                    height:Mobile ? 100 :undefined
                  }}
                />
              </>
            ))}
          </Box>
          <img
            src={imge}
            alt=""
            width={Mobile ? '100%' : 550 }
            height={"100%"}
            className="object-cover border-none rounded-lg"
          />
        </Box>
        <Box sx={{ width:Mobile ? "90%": "50%", pt: 1 }}>
          <Box className="w-full text-left ">
            <Typography
              variant="body1"
              className="text-xl pb-4"
              sx={{ fontFamily: "Regular" }}
            >
              {product.title}
            </Typography>
            <Box className="flex items-center gap-3">
              <Typography className="text-base ">{product.rating}</Typography>
              <Rating
                readOnly
                value={product.rating}
                size="small"
                precision={0.1}
              />
              <Typography>31 rating</Typography>
            </Box>
            <Box>
              <Box className="flex">
                <Typography
                  variant="body2"
                  className="text-xl pt-2 pb-1 pr-3 "
                  sx={{ fontFamily: "Light", color: "red" }}
                >
                  -{offerOfProduct}%
                </Typography>
                <Typography
                  variant="body2"
                  className="text-xl pt-2 pb-1"
                  sx={{ fontFamily: "Regular" }}
                >
                  ₹ {product.price} /-
                </Typography>
              </Box>
              <Box className="flex items-center">
                <Typography
                  variant="body2"
                  className="text-base"
                  sx={{ fontFamily: "Light" }}
                >
                  M.R.P : ₹
                </Typography>
                <Typography
                  variant="body2"
                  className="text-lg pl-2 line-through"
                  sx={{ fontFamily: "Regular" }}
                >
                  {product.oldPrice}
                </Typography>
              </Box>
            </Box>
            <Typography variant="caption" className="text-gray-400 mt-2">
              Inclusive of all taxes
            </Typography>
            <hr className="border-t-gray-300 pt-2" />
            <Box className="flex justify-between">
              <Box className="flex mt-4">
                <Typography className="" variant="body2">
                  Products Code :
                </Typography>
                <Typography className="pl-2 " variant="body2">
                  #{product?.code}
                </Typography>
              </Box>
              {/* <Box className="flex mt-2">
                <Button variant="text" className="text-gray-600">
                  <Typography className="underline ">Size Chart</Typography>
                </Button>
              </Box> */}
            </Box>
            <Typography variant="caption" className="text-gray-400 py-3">
              Be the first to review this product
            </Typography>
            <hr className="border-t-gray-300 pt-2" />
            {/* <Box className="flex justify-between mt-5 items-center">
              <Typography className="" variant="body2">
                Standard Size (Bust Size)
              </Typography>
              <FormControl sx={{ minWidth: 120 }}>
                <InputLabel id="demo-simple-select-autowidth-label">
                  Size
                </InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  value={Size}
                  onChange={handleSizeChange}
                  autoWidth
                  label="Size"
                >
                  <MenuItem value={32}>32</MenuItem>
                  <MenuItem value={34}>34</MenuItem>
                  <MenuItem value={36}>36</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <hr className="border-blue-300 mt-2" /> */}

            <Box className="mt-4">
              <Typography className="font-light flex items-center">
                <LocalShippingOutlined className="pr-2" />
                Est Dispatch Date:{" "}
                <Typography className="font-semibold pl-2">
                  {" "}
                  Wednesday, 01 November 2023
                </Typography>
              </Typography>
              <Typography className="font-light flex items-center">
                For early dispatch, contact us at :
                <Typography className="font-semibold pl-2">
                  {" "}
                  +918866799113
                </Typography>
              </Typography>
            </Box>

            <hr className="border-t-gray-300 pt-2" />

            <Box className="pt-5">
              <PrimaryText text={"Available Offers"} />
              <SecondaryText
                text={
                  "Free Shipping on Cart Value of US $150+/7500INR on Prepaid Orders."
                }
              />
            </Box>
            <hr className="border-t-gray-300 pt-2" />
            <Box className="pt-12 pb-7 flex justify-around">
              <ShoppingButton
                title={"Buy Now"}
                icon={<ShoppingBagOutlined />}
              />
              <Link
                // onClick={handleAddtoCArt(product.id)}
                to={`/cart/${id}`}
              >
                <ShoppingButton
                  title={"Add To Cart"}
                  icon={<ShoppingCartOutlined />}
                />
              </Link>
            </Box>

            <Box className="pt-5">
              <PrimaryText text={"Have a question? We can help."} />
              <SecondaryText text={"Mon - Sat - 10:00 am to 6:00 pm (IST)"} />
            </Box>
            <Box className="pt-2">
              <Box className="flex">
                <WhatsApp className="pr-2" />{" "}
                <PrimaryText text={"Call or WhatsApp us"} />
              </Box>
              <SecondaryText text={"+911234567890 | +911234567890 "} />
            </Box>
            <Box className="pt-2">
              <Box className="flex">
                <EmailOutlined className="pr-2" />{" "}
                <PrimaryText
                  text={"Email us PBshop@mail.com or chat/DM us on our "}
                />
              </Box>
              <Box className="flex">
                <Instagram className="pr-2" />{" "}
                <PrimaryText
                  text={"Follow us on Instagram and Facebook page. "}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
      <Box>
{/*  */}
{/* first container mobile view */}
<Box className="flex flex-col w-[100%] items-center md:hidden">
  <Box className="absolute top-15 left-5 flex justify-items-center bg-[#fff] rounded-md px-2 py-2">
<ArrowBack onClick={() => Navigate(-1)}  />
  </Box>
<Box className="flex flex-col-reverse h-[400px] w-full gap-3 md:hidden">
          <Box className='flex w-full h-[120px] px-2 gap-5 overflow-x-scroll'>
            {product?.images?.map((item) => (
              <>
                <img
                  src={item.img}
                  onMouseEnter={() => setImge(item.img)}
                  key={item.id}
                  alt=""
                  className="w-24 h-24 object-contain rounded-md"
                  
                />
              </>
            ))}
          </Box>
          <Box className='flex justify-center items-center'>

          {
            product?.images?.slice(0,7).map((item) => (
              <>
              <IconButton onClick={() => setImge(item.img)}>

              <Circle sx={{fontSize:'10px' , color : imge === item.img ? '#000' : "gray"}} 
              
              />
              </IconButton>
              </>
            ))
          }
          </Box>
          
          <img
            src={imge}
            alt=""
            className="w-[100%] h-[200px] object-contain border-none rounded-lg"
          />
        </Box>
        <hr className="border-t-gray-300 mt-4 w-[90%]" />
        <Box sx={{ width: "100%", pt: 1 , px:2 }}>
          <Box className="w-full text-left ">
            <Typography
              variant="body1"
              className="text-xl pb-4"
              sx={{ fontFamily: "Regular" }}
            >
              {product.title}
            </Typography>
            <Box className="flex items-center gap-3">
              <Typography className="text-base ">{product.rating}</Typography>
              <Rating
                readOnly
                value={product.rating}
                size="small"
                precision={0.1}
              />
              <Typography>31 rating</Typography>
            </Box>
            <Box>
              <Box className="flex">
                <Typography
                  variant="body2"
                  className="text-xl pt-2 pb-1 pr-3 "
                  sx={{ fontFamily: "Light", color: "red" }}
                >
                  -{offerOfProduct}%
                </Typography>
                <Typography
                  variant="body2"
                  className="text-xl pt-2 pb-1"
                  sx={{ fontFamily: "Regular" }}
                >
                  ₹ {product.price} /-
                </Typography>
              </Box>
              <Box className="flex items-center">
                <Typography
                  variant="body2"
                  className="text-base"
                  sx={{ fontFamily: "Light" }}
                >
                  M.R.P : ₹
                </Typography>
                <Typography
                  variant="body2"
                  className="text-lg pl-2 line-through"
                  sx={{ fontFamily: "Regular" }}
                >
                  {product.oldPrice}
                </Typography>
              </Box>
            </Box>
            <Typography variant="caption" className="text-gray-400 mt-2">
              Inclusive of all taxes
            </Typography>
            <hr className="border-t-gray-300 pt-2" />
            <Box className="flex justify-between">
              <Box className="flex mt-4">
                <Typography className="" variant="body2">
                  Products Code :
                </Typography>
                <Typography className="pl-2 " variant="body2">
                  #{product?.code}
                </Typography>
              </Box>
              
            </Box>
            <Typography variant="caption" className="text-gray-400 py-3">
              Be the first to review this product
            </Typography>
            <hr className="border-t-gray-300 pt-2" />
           

            <Box className="mt-4">
              <Typography className="font-light flex items-center">
                <LocalShippingOutlined className="pr-2" />
                Est Dispatch Date:{" "}
                <Typography className="font-semibold pl-2">
                  {" "}
                  Wednesday, 01 November 2023
                </Typography>
              </Typography>
              <Typography className="font-light flex items-center">
                For early dispatch, contact us at :
                <Typography className="font-semibold pl-2">
                  {" "}
                  +918866799113
                </Typography>
              </Typography>
            </Box>

            <hr className="border-t-gray-300 pt-2" />

            <Box className="pt-5">
              <PrimaryText text={"Available Offers"} />
              <SecondaryText
                text={
                  "Free Shipping on Cart Value of US $150+/7500INR on Prepaid Orders."
                }
              />
            </Box>
            <hr className="border-t-gray-300 pt-2" />
            <Box className="pt-12 pb-7 max-sm:py-4  flex justify-around">
              <ShoppingButton
                title={"Buy Now"}
                icon={<ShoppingBagOutlined />}
              />
              <Link
                // onClick={handleAddtoCArt(product.id)}
                to={`/cart/${id}`}
              >
                <ShoppingButton
                  title={"Add To Cart"}
                  icon={<ShoppingCartOutlined />}
                />
              </Link>
            </Box>

            <Box className="pt-5">
              <PrimaryText text={"Have a question? We can help."} />
              <SecondaryText text={"Mon - Sat - 10:00 am to 6:00 pm (IST)"} />
            </Box>
            <Box className="pt-2">
              <Box className="flex">
                <WhatsApp className="pr-2" />{" "}
                <PrimaryText text={"Call or WhatsApp us"} />
              </Box>
              <SecondaryText text={"+911234567890 | +911234567890 "} />
            </Box>
            <Box className="pt-2">
              <Box className="flex">
                <EmailOutlined className="pr-2" />{" "}
                <PrimaryText
                  text={"Email us PBshop@mail.com or chat/DM us on our "}
                />
              </Box>
              <Box className="flex">
                <Instagram className="pr-2" />{" "}
                <PrimaryText
                  text={"Follow us on Instagram and Facebook page. "}
                />
              </Box>
            </Box>
          </Box>
        </Box>
        </Box>

{/*  */}
      </Box>
      <Container className="flex pt-5 max-sm:pb-12 ">
        <Box
          sx={{
            width: "100%",
            typography: "body1",
            "& .MuiBox-root": { width: "100%" },
          }}
        >
          <TabContext value={value} className="w-full">
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                textColor="secondary"
              >
                <Tab
                  label="INFORMATION"
                  value="1"
                  icon={<Info className="pr-2 " />}
                  className="flex flex-row"
                />
                <Tab
                  label="REVIEW"
                  value="2"
                  icon={<Star className="pr-2 " />}
                  className="flex flex-row"
                />
                <Tab
                  label="RETURN POLICY"
                  value="3"
                  icon={<Policy className="pr-2 " />}
                  className="flex flex-row"
                />
              </TabList>
            </Box>
            <TabPanel value="1" className="w-full">
              <InformationDetails infoDetails={product?.info} />
            </TabPanel>
            <TabPanel
              value="2"
              className="flex items-center justify-center w-full"
            >
              <ReviewDetails reviewDetails={product?.review} />
            </TabPanel>
            <TabPanel value="3">
              <ReturnsPolicyDetails />
            </TabPanel>
          </TabContext>
        </Box>
      </Container>
      </Box>
    </>
  );
};

// const mapStateToProps = (state, ownProps) => {
//   const productId = ownProps.match.params.id; // Assuming you're using React Router
//   return {
//     product: state.products[productId], // Assuming you store products in the state
//   };
// };

export default Details;
