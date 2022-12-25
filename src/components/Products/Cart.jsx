import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import cartcss from "../../styles/product/cart.module.css"
import Cartproperty from './Cartproperty'
// import { useSelector, useDispatch } from "react-redux"
// import { addToCart } from "../../redux/action/ProductAction"
const Cart = () => {
    const [data, setdata] = useState([])
    let cartPrice = JSON.parse(localStorage.getItem("cartPrice"))
    let totalPrice = JSON.parse(localStorage.getItem("totalPrice"))

    useEffect(() => {
        setdata(JSON.parse(localStorage.getItem("cart")))
    }, [])
    const RemoveHandler = (id) => {
        // console.log(id)
        localStorage.setItem("totalPrice", JSON.stringify(totalPrice - id.price))
        localStorage.setItem("cartPrice", JSON.stringify(cartPrice - id.selling_price))
        let product = data.filter((item) => {
            // console.log(item)
            return item._id != id._id;
        })
        setdata(product)
        localStorage.setItem("cart", JSON.stringify(product))

        // console.log(product)
    }
    return (
        <div className={cartcss.container}>
            <div className={cartcss.Childcontainer}>
                <div className={cartcss.productContainer}>
                    {
                        data != null ? data.map((item, i) => {
                            return <div key={i} className={cartcss.box}>
                                <img src={item.image} alt="" />
                                <div className={cartcss.name}>
                                    <span>{`${item.name}`}</span>
                                    <button onClick={() => RemoveHandler(item)}>Remove</button>
                                </div>
                                <div className={cartcss.price}>
                                    <span>{`₹${item.selling_price}`}</span>
                                    <p>
                                        <span className={cartcss.priceOriginal}>{`₹${item.price} `}</span>
                                        <span>{`  ${item.discount}% off`}</span>
                                    </p>
                                </div>
                            </div>
                        }) : <p>Cart Empty</p>
                    }
                </div>
                <div className={cartcss.propertyContainer}>
                    <Cartproperty totalPrice={totalPrice} cartPrice={cartPrice} />
                </div>
            </div>

        </div>
    )
}

export default Cart