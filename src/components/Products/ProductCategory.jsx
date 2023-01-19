import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProductdata } from "../../redux/action/ProductAction";
import productcatecss from "../../styles/product/productCategory.module.css"
import Sidebar from "./Sidebar"
import { useEffect } from "react";
import Product from "./Product";
import { useSelector } from "react-redux"
import { setFilterProducts } from "../../redux/action/ProductAction"
const ProductCategory = () => {
  const { Products, FilterProducts, loading } = useSelector((state) => state?.Products);
  const dispatch = useDispatch();
  const category = useParams().category;
  useEffect(() => {
    let body = {
      category,
    };
    dispatch(getProductdata(JSON.stringify(body)));
  }, [category, dispatch]);

  const SortingProduct = (text) => {
    let filterdata = Products.filter((item) => {
      return item.selling_price >= (text - 1000) && item.selling_price <= text
    }).sort((a, b) => {
      return a.selling_price - b.selling_price
    })
    dispatch(setFilterProducts(filterdata))
    console.log("filterdata", filterdata)
  }
  const discountPrice = (text) => {
    let filterdata = Products.filter((item) => {
      let discount = item.price - item.selling_price
      return item.discount <= discount && item.discount <= text
    }).sort((a, b) => {
      return a.selling_price - b.selling_price
    })
    dispatch(setFilterProducts(filterdata))
    console.log("filterdata", filterdata)
  }
  const necktype = (text) => {
    let typeneckdata = Products.filter((item) => {
      return item.neck === text
      // console.log(item.neck)
    })
    dispatch(setFilterProducts(typeneckdata))
    console.log("typeneckdata", typeneckdata)
  }
  const patterntype = (text) => {
    let patterndata = Products.filter((item) => {
      return item.pattern === text
      // console.log(item.pattern)
    })
    dispatch(setFilterProducts(patterndata))
    console.log("patterndata", patterndata)
  }
  const sleevetype = (text) => {
    let sleevedata = Products.filter((item) => {
      return item.sleeve === text
      // console.log(item.sleeve)
    })
    dispatch(setFilterProducts(sleevedata))
    console.log("sleevedata", sleevedata)
  }

  return <div className={productcatecss.container}>
    <div className={productcatecss.box}>
      <Sidebar SortingProduct={SortingProduct} discountPrice={discountPrice} necktype={necktype} patterntype={patterntype} sleevetype={sleevetype} />
      <Product FilterProducts={FilterProducts} loading={loading} />
    </div>
  </div>;
};

export default ProductCategory;
