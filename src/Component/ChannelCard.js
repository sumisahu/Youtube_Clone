import {Box,CardContent,CardMedia,Typography} from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../utils/Constant'
import ChannelDetail from './ChannelDetail'
import { borderRadius } from '@mui/system'
export default function ChannelCard({channelDetails,marginTop}) {
   return (
    <Box   
     sx={{boxshadow:'none',
    borderRadius:'20px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:{xs:'356px',md:'320px'},
    hieght:'326px',
    margin:'auto',
    marginTop:marginTop
   
  }}>
    <Link to={`/channel/${channelDetails?.id?.channelId}`}>
     <CardContent sx={{display:'flex',flexDirection:'column',justifyContent:'center',textAlign:'center',color:'#fff'}} >
    <CardMedia 
      image={channelDetails?.snippet?.thumbnails?.high?.url || demoProfilePicture}
      alt={channelDetails?.snippet?.title}
      sx={{borderRadius:'50%',height:'180px',width:'180px'}}
    />
    <Typography variant='h6' >
    {channelDetails?.snippet?.title}
    <CheckCircle sx={{fontSize:12,color:'gray',ml:'5px'}} />

    </Typography>
    Subscribers :{channelDetails?.statistics?.subscriberCount}
     </CardContent>


    </Link>
      
    </Box>
    
  )
}
