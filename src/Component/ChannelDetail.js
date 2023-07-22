import React from 'react'
import { useState,useEffect } from 'react'
import { Box } from '@mui/material'
import { useParams } from 'react-router-dom'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'
import { FetchFromAPI } from '../utils/FetchFromAPI'
import zIndex from '@mui/material/styles/zIndex'
import { height } from '@mui/system'
import Video from './Video'





export default function ChannelDetail() {
 const [channelDetail,setChannelDetail]=useState(null)
  const [videos,setVideos]=useState([])
   
  const {id}=useParams();
 
 

  useEffect(()=>{
      
  FetchFromAPI(`channels?part=snippet&id=${id}`)
  .then((data)=> setChannelDetail(data?.items[0]))
  
  FetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
  .then((data)=> setVideos(data?.items))

  
  
  },[id])
 
   console.log('channelDetail',channelDetail)
  //  console.log('videos',videos)
   return (
    <Box minHeight="95vh">
   <Box>
    <div style={{background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,9,0.9389005602240896) 32%, rgba(0,212,255,1) 100%)",
       zIndex:10,
      height:'300px'
    
  }}
     />
     <ChannelCard channelDetails={channelDetail} marginTop="-110px"  />
     
   </Box>
   <Box display="flex" p='2'>
    <Box sx={{mr:{sm:'100px'}}} />
    <Video videos={videos}  />
    

   </Box>
   </Box>
  )
}
