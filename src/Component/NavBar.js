import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { logo } from "../utils/Constant";

const NavBar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={1}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
    }}
  >
   <Link to="/" style={{display:'flex',alignItems:'center'}}  >
   <img  src={logo}  alt="logo" height={45} />
   
   </Link>

<SearchBar />

  </Stack>
);
export default NavBar;
