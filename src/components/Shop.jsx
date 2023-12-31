import { Box, LinearProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FilterDataPrice } from "./filtered";
import {
  BottomStyles,
  Category,
  CategoryData,
  Colors,
  Fabrics,
  Looks,
  Occasions,
  Sizes,
  Styles,
} from "../constants";

import { FilterData } from "./filtered";
import {  useDispatch, useSelector } from "react-redux";
import { Card } from "./Card";
import CategoryCard from "./CategoryCard";
import { getAllProducts } from "../Store/actions";
import { Close, Menu } from "@mui/icons-material";
// import { setProducts as setProductAction } from "../redux/actions/productActions";

const Shop = () => {
  // const Secondaryproducts = useSelector((state) => state);
  // console.log("all products", Secondaryproducts);
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.products.isLoading);

  console.log('products' , product);
  console.log('loading' , loading );
  useEffect(() => {
    window.scroll(0, 0);
}, []);
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
    // console.log('response',response);
    // setNewProducts(response)
  // }, [getAllProducts]);

  // console.log("get products ", getAllProducts);
  // console.log("products ss ", product);
  // const Mobile = useMediaQuery("(max-width: 640px)");
  const [active, setActive] = useState(1);
  const [open, setOpen] = useState(false);
  console.log(active);
  const [categoryInfo, setCategoryInfo] = useState(CategoryData[0].details);
  // console.log(categoryInfo);

  // const [products, setProducts] = useState([]); // Your clothing products data
  const [filteredProducts, setFilteredProducts] = useState(product);
  const [filters, setFilters] = useState({
    category: [],
    colors: [],
    fabrics: [],
    sizes: [],
    styles: [],
    bottomStyles: [],
    occasions: [],
    looks: [],
    priceRange: [0, 400],
  });

  // useEffect(() => {
  //   // Fetch products from an API or set products in state
  //   // Example: fetchProducts().then((data) => setProducts(data));
  //   setProducts(Clothingproducts);
  //   // setProducts(getAllProducts());
  //   // dispatch(setProductAction(filteredProducts));
  // }, []);

  useEffect(() => {
    // Apply filters whenever filter criteria change
    const filtered = product.filter((product) => {
      const {
        category,
        price,
        color,
        fabric,
        size,
        style,
        bottomStyle,
        occasion,
        look,
      } = product;
      const {
        category: selectedCategories,
        colors,
        fabrics,
        sizes,
        styles,
        bottomStyles,
        occasions,
        looks,
        priceRange,
      } = filters;

      if (
        selectedCategories.length > 0 &&
        !selectedCategories.includes(category)
      ) {
        return false;
      }

      if (price < priceRange[0] || price > priceRange[1]) {
        return false;
      }

      if (colors.length > 0 && !colors.includes(color)) {
        return false;
      }

      if (fabrics.length > 0 && !fabrics.includes(fabric)) {
        return false;
      }

      if (sizes.length > 0 && !sizes.includes(size)) {
        return false;
      }

      if (styles.length > 0 && !styles.includes(style)) {
        return false;
      }

      if (bottomStyles.length > 0 && !bottomStyles.includes(bottomStyle)) {
        return false;
      }

      if (occasions.length > 0 && !occasions.includes(occasion)) {
        return false;
      }

      if (looks.length > 0 && !looks.includes(look)) {
        return false;
      }

      return true;
    });

    setFilteredProducts(filtered);
  }, [filters, product]);

  const handleCheckboxChange = (filterKey, event) => {
    setFilters({
      ...filters,
      [filterKey]: event.target.checked
        ? [...filters[filterKey], event.target.value]
        : filters[filterKey].filter((value) => value !== event.target.value),
    });
  };

  const handlePriceRangeChange = (event, newValue) => {
    setFilters({ ...filters, priceRange: newValue });
  };

  // const handleActive = (id) => {
  //   setActive(id)
  // }

  return (
    <>
    <Box className="flex flex-col w-full max-sm:h-screen max-sm:pt-2 max-sm:pb-10  max-sm:overflow-y-scroll ">

    
    {
      loading && <>
      <LinearProgress sx={{
        background:'#f2f2f2',
        ".css-5ir5xx-MuiLinearProgress-bar1":
        {
         background: "pink"
        },
        ".css-1r8wrcl-MuiLinearProgress-bar2":{
          backgroundColor:'pink'
        }
      }}/>
      </>
    }
    
      <Box className="flex bg-[#f2f2f2] justify-between gap-10 pt-0 md:pt-5 xl:px-20  ">
        {/* Filters */}

        <Box className="md:w-[20%]  h-fit md:flex-col text-left bg-white max-sm:rounded-md ">
          <Box className={`w-full ${open ? 'w-full' :"w-fit"} px-2 py-5 max-sm:py-0 max-sm:px-0 rounded-md`}>
            {/* <div className="text-center mb-7">
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "SemiBold",
                  color: "GrayText",
                  mx: 2,
                }}
              >
                Filters
              </Typography>
            </div>
            <hr
              style={{ borderTop: "1px solid rgba(248, 139, 105,0.5 )" }}
              className="w-[100%]"
            /> */}
            {/* <Box className="flex flex-col"> */}
            <Box className={`hidden max-sm:flex ${!open && "fixed py-3 px-3 bg-white rounded-md" }`}>
            {
              open ? <>
              
              </> :<>
              <Menu onClick={() => setOpen(!open)}/>
              
              </> 
            } 
            </ Box>
              <Box className={`${open ? 'block absolute w-full h-screen bg-white px-10' : 'hidden'} md:block md:w-full`}>
                <Box className='hidden max-sm:flex justify-between items-center pb-2 border-solid border-b-2 border-gray-500'>
<Typography variant="h5">
  Filters
</Typography>
              <Close onClick={() => setOpen(!open)}/>
                </Box>
            {FilterData(Category, "category", filters, handleCheckboxChange , open)}
            {FilterDataPrice("Price", filters, handlePriceRangeChange, open)}
            {FilterData(Colors, "colors", filters, handleCheckboxChange, open)}
            {FilterData(Fabrics, "fabrics", filters, handleCheckboxChange, open)}
            {FilterData(Sizes, "sizes", filters, handleCheckboxChange, open)}
            {/* </Box> */}

            {/* <Box> */}
            {FilterData(Styles, "styles", filters, handleCheckboxChange, open)}
            {FilterData(
              BottomStyles,
              "bottomStyles",
              filters,
              handleCheckboxChange, open
              )}
            {FilterData(Occasions, "occasions", filters, handleCheckboxChange, open)}
            {FilterData(Looks, "looks", filters, handleCheckboxChange, open)}
            {/* </Box> */}
              </Box>
          </Box>
        </Box>
        <Box className='hidden'>
        {/* <Box className="flex"> */}
        {/* <Box className="flex flex-col  h-full md:hidden ">
          {CategoryData.map((item) => (
            <CategoryCard
              title={item.title}
              icon={item.icon}
              id={item.id}
              iconActive={item.iconactive}
              // handleActive={handleActive}
              active={active}
              setActive={setActive}
              item={item}
              setCategoryInfo={setCategoryInfo}
            />
          ))}
        </Box> */}
        <Box className="flex w-full pl-2 justify-start items-start md:hidden pb-10 pr-5 overflow-hidden ">
          <Box className="flex flex-col gap-2">
            {categoryInfo?.map((item) => (
              <>
                <Typography>{item.title}</Typography>
                <Box className="flex justify-start items-baseline overflow-scroll">
                  {item?.info?.map((item) => (
                    <>
                      <Box className="flex flex-col justify-center items-center w-[100px] h-[100px] ">
                        <img
                          src={""}
                          alt=""
                          className="w-[60px] h-[60px] rounded-2xl outline-none"
                        />
                        <Typography variant="caption" className="text-center">
                          {item.title}
                        </Typography>
                      </Box>
                    </>
                  ))}
                </Box>
              </>
            ))}

            {/* {filteredProducts.map((item) => (
                <>
                  <Card item={item} />
                </>
              ))} */}
          </Box>
        </Box>
        </Box>
        <Box className=" md:w-[70%] w-[80%] md:flex pb-10 pr-5 ">
          <Box className="flex flex-wrap gap-2 md:gap-5 md:justify-start">
            {filteredProducts.map((item) => (
              <>
                <Card item={item} />
              </>
            ))}
          </Box>
        </Box>
      </Box>
      </Box>
    </>
  );
};



export default Shop;
