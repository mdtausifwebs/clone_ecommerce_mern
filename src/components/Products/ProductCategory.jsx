import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import productcatecss from "../../styles/product/productCategory.module.css"
import Sidebar from "./Sidebar"
import { useEffect, useState } from "react";
import Product from "./Product";
import { useSelector } from "react-redux"
import { setFilterPrice, getProductdata, filterDiscount, setFiltersubCategory } from "../../redux/action/ProductAction"
const ProductCategory = () => {
  const { FilterProducts, loading } = useSelector((state) => state?.Products);
  // console.log(Products,FilterProducts)
  const dispatch = useDispatch();
  const category = useParams().category
  const [currentpage, setCurrentpage] = useState(1)
  const [perPageSize] = useState(10)
  const pagesize = (text) => {
    if (text === "Pre") {
      setCurrentpage(currentpage - 1)
    } else {
      setCurrentpage(currentpage + 1)
    }
  }
  // console.log(category)
  useEffect(() => {
    dispatch(getProductdata({ page: currentpage, category, size: perPageSize }));
  }, [category, dispatch, currentpage, perPageSize]);
  const SortingProduct = (price) => {
    dispatch(setFilterPrice({ page: currentpage, price, category, size: perPageSize }))
  }
  const discountPrice = async (discount) => {
    await dispatch(filterDiscount({ page: currentpage, discount, category, size: perPageSize }))
  }
  const necktype = async (subcategory) => {
    await dispatch(setFiltersubCategory({ page: currentpage, subcategory, category, size: perPageSize }))
  }
  const patterntype = (text) => {
    // let patterndata = Products.filter((item) => {
    //   return item.pattern === text
    //   // console.log(item.pattern)
    // })
    // dispatch(setFilterProducts(patterndata))
    // console.log("patterndata", patterndata)
  }
  const sleevetype = (text) => {
    // let sleevedata = Products.filter((item) => {
    //   return item.sleeve === text
    //   // console.log(item.sleeve)
    // })
    // dispatch(setFilterProducts(sleevedata))
    // console.log("sleevedata", sleevedata)
  }
  const SortingHandler = (sortingType) => {
    // if (sortingType === "lowtohigh") {
    //   const SortArr = [...Products
    //   ].sort((a, b) => {
    //     return a.selling_price - b.selling_price
    //   })
    //   dispatch(setFilterProducts(SortArr))
    //   console.log("SortArr", SortArr)
    // } else if (sortingType === "hightolow") {
    //   const SortArr = [...Products
    //   ].sort((a, b) => {
    //     return b.selling_price - a.selling_price
    //   })
    //   dispatch(setFilterProducts(SortArr))
    //   console.log("SortArr", SortArr)
    // }
  }

  return <div className={productcatecss.container}>
    <div className={productcatecss.box}>
      <Sidebar SortingProduct={SortingProduct} discountPrice={discountPrice} necktype={necktype} patterntype={patterntype} sleevetype={sleevetype} />
      <Product FilterProducts={FilterProducts} loading={loading} pagesize={pagesize} currentpage={currentpage} setCurrentpage={setCurrentpage} SortingHandler={SortingHandler} />
    </div>
  </div>;
};

export default ProductCategory;
