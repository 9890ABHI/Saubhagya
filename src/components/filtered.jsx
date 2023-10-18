import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Slider,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

export const FilterData = (data, filterKey, filters, handleCheckboxChange) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <FormControl component="fieldset" className="w-full">
        <Box className="w-[80%]" sx={{ borderBottom: "1px solid black" }}>
          <IconButton
            onClick={() => setOpen(!open)}
            className="w-full flex justify-between pl-5 border-b-2"
          >
            <Typography variant="h6" className="capitalize text-black">
              {filterKey}
            </Typography>
            {!open ? <ExpandMore /> : <ExpandLess />}
          </IconButton>
        </Box>

        <Box classname="flex w-[80%] pl-9">
          {open && (
            <FormGroup>
              {data.map((item) => (
                <>
                  {filterKey === "colors" ? (
                    <>
                      <FormControlLabel
                        key={item.title}
                        control={
                          <Checkbox
                            checked={filters[filterKey].includes(item.title)}
                            onChange={(e) => handleCheckboxChange(filterKey, e)}
                            icon={
                              <Box
                                sx={{
                                  width: 24,
                                  height: 24,
                                  backgroundColor: item.title,
                                  borderRadius: "50%",
                                }}
                              />
                            }
                            checkedIcon={
                              <Box
                                sx={{
                                  width: 24,
                                  height: 24,
                                  backgroundColor: item.title,
                                  borderRadius: "50%",
                                }}
                              />
                            }
                            value={item.title}
                          />
                        }
                        label={item.title}
                      />
                    </>
                  ) : (
                    <>
                      <FormControlLabel
                        className="pl-8"
                        key={item.title}
                        control={
                          <Checkbox
                            checked={filters[filterKey].includes(item.title)}
                            onChange={(e) => handleCheckboxChange(filterKey, e)}
                            value={item.title}
                          />
                        }
                        label={item.title}
                      />
                    </>
                  )}
                </>
              ))}
            </FormGroup>
          )}
        </Box>
      </FormControl>
    </>
  );
};

export const FilterDataPrice = (filterKey, filters, handlePriceRangeChange) => {
  const [open, setOpen] = useState(false);
  const [minPrice, setMinPrice] = useState(filters.priceRange[0]);
  const [maxPrice, setMaxPrice] = useState(filters.priceRange[1]);
  const maximum = useState(filters.priceRange[1]);
  return (
    <>
      <FormControl component="fieldset" className="w-full">
        <Box
          className="w-[80%] justify-between"
          sx={{ borderBottom: "1px solid black" }}
        >
          <IconButton
            onClick={() => setOpen(!open)}
            className="w-full flex justify-between pl-5 border-b-2"
          >
            <Typography variant="h6" className="capitalize text-black">
              {filterKey}
            </Typography>
            {!open ? <ExpandMore /> : <ExpandLess />}
          </IconButton>
        </Box>

        <Box sx={{ width: "70%", pl: 3 }}>
          {open && (
            <>
              <Box className="flex ">
                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                  <InputLabel htmlFor="standard-adornment-amount">
                    Min
                  </InputLabel>
                  <Input
                    id="standard-adornment-amount"
                    placeholder={filters.priceRange[0]}
                    // onChange={handlePriceRangeChange}
                    startAdornment={
                      <InputAdornment position="start">$</InputAdornment>
                    }
                  />
                </FormControl>
                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                  <InputLabel htmlFor="standard-adornment-amount">
                    Max
                  </InputLabel>
                  <Input
                    id="standard-adornment-amount"
                    placeholder={maxPrice}
                    value={maxPrice}
                    startAdornment={
                      <InputAdornment position="start">₹</InputAdornment>
                    }
                    onChange={(e) => setMaxPrice(e)}
                  />
                </FormControl>
              </Box>
              <Slider
                value={filters.priceRange}
                onChange={handlePriceRangeChange}
                valueLabelDisplay="auto"
                min={minPrice}
                max={maxPrice}
                sx={{
                  color: "rgba(0,0,0,0.87)",
                  "& .MuiSlider-track": {
                    border: "none",
                  },
                  "& .MuiSlider-thumb": {
                    width: 24,
                    height: 24,
                    backgroundColor: "#12edad",
                    "&:before": {
                      boxShadow: "0 4px 8px rgba(0,0,0,0.4)",
                    },
                    "&:hover, &.Mui-focusVisible, &.Mui-active": {
                      boxShadow: "none",
                    },
                  },
                }}
              />
            </>
          )}
        </Box>
      </FormControl>
      {/* <Box>
          <FormControl className="w-[75%]">
            <Typography variant="h6" sx={{ borderBottom: "1px solid black" }}>
              Price Range
            </Typography>
            
          </FormControl>
        </Box> */}
    </>
  );
};
