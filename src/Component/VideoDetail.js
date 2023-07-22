import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { Link,useParams } from 'react-router-dom'
import { Typography,Box,Stack } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import Video from './Video'
import { FetchFromAPI } from '../utils/FetchFromAPI'



export default function VideoDetail() {
  var {id}=useParams()

var [videosdetails,setVideosDetails]=useState(null)
var [videos,setVideos]=useState(null)

console.log(videosdetails)


useEffect(()=>{
  FetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
  .then((data)=> setVideosDetails(data?.items[0]))
    
  FetchFromAPI(`search?part=snippet,&relatedToVideoId=${id}&type=video`)
  .then((data)=> setVideos(data?.items))


},[id])

if(!videosdetails?.snippet)return 'Loading...'


 // object destructuring
 const {snippet:{title,channelId,channelTitle},statistics:{viewCount,likeCount}}=videosdetails

  return (
     <Box minHeight="95vh">
      <Stack direction={{xs:'column',md:'row'}}>
        <Box flex={1}>
      <Box sx={{width:"100%",position:'sticky',top:"86px"}}>
       <ReactPlayer className='react-player'
          url={`https://www.youtube.com/watch?v=${id}`} controls />
          <Typography color="#fff" variant='h5' fontweight="bold" p={2}>
            {title}
          </Typography>
          <Stack direction="row" justifyContent="space-between" sx={{color:'#fff'}} py={1} px={2}>
            <Link to={`/channel/${channelId}`}>
              <Typography variant={{sm:'subtitle1',md:'h6'}} color="#fff" >
                {channelTitle}
                <CheckCircle sx={{fontSize:'12px',color:'gray',ml:'5px'}} />
              </Typography>
            </Link>
            <Stack direction="row" gap={2} alignItems="center">
              <Typography variant='body1' sx={{opacity:0.7}}>
                {parseInt(viewCount).toLocaleString()} views
              </Typography>
              <Typography variant='body1' sx={{opacity:0.7}}>
                {parseInt(likeCount).toLocaleString()} likes
              </Typography>
         
            </Stack>

          </Stack>
      </Box>

        </Box>

    <Box px={2} py={{md:1,xs:5}} justifyContent="center" alignItems="center">
      <Video  videos={videos} direction='column'  />
       
      
      </Box>      


      </Stack>

     
     </Box>
  )
}
