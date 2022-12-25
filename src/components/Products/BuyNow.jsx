import React from 'react'
import { useState } from 'react'
import buynowcss from "../../styles/product/buynow.module.css"
import Cartproperty from './Cartproperty'
const BuyNow = () => {
    let cartPrice = JSON.parse(localStorage.getItem("cartPrice"))
    let totalPrice = JSON.parse(localStorage.getItem("totalPrice"))
    const [name, setname] = useState()
    const [mobile, setmobile] = useState()
    const [email, setemail] = useState()
    const [address, setaddress] = useState()
    const [city, setcity] = useState()
    const [state, setstate] = useState()
    const [pin, setpin] = useState()
    const [temp, settemp] = useState(false)
    const [selectedadd, setselectedadd] = useState()
    console.log(selectedadd,temp)
    const fulladdress = JSON.parse(localStorage.getItem("address")) || []
    const submit = () => {
        if (!name || !mobile || !email || !address || !city || !state || !pin) {

        } else {
            let addObj = {
                name,
                mobile,
                email,
                address,
                city,
                state,
                pin
            }
            fulladdress.push(addObj)
            localStorage.setItem("address", JSON.stringify(fulladdress))
        }
        settemp(true)
    }
    return (
        <div className={buynowcss.container}>
            <div className={buynowcss.childcontainer}>
                <div className={buynowcss.addressSec}>
                    <input type="text"  required defaultValue="" value={name} placeholder='Enter Your Name ' onChange={(e) => setname(e.target.value)} />
                    <input type="text" required defaultValue="" value={mobile} placeholder='Enter Mobiel Number' onChange={(e) => setmobile(e.target.value)} />
                    <input type="text" required defaultValue="" value={email} placeholder='Enter Your Email ' onChange={(e) => setemail(e.target.value)} />
                    <input type="text" required defaultValue="" value={address} placeholder='Enter Your Address ' onChange={(e) => setaddress(e.target.value)} />
                    <input type="text" required defaultValue="" value={city} placeholder='Enter your City ' onChange={(e) => setcity(e.target.value)} />
                    <input type="text" required defaultValue="" value={state} placeholder='Enter Your State ' onChange={(e) => setstate(e.target.value)} />
                    <input type="text" required defaultValue="" value={pin} placeholder='Enter Your Pin Code ' onChange={(e) => setpin(e.target.value)} />
                    <input type="submit" onClick={submit} />
                </div>
                <div className={buynowcss.productDetails}>
                    <Cartproperty totalPrice={totalPrice} cartPrice={cartPrice} />
                </div>
            </div>
            <div className={buynowcss.adddisplaySec}>
                {fulladdress.map((item, i) => {
                    return <div key={i} className={buynowcss.addBox}>
                        <input type="radio" name='address' onChange={() => setselectedadd(item)} />
                        <p>{item.name}</p>
                        <p>{item.mobile}</p>
                        <p>{item.email}</p>
                        <p>{item.address}</p>
                        <p>{item.city}</p>
                        <p>{item.state}</p>
                        <p>{item.pin}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default BuyNow