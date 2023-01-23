import React from 'react'
import sidebarcss from "../../styles/product/sidebar.module.css"
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti"
import { useState } from 'react'
const Sidebar = ({ SortingProduct, discountPrice,necktype,patterntype,sleevetype }) => {
  const [temp, setTemp] = useState(false)
  const [val, setval] = useState("")
  const sideExpandHandler = (text) => {
    setval(text)
    setTemp(temp ? false : true)
  }
  return (
    <div className={sidebarcss.container}>
      <div className={sidebarcss.box}>
        <div className={sidebarcss.price}>
          <div className={sidebarcss.barheader} onClick={() => sideExpandHandler("price")}>
            <p>price</p>
            <p>{temp ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
            </p>
          </div>
          {
            val === "price" && temp ? <div className={sidebarcss.barmenu}>
              <div onClick={() => SortingProduct("1000")}>0 to 1000</div>
              <div onClick={() => SortingProduct("2000")}>1000 to 2000</div>
              <div onClick={() => SortingProduct("3000")}>2000 to 3000</div>
              <div onClick={() => SortingProduct("4000")}>3000 to 4000 </div>
            </div> : null
          }
        </div>
        <div className={sidebarcss.metrial}>
          <div className={sidebarcss.barheader} onClick={() => sideExpandHandler("Discount")}>
            <p>Discount</p>
            <p>{temp ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
            </p>
          </div>
          {
            val === "Discount" && temp ? <div className={sidebarcss.barmenu}>
              <div onClick={() => discountPrice("10")} >Discount 10%</div>
              <div onClick={() => discountPrice("20")} >Discount 20%</div>
              <div onClick={() => discountPrice("30")} >Discount 30%</div>
              <div onClick={() => discountPrice("40")} >Discount 40%</div>
              <div onClick={() => discountPrice("50")} >Discount 50%</div>
              <div onClick={() => discountPrice("60")} >Discount 60%</div>
            </div> : null
          }
        </div>
        <div className={sidebarcss.metrial}>
          <div className={sidebarcss.barheader} onClick={() => sideExpandHandler("necktype")}>
            <p>Neck Type</p>
            <p>{temp ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
            </p>
          </div>
          {
            val === "necktype" && temp ? <div className={sidebarcss.barmenu}>
              <div onClick={()=>{necktype("Round Neck")}}>Round Neck</div>
              <div onClick={()=>{necktype("Boat Neck")}}>Boat Neck</div>
              <div onClick={()=>{necktype("Keyhole Neck")}}>Keyhole Neck</div>
              <div onClick={()=>{necktype("Mandarin Collar")}}>Mandarin Collar</div>
              <div onClick={()=>{necktype("Shirt Collar")}}>Shirt Collar</div>
              <div onClick={()=>{necktype("V-Neck")}}>V-Neck</div>
            </div> : null
          }
        </div>
        <div className={sidebarcss.metrial}>
          <div className={sidebarcss.barheader} onClick={() => sideExpandHandler("sleeve")}>
            <p>Sleeve</p>
            <p>{temp ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
            </p>
          </div>
          {
            val === "sleeve" && temp ? <div className={sidebarcss.barmenu}>
             <div onClick={()=>{sleevetype("Full Sleeve")}}>Full Sleeve</div>
              <div onClick={()=>{sleevetype("3/4 Sleeve")}}>3/4 Sleeve</div>
              <div onClick={()=>{sleevetype("Sleeveless")}}>Sleeveless</div>
              <div onClick={()=>{sleevetype("Elbow Sleeve")}}>Elbow Sleeve</div>
              <div onClick={()=>{sleevetype("Half Sleeve")}}>Half Sleeve</div>
              <div onClick={()=>{sleevetype("Kaftan Sleeve")}}>Kaftan Sleeve</div>

            </div> : null
          }
        </div>
        <div className={sidebarcss.metrial}>
          <div className={sidebarcss.barheader} onClick={() => sideExpandHandler("pattern")}>
            <p>pattern</p>
            <p>{temp ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
            </p>
          </div>
          {
            val === "pattern" && temp ? <div className={sidebarcss.barmenu}>
             <div onClick={()=>{patterntype("Floral")}}>Floral</div>
              <div onClick={()=>{patterntype("Paisley")}}>Paisley</div>
              <div onClick={()=>{patterntype("Striped")}}>Striped</div>
              <div onClick={()=>{patterntype("Geometric")}}>Geometric</div>
              <div onClick={()=>{patterntype("Solid")}}>Solid</div>
              <div onClick={()=>{patterntype("Ornamental")}}>Ornamental</div>
              <div onClick={()=>{patterntype("Block Print")}}>Block Print</div>


            </div> : null
          }
        </div>
      </div>
    </div>
  )
}

export default Sidebar