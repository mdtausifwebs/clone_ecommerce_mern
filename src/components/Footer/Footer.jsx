import React from 'react'
import { Box } from "@mui/material"
import SocialIcon from './SocialIcon'
import FooterDetails from './FooterDetails'
const Footer = () => {
  return (
    <Box sx={{ width: "100%" ,backgroundColor:"blue" }}>
      <SocialIcon />
      <FooterDetails />
    </Box>
  )
}

export default Footer

