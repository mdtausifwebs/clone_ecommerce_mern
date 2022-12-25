
import React from "react";
import { Link } from "react-router-dom";
import navbarcss from "../../styles/home/navbar.module.css";
import { CgProfile } from "react-icons/cg"
import { BsCart } from "react-icons/bs"
import { BsSearch } from "react-icons/bs"
import { useDispatch } from "react-redux";
import { SearchAction } from "../../redux/action/ProductAction"
const Navbar = () => {
  const dispatch = useDispatch()

  const SearchHandlar = async (search) => {
    await dispatch(SearchAction(JSON.stringify({ input: search })))
  }
  return (
    <div className={navbarcss.container}>
      <div className={navbarcss.childContainer}>
        <div className={navbarcss.logoSec}>
          <div className={navbarcss.bergarmenu}>
            <i className="fa fa-bars"></i>
          </div>
          <div className={navbarcss.logo}>
            <Link to="/">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCHVUsMiOn-wVfTcsR0AdT8vA8UPJyao32oqpNgadbTFQbwap2fgSir1rUVbWHrtqm0Dw&usqp=CAU"
                alt="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCHVUsMiOn-wVfTcsR0AdT8vA8UPJyao32oqpNgadbTFQbwap2fgSir1rUVbWHrtqm0Dw&usqp=CAU"
              />
            </Link>
          </div>
        </div>
        <div className={navbarcss.manuSec}>
          <div className={navbarcss.manuchild}>
            <Link to="/category/Now Trending">
              <span>NEW LAUNCH</span>
            </Link>
          </div>
          <div className={navbarcss.manuchild}>
            <span className={navbarcss.hovertopwear}>
              <Link to={"/category/Top Wear"}>TOP WEAR</Link>
            </span>
          </div>
          <div className={navbarcss.manuchild}>
            <Link to="/category/Bottom Wear">
              <span>BOTTOM WEAR</span>
            </Link>
          </div>
          <div className={navbarcss.manuchild}>
            <Link to="/category/Cosmetics">
              <span>COSMETIC</span>
            </Link>
           
          </div>
          <div className={navbarcss.manuchild}>
            <Link to="/category/Footwear">
              <span>FOOTWEAR</span>
            </Link>
          
          </div>
          <div className={navbarcss.manuchild}>
            <Link to="/category/Jewellery">
              <span>JEWELLERY</span>
            </Link>
          </div>
          <div className={navbarcss.manuchild}>
            <Link to="/category/Drapes">
              <span>DRAPES</span>
            </Link>
          
          </div>
          <div className={navbarcss.manuchild}>
            <Link to="/category/Stories by W">
              <span>WISHFUL</span>
            </Link>
           
          </div>
          <div className={navbarcss.manuchild}>
            <Link to="/category/Plus Size">
              <span>PLUS SIZE</span>
            </Link>
          </div>
        
        </div>
        <div className={navbarcss.searchSec}>
          <input type="text" placeholder="Search here" onChange={(e) => SearchHandlar(e.target.value)} />
          <BsSearch />
        </div>
        <div className={navbarcss.loginSec}>
          <div className={navbarcss.loginIcon}>
            <Link to="/login">
              <CgProfile />
              <span>Login</span>
            </Link>
            <div className={navbarcss.subloginsec}>
              <div className={navbarcss.subloginchild}>
                <Link to="/login">
                  <span>Login</span>
                </Link>
                <Link to="/register">
                  <span>Register</span>
                </Link>
                {/* <span onClick={() => localStorage.removeItem("token")}>
                  Log Out
                </span> */}
              </div>
            </div>
          </div>
          <div className={navbarcss.cartIcon}>
            <Link to="/category/cart">
              <BsCart />
              {/* <p>{Cartsdata ? Cartsdata.length : "0"}</p> */}
              <span>Cart</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// import React from "react";
// import { Link } from "react-router-dom";
// import Navbarcss from "../../styles/home/navbar.module.css"
// const Navbar = () => {
//   return (
//     <div>
//       <div>
//         <div>
//           <Link to="/">Navbar</Link>
//           <Link to="/">Navbar</Link>
//           <Link to="/">Navbar</Link>
//           <Link to="/">Navbar</Link>
//           <Link to="/">Navbar</Link>
//           <Link to="/">Navbar</Link>
//           <Link to="/register">Register</Link>
//           <Link to="/login">Login</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

