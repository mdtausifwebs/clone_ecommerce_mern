import React from 'react'
import { Typography, Box } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import ShareIcon from '@mui/icons-material/Share';
const SocialIcon = () => {
    return (
        <Box sx={{ width: "100%", textAlign: "center", color: "white" }}>
            <Typography>Social Icons</Typography>
            <Box sx={{ display: "flex",padding:"1rem", justifyContent: "space-between", width: "50%", margin: "auto" }}>
                <InstagramIcon />
                <FacebookIcon />
                <LinkedInIcon />
                <YouTubeIcon />
                <PinterestIcon />
                <ShareIcon />
            </Box>
        </Box>
    )
}

export default SocialIcon