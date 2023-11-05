import { Box, Button, Typography } from "@mui/material";
import React, {  useState } from "react";
// import { connect } from "react-redux";
// import { useParams } from "react-router-dom";
import { Clothingproducts } from "../constants";
// import { Add, Delete, Remove } from "@mui/icons-material";
// import { ProductPricing } from "../components/Informations";
import { CartCard } from "../components/Card";

const Cart = () => {
  const [products
    // , setProducts
  ] = useState(Clothingproducts);

  const prods = products.slice(0, 4);
  const [filterProds, setFilterProds] = useState(prods);
  let sum = 0;
  let ogprice = 0;
  // iterate over each item in the array
  for (let i = 0; i < filterProds.length; i++) {
    // if (quantity > 0) {
    sum += filterProds[i].price;
    ogprice += filterProds[i].oldPrice;
    // }
  }
  const disccount = ogprice - sum;

  // useEffect(() => {
  //   const responce = prods.filter(removeItem);
  //   setFilterProds(responce);
  //   console.log("element remove useEffect");
  // }, []);

  return (
    <>
      <Box className="flex flex-col md:flex-row justify-around items-start bg-[#f2f2f2] py-10">
        <Box className="px-2 md:px-0 max-sm:pb-32 md:w-[60%] flex flex-col justify-center items-center gap-2">
          {filterProds.map((item) => (
            <>
              <CartCard
                item={item}
                prods={prods}
                setFilterProds={setFilterProds}
                filterProds={filterProds}
              />
            </>
          ))}
        </Box>
        <Box className="flex flex-col gap-5 max-sm:w-full">

       
        <Box
          className="max-sm:fixed max-sm:bottom-14 w-full h-28 bg-[#fff] md:bg-[#fff] rounded-md bottom-14 flex flex-col justify-between items-center rounded-t-lg  md:rounded-none md:justify-between md:items-start md:w-[450px] md:h-fit px-2 md:px-5  "
          // sx={{ border: "1px solid gray" }}
        >
          <hr className="w-[95%]" />
            <Box className="w-full flex flex-col gap-2 md:pt-2">
              <Box className="px-2">
                <Typography className="text-gray-500" variant="h6">
                  Price Details
                </Typography>
                </Box>
                <hr className="w-[95%]" />
                <Box className="hidden md:flex w-full md:px-2 justify-between">
            <Typography className="flex" variant="body1">Products :</Typography>
            <Typography variant="h6" className="text-gray-500">
              {/* ₹ {disccount}   */}
            {filterProds.length}
            </Typography>

          </Box>
          <Box className="hidden md:flex w-full md:px-2 justify-between">
            <Typography className="flex" variant="body2">Total Save :</Typography>
            <Typography variant="body1" className="text-gray-500 relative overflow-hidden">₹ {disccount}
            <div className="w-[90%] absolute top-1 h-[1px] left-3" style={{borderTop:'1px solid #12121290' , transform:'rotate(14deg)' , transformOrigin:'left',    }}/>  
            {/* {filterProds.length} */}
            </Typography>

          </Box>
          <Box className="hidden md:flex w-full px-2 justify-between">
            <Typography className="flex" variant="body1">Total Ammount :</Typography>
            <Typography variant="h6" className="">₹ {sum}  
            {/* {filterProds.length} */}
            </Typography>

          </Box>
            </Box>
          <hr className="w-[95%]" />
          <Box className="w-full flex justify-between md:py-5 bg-[#fff]">

          <Box className="md:hidden w-full">
          <Typography className="flex gap-3" variant="h6">
            <Typography className="line-through text-gray-500">
            ₹ {ogprice} {' '} 
            </Typography>
            ₹ {sum} 
            
            </Typography>
            
            <Typography className="text-gray-600">
            Total save :{disccount}
            </Typography>
           
          </Box>
          <Box className="w-full flex justify-end">
          <Button variant="contained" sx={{color:"#f2f2f2" , backgroundColor:'#000',"&.MuiButton-root": {
            background: "linear-gradient(to right,  #c90f72, #c90f7290)",
          }, textAlign:"center"}} className="text-base font-medium h-[45px]">
            Place Order
          </Button>
            </Box>
            </Box>
        </Box>
        <Box className="hidden  md:bg-[#fff] md:rounded-xl bottom-14 md:flex md:flex-col md:justify-between md:items-start md:w-[450px] md:h-[400px] md:p-5   "
        //  sx={{ border: "1px solid gray" }}
         >
          <Box className="h-full">
            <Typography variant="h5"  >
              Featured items you may like
            </Typography>
            <Box className="overflow-y-scroll bg-[#f2f2f2] pt-2 flex flex-col gap-2 h-[90%]">
            {
              filterProds.map((item) => (
                <>
                
                <CartCard 
                Feature 
                item={item}
                // prods={prods}
                // setFilterProds={setFilterProds}
                // filterProds={filterProds} 
                />
                </>
              ))
            }
            </Box>
          </Box>
          
        </Box>
        </Box>
      </Box>
    </>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default Cart;
