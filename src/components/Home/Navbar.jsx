
import React from "react";
import { Link } from "react-router-dom";
import navbarcss from "../../styles/home/navbar.module.css";
import { CgProfile } from "react-icons/cg"
import { BsCart } from "react-icons/bs"
import { BsSearch } from "react-icons/bs"
import { useDispatch, useSelector } from "react-redux";
import { SearchAction } from "../../redux/action/ProductAction"
const Navbar = () => {
  // const { Products } = useSelector((state) => state?.Products);
  const dispatch = useDispatch()

  const SearchHandlar = async (search) => {
    // console.log(search,Products)
    // let res = Products.filter((item) => {
    //   return item.name.includes(search) ||
    //     item.selling_price.includes(search) ||
    //     item.material.includes(search) ||
    //     item.drm_category.includes(search) ||
    //     item.fit.includes(search) ||
    //     item.fabric_family.includes(search)
    // })
    // console.log(res)
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
              {/* <div className={navbarcss.topwear}>
                <div className={navbarcss.topwearLink}>
                  <Link to="/category/top-wear-kurtas">
                    <span>KURTAS</span>
                  </Link>
                  <Link to="/category/top-wear-sets-dresses">
                    <span>SETS & DRESSES</span>
                  </Link>
                  <Link to="/category/folksong-topwear">
                    <span>FOLKSONG</span>
                  </Link>
                  <Link to="/category/topwear-plus-size">
                    <span>PLUS SIZE</span>
                  </Link>
                  <Link to="/category/top-wear-tops">
                    <span>TOPS</span>
                  </Link>
                </div>
              </div> */}
            </span>
          </div>
          <div className={navbarcss.manuchild}>
            <Link to="/category/Bottom Wear">
              <span>BOTTOM WEAR</span>
            </Link>
            {/* <div className={navbarcss.botomwear}>
              <div className={navbarcss.botomwearLink}>
                <Link to="/category/bottom-wear-palazzo-pants">
                  <span>PLAZOOS & PANTS</span>
                </Link>
                <Link to="/category/bottom-wear-churidars-salwar">
                  <span>CHURIDARS & SALWARS</span>
                </Link>
                <Link to="/category/folksong-topwear">
                  <span>FOLKSONG</span>
                </Link>
                <Link to="/category/bottomwear-plus-size">
                  <span>PLUS SIZES</span>
                </Link>
                <Link to="/category/bottom-wear-skirts">
                  <span>SKIRTS</span>
                </Link>
              </div>
            </div> */}
          </div>
          <div className={navbarcss.manuchild}>
            <Link to="/category/Cosmetics">
              <span>COSMETIC</span>
            </Link>
            {/* <div className={navbarcss.cosmetic}>
              <div className={navbarcss.cosmeticLink}>
                <Link to="/category/w-lips">
                  <span>LIPS</span>
                </Link>
                <Link to="/category/w-nails">
                  <span>NAILS</span>
                </Link>
                <Link to="/category/w-eyes">
                  <span>EYES</span>
                </Link>
                <Link to="/category/w-face-pallete">
                  <span>FACE</span>
                </Link>
              </div>
            </div> */}
          </div>
          <div className={navbarcss.manuchild}>
            <Link to="/category/Footwear">
              <span>FOOTWEAR</span>
            </Link>
            {/* <div className={navbarcss.footwear}>
              <div className={navbarcss.footwearLink}>
                <Link to="/category/footwear-heels">
                  <span>HEELS</span>
                </Link>
                <Link to="/category/footwear-flats">
                  <span>FLATS</span>
                </Link>
                <Link to="/category/footwear-wedges">
                  <span>WEDGES</span>
                </Link>
              </div>
            </div> */}
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
            {/* <div className={navbarcss.drapes}>
              <div className={navbarcss.drapesLink}>
                <Link to="/category/drapes-wear-dupatta">
                  <span>DUPATTAS</span>
                </Link>
                <Link to="/category/shawls">
                  <span>SHAWLS</span>
                </Link>
              </div>
            </div> */}
          </div>
          <div className={navbarcss.manuchild}>
            <Link to="/category/Stories by W">
              <span>WISHFUL</span>
            </Link>
            {/* <div className={navbarcss.wishful}>
              <div className={navbarcss.wishfulLink}>
                <Link to="/category/wishful-kurtas">
                  <span>KURTAS</span>
                </Link>
                <Link to="/category/wishful-sets-dresses">
                  <span>SETS & DRESSES</span>
                </Link>
                <Link to="/category/wishful-palazzos-and-pants">
                  <span>PALAZZOS & PANTS</span>
                </Link>
                <Link to="/category/wishful-skirts">
                  <span>SKIRTS</span>
                </Link>
              </div>
            </div> */}
          </div>
          <div className={navbarcss.manuchild}>
            <Link to="/category/Plus Size">
              <span>PLUS SIZE</span>
            </Link>
          </div>
          {/* <div className={navbarcss.manuchild}>
            <Link to="/category/stories-by-w">
              <span>STORE BY W</span>
            </Link>
            <div className={navbarcss.store}>
              <div className={navbarcss.storeLink}>
                <Link to="/category/w-aikat">
                  <span>AIKAT</span>
                </Link>
                <Link to="/category/w-sunehr">
                  <span>SUNEHR</span>
                </Link>
              </div>
            </div>
          </div> */}
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

