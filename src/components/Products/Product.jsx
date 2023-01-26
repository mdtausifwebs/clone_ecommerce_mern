import React from "react";
import { Link } from "react-router-dom";
import productcss from "../../styles/product/product.module.css"
import Loader from "../Loader";
const Product = ({ Products, loading, SortingHandler, pagesizeHandler, page }) => {
  return <div className={productcss.container}>
    {
      loading ?
        <Loader />
        : <>
          <div className={productcss.itemSize}>
            <div className={productcss.totalItem}>{`Total Items ${Products
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
              Products?.map((item, i) => {
                // console.log(item)
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
            <button onClick={() => pagesizeHandler("Pre")}>Pre</button><button>{`${page}`}</button><button onClick={() => pagesizeHandler("next")}>Next</button>
          </div>
        </>






    }

  </div>
};

export default Product;
