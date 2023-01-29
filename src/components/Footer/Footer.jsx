import React from 'react'
import { Box } from "@mui/material"
import SocialIcon from './SocialIcon'
import FooterDetails from './FooterDetails'
import CopyRight from './CopyRight'
const Footer = () => {
  return (
    <Box sx={{ width: "100%" ,backgroundColor:"#1976D2" }}>
      <SocialIcon />
      <FooterDetails />
      <CopyRight/>
    </Box>
  )
}

export default Footer

