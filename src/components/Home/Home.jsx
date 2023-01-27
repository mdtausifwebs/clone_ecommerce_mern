import React from "react";
import { Link } from "react-router-dom";
import homecss from "../../styles/home/home.module.css"
import Slider from "./Slider";
import data from "../../data/data.json";
const Home = () => {
  return (
    <div className={homecss.conatiner}>
      <div className={homecss.childContainer}>
        <div className={homecss.slideSec}>
          <Slider slider={data.slider} />
        </div>
        <div className={homecss.categoryImeParent}>
          <div className={homecss.categoryIme}>
            {data?.categoryurl?.map((item, i) => {
              return (
                <Link key={i} to={`/category/${item.url}`} className={homecss.box}>
                  <img src={item.imageurl} alt="" />
                  <p>{item.text}</p>
                </Link>
              );
            })}
          </div>
        </div>
        <div className={homecss.bigimg}>
          <Link  to={`/category/`}>
            <img src={data?.categoryurlbig[2].imageurl} alt="" />
            <p>{data?.categoryurlbig[2].text}</p>
          </Link>
        </div>
        <div className={homecss.categoryImeParent}>
          <div className={homecss.categoryimg}>
            {data?.categoryimg?.map((item, i) => {
              return (
                <Link key={i} to={`/category/${item.url}`} className={homecss.categoruimagebox}>
                  <img src={item.imageurl} alt="" />
                  <p>{item.text}</p>
                </Link>
              );
            })}
          </div>
        </div>
        <div className={homecss.bigimg}>
          <Link  to={`/category/`}>
            <img src={data?.categoryurlbig[1].imageurl} alt="" />
            <p>{data?.categoryurlbig[1].text}</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
