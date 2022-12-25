import React from 'react'
import { Link } from 'react-router-dom'
import sidebarcss from "../../styles/product/sidebar.module.css"
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti"
import { useState } from 'react'

const Sidebar = () => {
  const [temp, setTemp] = useState(false)
  const [val, setval] = useState("")
  const sideExpandHandler = (text) => {
    setval(text)
    setTemp(temp ? false : true)
  }
  return (
    <div className={sidebarcss.container}>
      <div className={sidebarcss.box}>
        <div className={sidebarcss.category}>
          <div className={sidebarcss.barheader} onClick={() => sideExpandHandler("category")}>
            <p>Category</p>
            <p>{temp ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
            </p>
          </div>
          {
            val === "category" && temp ? <div className={sidebarcss.barmenu}>
              <Link to="/Now Trending">Now Trending</Link>
              <Link to="/">Sidebar</Link>
              <Link to="/Top Wear">Top Wear</Link>
              <Link to="/Bottom Wear">Bottom Wear</Link>
              <Link to="/footwear">footwear</Link>
              <Link to="/Drapes">Drapes</Link>
              <Link to="/">Sidebar</Link>
              <Link to="/">Sidebar</Link>
              <Link to="/">Sidebar</Link>
            </div> : null
          }
        </div>
        <div className={sidebarcss.price}>
          <div className={sidebarcss.barheader} onClick={() => sideExpandHandler("price")}>
            <p>price</p>
            <p>{temp ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
            </p>
          </div>
          {
            val === "price" && temp ? <div className={sidebarcss.barmenu}>
              <Link to="/">Sidebar</Link>
              <Link to="/">Sidebar</Link>
              <Link to="/">Sidebar</Link>
              <Link to="/">Sidebar</Link>
              <Link to="/">Sidebar</Link>
              <Link to="/">Sidebar</Link>
              <Link to="/">Sidebar</Link>
              <Link to="/">Sidebar</Link>
              <Link to="/">Sidebar</Link>
            </div> : null
          }
        </div>
        <div className={sidebarcss.metrial}>
          <div className={sidebarcss.barheader} onClick={() => sideExpandHandler("metrial")}>
            <p>Material</p>
            <p>{temp ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
            </p>
          </div>
          {
            val === "metrial" && temp ? <div className={sidebarcss.barmenu}>
              <Link to="/">Sidebar</Link>
              <Link to="/">Sidebar</Link>
              <Link to="/">Sidebar</Link>
              <Link to="/">Sidebar</Link>
              <Link to="/">Sidebar</Link>
              <Link to="/">Sidebar</Link>
              <Link to="/">Sidebar</Link>
              <Link to="/">Sidebar</Link>
              <Link to="/">Sidebar</Link>
            </div> : null
          }
        </div>
        <div className={sidebarcss.metrial}>
          <div className={sidebarcss.barheader} onClick={() => sideExpandHandler("metrial")}>
            <p>Neck Type</p>
            <p>{temp ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
            </p>
          </div>
          {
            val === "metrial" && temp ? <div className={sidebarcss.barmenu}>
              <Link to="/">Sidebar</Link>
              <Link to="/">Sidebar</Link>
              <Link to="/">Sidebar</Link>
              <Link to="/">Sidebar</Link>
              <Link to="/">Sidebar</Link>
              <Link to="/">Sidebar</Link>
              <Link to="/">Sidebar</Link>
              <Link to="/">Sidebar</Link>
              <Link to="/">Sidebar</Link>
            </div> : null
          }
        </div>
        <div className={sidebarcss.metrial}>
          <div className={sidebarcss.barheader} onClick={() => sideExpandHandler("metrial")}>
            <p>Sleeve</p>
            <p>{temp ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
            </p>
          </div>
          {
            val === "metrial" && temp ? <div className={sidebarcss.barmenu}>
              <Link to="/">Sidebar</Link>
              <Link to="/">Sidebar</Link>
              <Link to="/">Sidebar</Link>
              <Link to="/">Sidebar</Link>
              <Link to="/">Sidebar</Link>
              <Link to="/">Sidebar</Link>
              <Link to="/">Sidebar</Link>
              <Link to="/">Sidebar</Link>
              <Link to="/">Sidebar</Link>
            </div> : null
          }
        </div>
        <div className={sidebarcss.metrial}>
          <div className={sidebarcss.barheader} onClick={() => sideExpandHandler("metrial")}>
            <p>pattern</p>
            <p>{temp ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
            </p>
          </div>
          {
            val === "metrial" && temp ? <div className={sidebarcss.barmenu}>
              <Link to="/">Sidebar</Link>
              <Link to="/">Sidebar</Link>
              <Link to="/">Sidebar</Link>
              <Link to="/">Sidebar</Link>
              <Link to="/">Sidebar</Link>
              <Link to="/">Sidebar</Link>
              <Link to="/">Sidebar</Link>
              <Link to="/">Sidebar</Link>
              <Link to="/">Sidebar</Link>
            </div> : null
          }
        </div>
      </div>
    </div>
  )
}

export default Sidebar