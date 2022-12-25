import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProductdata } from "../../redux/action/ProductAction";
import productcatecss from "../../styles/product/productCategory.module.css"
// import Sidebar from "./Sidebar"
import { useEffect } from "react";
import Product from "./Product";
const ProductCategory = () => {
  const dispatch = useDispatch();
  const category = useParams().category;
  useEffect(() => {
    let body = {
      category,
    };
    dispatch(getProductdata(JSON.stringify(body)));
  }, [category, dispatch]);
  return <div className={productcatecss.container}>
    <div className={productcatecss.box}>
      {/* <Sidebar /> */}
      <Product />
    </div>
  </div>;
};

export default ProductCategory;
