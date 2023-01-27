import React from 'react'
import { styled, alpha, AppBar, Toolbar, Box, IconButton, InputBase, Badge, Typography, Menu, MenuItem } from "@mui/material"
import { MenuIcon, SearchIcon, AccountCircle, } from "@mui/icons-material"


const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton size='large' edge="start" color='inherit' aria-label='open drawer' sx={{ mr: 2 }}>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar