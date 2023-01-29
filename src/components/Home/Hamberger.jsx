import React from "react";
import { Link } from "react-router-dom";
import navbarcss from "../../styles/home/navbar.module.css";
import { Box, Menu, MenuItem, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
const Hamberger = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box >
            <MenuIcon
                id="basic-demo-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="outlined"
                color="neutral"
                onClick={handleClick}
                sx={{ display: { xs: "flex", sm: "flex", md: "none", } }}
            />
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                aria-labelledby="basic-demo-button"
            >
                <MenuItem onClick={handleClose} className={navbarcss.manuchild}>
                    <Link to="/">
                        HOME
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleClose} className={navbarcss.manuchild}>
                    <Link to="/category/Now Trending">
                        NEW LAUNCH
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleClose} className={navbarcss.manuchild}>
                    <Link to={"/category/Top Wear"}>TOP WEAR</Link>
                </MenuItem>
                <MenuItem onClick={handleClose} className={navbarcss.manuchild}>
                    <Link to="/category/Bottom Wear">
                        BOTTOM WEAR
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleClose} className={navbarcss.manuchild}>
                    <Link to="/category/Cosmetics">
                        COSMETIC
                    </Link>

                </MenuItem>
                <MenuItem onClick={handleClose} className={navbarcss.manuchild}>
                    <Link to="/category/Footwear">
                        FOOTWEAR
                    </Link>

                </MenuItem>
                <MenuItem onClick={handleClose} className={navbarcss.manuchild}>
                    <Link to="/category/Jewellery">
                        JEWELLERY
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleClose} className={navbarcss.manuchild}>
                    <Link to="/category/Drapes">
                        DRAPES
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleClose} className={navbarcss.manuchild}>
                    <Link to="/category/Stories by W">
                        WISHFUL
                    </Link>

                </MenuItem>
                <MenuItem onClick={handleClose} className={navbarcss.manuchild}>
                    <Link to="/category/Plus Size">
                        PLUS SIZE
                    </Link>
                </MenuItem>
            </Menu>
            <Box className={navbarcss.laptopMenu}
                sx={{ display: { xs: "none", sm: "none", md: "flex" }, justifyContent: "center", alignItems: "center", textAlign: "center" }} >
                <Link to={"/"} style={{ width: "5%", height: "5%", aspectRatio: "1", alignItems: "center", textAlign: "center", }}>
                    <img style={{ width: "100%", aspectRatio: "1", borderRadius: "50%" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCHVUsMiOn-wVfTcsR0AdT8vA8UPJyao32oqpNgadbTFQbwap2fgSir1rUVbWHrtqm0Dw&usqp=CAUon.ico" alt="logo" />
                </Link>
                <Typography onClick={handleClose} className={navbarcss.manuchild}>
                    <Link to="/category/Now Trending">
                        NEW LAUNCH
                    </Link>
                </Typography>
                <Typography onClick={handleClose} className={navbarcss.manuchild}>
                    <Link to={"/category/Top Wear"}>TOP WEAR</Link>
                </Typography>
                <Typography onClick={handleClose} className={navbarcss.manuchild}>
                    <Link to="/category/Bottom Wear">
                        BOTTOM WEAR
                    </Link>
                </Typography>
                <Typography onClick={handleClose} className={navbarcss.manuchild}>
                    <Link to="/category/Cosmetics">
                        COSMETIC
                    </Link>
                </Typography>
                <Typography onClick={handleClose} className={navbarcss.manuchild}>
                    <Link to="/category/Footwear">
                        FOOTWEAR
                    </Link>
                </Typography>
                <Typography onClick={handleClose} className={navbarcss.manuchild}>
                    <Link to="/category/Jewellery">
                        JEWELLERY
                    </Link>
                </Typography>
                <Typography onClick={handleClose} className={navbarcss.manuchild}>
                    <Link to="/category/Drapes">
                        DRAPES
                    </Link>
                </Typography>
                <Typography onClick={handleClose} className={navbarcss.manuchild}>
                    <Link to="/category/Stories by W">
                        WISHFUL
                    </Link>
                </Typography>
                <Typography onClick={handleClose} className={navbarcss.manuchild}>
                    <Link to="/category/Plus Size">
                        PLUS SIZE
                    </Link>
                </Typography>
            </Box>
        </Box>
    )
}

export default Hamberger





// <IconButton size='large' edge="start" color='inherit' aria-label='open drawer' sx={{ mr: 2, display: { xs: "block", sm: "none" } }}>
// <MenuIcon />
// </IconButton>
// <Typography variant='h6' noWrap component="div"
// sx={{ display: { xs: "none", sm: "block" }, width: { sm: "10%" } }}
// >
// <img style={{ width: "50%", height: "50%", aspectRatio: "1.5", borderRadius: "50%" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCHVUsMiOn-wVfTcsR0AdT8vA8UPJyao32oqpNgadbTFQbwap2fgSir1rUVbWHrtqm0Dw&usqp=CAUon.ico" alt="logo" />
// </Typography>
// <Box sx={{ flexGrow: 1, border: "1px solid black" }}>
// <Hamberger />
// </Box>