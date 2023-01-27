import React from "react";
import { Link } from "react-router-dom";
import navbarcss from "../../styles/home/navbar.module.css";
import { Menu, MenuItem } from "@mui/material"
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
        <div>
            <MenuIcon
                id="basic-demo-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="outlined"
                color="neutral"
                onClick={handleClick}
            />
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                aria-labelledby="basic-demo-button"
            >
                <MenuItem onClick={handleClose} className={navbarcss.manuchild}>
                    <Link to="/category/Now Trending">
                        <span>NEW LAUNCH</span>
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleClose} className={navbarcss.manuchild}>
                    <span className={navbarcss.hovertopwear}>
                        <Link to={"/category/Top Wear"}>TOP WEAR</Link>
                    </span>
                </MenuItem>
                <MenuItem onClick={handleClose} className={navbarcss.manuchild}>
                    <Link to="/category/Bottom Wear">
                        <span>BOTTOM WEAR</span>
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleClose} className={navbarcss.manuchild}>
                    <Link to="/category/Cosmetics">
                        <span>COSMETIC</span>
                    </Link>

                </MenuItem>
                <MenuItem onClick={handleClose} className={navbarcss.manuchild}>
                    <Link to="/category/Footwear">
                        <span>FOOTWEAR</span>
                    </Link>

                </MenuItem>
                <MenuItem onClick={handleClose} className={navbarcss.manuchild}>
                    <Link to="/category/Jewellery">
                        <span>JEWELLERY</span>
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleClose} className={navbarcss.manuchild}>
                    <Link to="/category/Drapes">
                        <span>DRAPES</span>
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleClose} className={navbarcss.manuchild}>
                    <Link to="/category/Stories by W">
                        <span>WISHFUL</span>
                    </Link>

                </MenuItem>
                <MenuItem onClick={handleClose} className={navbarcss.manuchild}>
                    <Link to="/category/Plus Size">
                        <span>PLUS SIZE</span>
                    </Link>
                </MenuItem>
            </Menu>
        </div>
    )
}

export default Hamberger