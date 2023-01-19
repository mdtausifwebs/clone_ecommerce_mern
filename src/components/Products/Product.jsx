import React from "react";
import { useState } from "react";
import { useEffect } from "react";
// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import productcss from "../../styles/product/product.module.css"
const Product = ({FilterProducts,loading}) => {
  const [data, setdata] = useState([])
  const [currentpage, setCurrentpage] = useState(1)
  const [perPageSize] = useState(10)
  const indexLast = currentpage * perPageSize
  const indexFirst = indexLast - perPageSize
  useEffect(() => {
    if (!loading) {
      setdata(FilterProducts
        ?.slice(indexFirst, indexLast))
    }
  }, [currentpage, FilterProducts
    , indexFirst, indexLast, loading])
  const pagesize = (text) => {
    if (text === "Pre") {
      setCurrentpage(currentpage - 1)
    } else {
      setCurrentpage(currentpage + 1)
    }
  }
  const SortingHandler = (sortingType) => {
    if (sortingType === "lowtohigh") {
      const SortArr = [...FilterProducts
      ].sort((a, b) => {
        return a.selling_price - b.selling_price
      })
      setdata(SortArr)
      // console.log(SortArr)
    } else if (sortingType === "hightolow") {
      const SortArr = [...FilterProducts
      ].sort((a, b) => {
        return b.selling_price - a.selling_price
      })
      setdata(SortArr)
      // console.log(SortArr)
    }
  }
  return <div className={productcss.container}>
    <div className={productcss.itemSize}>
      <div className={productcss.totalItem}>{`Total Items ${FilterProducts
        ?.length}`}</div>
      <div className={productcss.Sorting}>
        <select name="sorting" id="sorting" onChange={(e) => SortingHandler(e.target.value)}>
          <option value="">Chose</option>
          <option value="lowtohigh"> Low to High </option>
          <option value="hightolow"> High to Low</option>
        </select>
      </div>
    </div>
    <div className={productcss.childContainer}>
      {
        data?.map((item, i) => {
          return (
            <Link to={`/product/${item._id}`} key={i} className={productcss.productBox}>
              <img src={item.image} alt="" />
              <div className={productcss.name}>
                <span>{`${item.name}`}</span>
              </div>
              <div className={productcss.price}>
                <span>{`₹${item.selling_price}`}</span>
                <p>
                  <span className={productcss.priceOriginal}>{`₹${item.price} `}</span>
                  <span>{`  ${item.discount}% off`}</span>
                </p>
              </div>
            </Link>
          )
        })
      }
    </div>
    <div className={productcss.pageNo}>
      <button onClick={() => pagesize("Pre")}>Pre</button><button>{`${currentpage}`}</button><button onClick={() => pagesize("next")}>Next</button>
    </div>
  </div>;
};

export default Product;
