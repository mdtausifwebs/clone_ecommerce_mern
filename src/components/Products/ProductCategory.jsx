import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import productcatecss from "../../styles/product/productCategory.module.css"
import Sidebar from "./Sidebar"
import { useEffect, useState } from "react";
import Product from "./Product";
import { useSelector } from "react-redux"
import { setFilterPrice, getProductdata, filterDiscount, setFiltersubCategory, SortByprice } from "../../redux/action/ProductAction"
const ProductCategory = () => {
  const { Products, loading } = useSelector((state) => state?.Products);
  console.log(Products)
  const dispatch = useDispatch();
  const category = useParams().category
  const [page, setpage] = useState(1)
  const [size] = useState(10)
  const pagesizeHandler = (text) => {
    if (text === "Pre") {
      setpage(page - 1)
    } else {
      setpage(page + 1)
    }
  }
  // console.log(category)
  useEffect(() => {
    dispatch(getProductdata({ category, page, size }));
  }, [category, dispatch, size, page]);

  const SortingProduct = async (price) => {
    await dispatch(setFilterPrice({ category, price, page, size }))
  }

  const discountPrice = async (discount) => {
    await dispatch(filterDiscount({ category, discount, page, size }))
  }

  const necktype = async (subcategory) => {
    await dispatch(setFiltersubCategory({ category, subcategory, page, size }))
    console.log({ size, category, subcategory })
  }

  const patterntype = (text) => {
    // let patterndata = Products.filter((item) => {
    //   return item.pattern === text
    //   // console.log(item.pattern)
    // })
    // dispatch(setProducts(patterndata))
    // console.log("patterndata", patterndata)
  }
  const sleevetype = (text) => {
    // let sleevedata = Products.filter((item) => {
    //   return item.sleeve === text
    //   // console.log(item.sleeve)
    // })
    // dispatch(setProducts(sleevedata))
    // console.log("sleevedata", sleevedata)
  }
  const SortingHandler = async (sortType) => {
    console.log(category, sortType, page, size)
    await dispatch(SortByprice({ category, sortType, page, size }))
  }

  return <div className={productcatecss.container}>
    <div className={productcatecss.box}>
      <Sidebar SortingProduct={SortingProduct} discountPrice={discountPrice} necktype={necktype} patterntype={patterntype} sleevetype={sleevetype} />
      <Product Products={Products} loading={loading} page={page} pagesizeHandler={pagesizeHandler} SortingHandler={SortingHandler} />
    </div>
  </div>;
};

export default ProductCategory;
