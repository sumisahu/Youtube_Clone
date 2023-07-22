import React from "react";
import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import SideBar from './SideBar'
import Video from "./Video";
 import { FetchFromAPI } from "../utils/FetchFromAPI";


 

export default function Feed() {
 


  const [selectedCategory,setSelectedCategory]=useState('New')
  const [videos,setVideos]=useState([])
  
  useEffect(() => {
     FetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
    }, [selectedCategory]);

    
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        


    <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

      <Typography className="copyright"  variant="body2"  sx={{mt:1.5,color:'#fff'}}>
        Copyright 2023 JSUMIT Media
      </Typography>


      </Box>
      <Box p={2} sx={{overflowY:'auto',height:'90vh',flex:2}}>
        <Typography variant="h4"
        fontWeight="bold" 
          mb={2}
          sx={{color:'white' }}
        >
          <span style={{marginRight:5}}>{selectedCategory}</span><span style={{color:"#fff"}}>videos</span>
        </Typography>

        <Video videos={videos} />
      </Box>
     
     
    </Stack>
  );
}
