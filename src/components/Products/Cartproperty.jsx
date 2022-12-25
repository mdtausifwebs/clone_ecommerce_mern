import React from 'react'
import { useNavigate } from 'react-router-dom'
import cartcss from "../../styles/product/cart.module.css"
const Cartproperty = ({totalPrice,cartPrice}) => {
    const navigate=useNavigate()
    return (
        <div className={cartcss.CartpropertyPage}>
            <div>SUMMARY</div>
            <div>
                <span>Total product Price </span>
                <span>{`${totalPrice}`}</span>
            </div>
            <div>
                <span>Total discount Price  </span>
                <span>{` ${totalPrice - cartPrice}`}</span>
            </div>
            <div>
                <span>Total cart Price</span>
                <span>{` ${cartPrice}`}</span>
            </div>
            <div>
                <span>Total Discount </span>
                <span> {` ${Math.floor((totalPrice - cartPrice) * 100 / totalPrice)}%`}</span>
            </div>
            <div>
                <button onClick={()=>navigate("/buynow")}>Buy Now</button>
            </div>
        </div>
    )
}

export default Cartproperty