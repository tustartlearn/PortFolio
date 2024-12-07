import React from 'react';
import { CardMedia, Box } from '@mui/material';
import  Whatsapp from './whatsapp.png' 
import Facebook from './facebook.png'
import Twitter from './twitter.png'
const SocialSidebar = () => {
  const socialMediaData = [
    { name: "WhatsApp", image: Whatsapp },
    { name: "Facebook", image: Facebook },
    { name: "Twitter", image: Twitter },
    
  ];

  return (
    <Box id="socialcard">
      {socialMediaData.map((socialMedia, index) => (
        <CardMedia
          key={index}
          component="img"
          alt={socialMedia.name}
          id="social-cardmedia"
          image={socialMedia.image}
        />
      ))}
    </Box>
  );
};

export default SocialSidebar;
