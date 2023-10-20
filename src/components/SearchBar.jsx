import SearchIcon from "@mui/icons-material/Search";
import { Box, IconButton, InputBase } from "@mui/material";
import React from "react";

const SearchBar = () => {
  return (
    <>
      <Box>
        <Box
          sx={{
            borderBottom: "1px solid black",
            display: "flex",
            ":-moz-read-write": {
              width: "150%",
            },
          }}
          className="w-full"
          visibility={"IconButton"}
        >
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{ pt: 1, width: "100%" }}
            placeholder="Search "
            inputProps={{ "aria-label": "search" }}
          />
        </Box>
        {
          <>
            <Box></Box>
          </>
        }
      </Box>
    </>
  );
};

export default SearchBar;
