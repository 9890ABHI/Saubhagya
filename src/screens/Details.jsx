import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Clothingproducts } from "../constants";
import {
  Typography,
  Box,
  Container,
  Button,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  Tab,
  Rating,
} from "@mui/material";
import {
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
      <Container className="flex justify-between pt-5 max-sm:flex-col">
        <Box
          sx={{
            width: "45%",
            display: "flex",
            height: "600px",
            gap: 2,
          }}
        >
          <Box className="flex flex-col h-full overflow-scroll gap-3">
            {product?.images?.map((item) => (
              <>
                <img
                  src={item.img}
                  onMouseEnter={() => setImge(item.img)}
                  key={item.id}
                  alt=""
                  className="object-cover rounded-sm"
                />
              </>
            ))}
          </Box>
          <img
            src={imge}
            alt=""
            width={550}
            height={"100%"}
            className="object-cover border-none rounded-lg"
          />
        </Box>
        <Box sx={{ width: "50%", pt: 1 }}>
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
                  className="text-xl mt-2 pb-1 pr-3 "
                  sx={{ fontFamily: "Light", color: "red" }}
                >
                  -{offerOfProduct}%
                </Typography>
                <Typography
                  variant="body2"
                  className="text-xl mt-2 pb-1"
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
                  className="text-lg ml-2 line-through"
                  sx={{ fontFamily: "Regular" }}
                >
                  {product.oldPrice}
                </Typography>
              </Box>
            </Box>
            <Typography variant="caption" className="text-gray-400 mt-2">
              Inclusive of all taxes
            </Typography>
            <hr className="border-t-gray-300 mt-2" />
            <Box className="flex justify-between">
              <Box className="flex mt-4">
                <Typography className="" variant="body2">
                  Products Code :
                </Typography>
                <Typography className="ml-2 " variant="body2">
                  #{product?.code}
                </Typography>
              </Box>
              {/* <Box className="flex mt-2">
                <Button variant="text" className="text-gray-600">
                  <Typography className="underline ">Size Chart</Typography>
                </Button>
              </Box> */}
            </Box>
            <Typography variant="caption" className="text-gray-400 mt-3 mb-3">
              Be the first to review this product
            </Typography>
            <hr className="border-t-gray-300 mt-2" />
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
                <LocalShippingOutlined className="mr-2" />
                Est Dispatch Date:{" "}
                <Typography className="font-semibold ml-2">
                  {" "}
                  Wednesday, 01 November 2023
                </Typography>
              </Typography>
              <Typography className="font-light flex items-center">
                For early dispatch, contact us at :
                <Typography className="font-semibold ml-2">
                  {" "}
                  +918866799113
                </Typography>
              </Typography>
            </Box>

            <hr className="border-t-gray-300 mt-2" />

            <Box className="mt-5">
              <PrimaryText text={"Available Offers"} />
              <SecondaryText
                text={
                  "Free Shipping on Cart Value of US $150+/7500INR on Prepaid Orders."
                }
              />
            </Box>
            <hr className="border-t-gray-300 mt-2" />
            <Box className="mt-12 pb-7 flex justify-around">
              <ShoppingButton
                title={"Buy Now"}
                icon={<ShoppingBagOutlined />}
              />
              <Link to={`/cart/${id}`}>
                <ShoppingButton
                  title={"Add To Cart"}
                  icon={<ShoppingCartOutlined />}
                />
              </Link>
            </Box>

            <Box className="mt-5">
              <PrimaryText text={"Have a question? We can help."} />
              <SecondaryText text={"Mon - Sat - 10:00 am to 6:00 pm (IST)"} />
            </Box>
            <Box className="mt-2">
              <Box className="flex">
                <WhatsApp className="mr-2" />{" "}
                <PrimaryText text={"Call or WhatsApp us"} />
              </Box>
              <SecondaryText text={"+911234567890 | +911234567890 "} />
            </Box>
            <Box className="mt-2">
              <Box className="flex">
                <EmailOutlined className="mr-2" />{" "}
                <PrimaryText
                  text={"Email us PBshop@mail.com or chat/DM us on our "}
                />
              </Box>
              <Box className="flex">
                <Instagram className="mr-2" />{" "}
                <PrimaryText
                  text={"Follow us on Instagram and Facebook page. "}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
      <Container className="flex pt-5 ">
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
                  icon={<Info className="mr-2 " />}
                  className="flex flex-row"
                />
                <Tab
                  label="REVIEW"
                  value="2"
                  icon={<Star className="mr-2 " />}
                  className="flex flex-row"
                />
                <Tab
                  label="RETURN POLICY"
                  value="3"
                  icon={<Policy className="mr-2 " />}
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
