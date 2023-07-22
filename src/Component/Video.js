import React from 'react'
import { Stack } from '@mui/system'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'
import { Box } from '@mui/material'


export default function Video(props) {
   if(!props.videos?.length)return 'loading...'
    // console.log(props.videos)
  return (
     <Stack direction ={props.direction || 'row'} flexWrap='wrap' justifyContent="start" gap={2}>
          {props.videos.map((item,index)=>(
             <Box key={index}>
              {item.id.videoId && <VideoCard video={item} />}
              {item.id.channelId && <ChannelCard  channelDetails={item} />}

             </Box> 
             

          ))}

     </Stack>
  )
}
