import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { getproductdetails, addToCart } from '../../redux/action/ProductAction'
import detailscss from "../../styles/product/details.module.css"
const Details = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const id = useParams().id
    const [index, setindex] = useState(0)
    const [temp, setemp] = useState(false)
    const productdata = useSelector((state) => state?.Products?.Product);
    // console.log(productdata,id)
    useEffect(() => {
        const getdata = async () => {
            await dispatch(getproductdetails(id))
        }
        getdata()
    }, [id, dispatch])


    useEffect(() => {
        if (temp) {
            setTimeout(() => {
                index < productdata?.gallery.length - 1 ? setindex(index + 1) : setindex(0)
            }, 1000);
        }
    }, [index, temp, productdata])
    const itemSize = (size) => {
        console.log(size)
    }
    const AddtoCart = async (id) => {
        let totalPrice = JSON.parse(localStorage.getItem("totalPrice"))
        totalPrice += id.price
        localStorage.setItem("totalPrice", JSON.stringify(totalPrice))
        let cartPrice = JSON.parse(localStorage.getItem("cartPrice"))
        cartPrice += id.selling_price
        localStorage.setItem("cartPrice", JSON.stringify(cartPrice))
        await dispatch(addToCart(id))
        // console.log("AddtoCart")
    }
    const BuyNow = async (id) => {
        let totalPrice = JSON.parse(localStorage.getItem("totalPrice"))
        totalPrice += id.price
        localStorage.setItem("totalPrice", JSON.stringify(totalPrice))
        let cartPrice = JSON.parse(localStorage.getItem("cartPrice"))
        cartPrice += id.selling_price
        localStorage.setItem("cartPrice", JSON.stringify(cartPrice))
        await dispatch(addToCart(id))
        console.log("BuyNow")
        navigate("/category/cart")
    }
    return (
        <div className={detailscss.container}>
            <div className={detailscss.smallImgSec}>
                {
                    productdata?.gallery?.map((item, i) => {
                        return (
                            <img className={index === i ? detailscss.active : null} key={i} src={item.image} alt={item.image} />
                        )
                    })
                }
            </div>
            <div className={detailscss.bigImgSec}>
                <img src={productdata?.gallery[index].image} alt="" onMouseOut={() => setemp(false)} onMouseOver={() => setemp(true)} />
            </div>
            <div className={detailscss.detailspro}>
                <h3>Name:- {productdata?.name}</h3>
                <h3>Neck Type:- {productdata?.neck}</h3>
                <h3>Category:-  {productdata?.category}</h3>
                <h3>Description:- {productdata?.description}</h3>
                <h3>Price:- {productdata?.price}</h3>
                <h3>Selling Price:- {productdata?.selling_price}</h3>
                <h3>Discount:-  {productdata?.discount}%</h3>
                <div className={detailscss.SizeSec}> Size:- 
                    {
                        productdata?.size?.split("]").join("").split("[").join("").split(",").map((item, i) => {
                            return <button key={i} onClick={() => itemSize(item)}>{item}</button>
                        })
                    }
                </div>
                <div>
                    <button onClick={() => AddtoCart(productdata)}>Add To cart</button><button onClick={() => BuyNow(productdata)}>Buy now</button>
                </div>
            </div>
        </div>
    )
}

export default Details