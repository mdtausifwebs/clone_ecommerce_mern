import axios from "axios";

export const getProductdata = (body) => async (dispatch) => {
  try {
    // console.log("action", body)
    dispatch({
      type: "getproductRequest",
    });
    // let { data } = await axios.get(
    //   `http://localhost:4000/api/v1/products?category=${body.category}&size=${body.size}&page=${body.page}`
    // );
    let { data } = await axios.get(
      `https://bright-cap-deer.cyclic.app/api/v1/products?category=${body.category}&size=${body.size}&page=${body.page}`
    );
    // console.log("data.product action",data)
    dispatch({
      type: "getproductSuccess",
      payload: data.products,
    });
  } catch (err) {
    dispatch({
      type: "getproductFail",
      payload: `err ${err}`,
    });
  }
};
export const getproductdetails = (id) => async (dispatch) => {
  try {
    // console.log(id)
    dispatch({
      type: "getproductRequestdetails",
    });
    let { data } = await axios.get(
      `https://bright-cap-deer.cyclic.app/api/v1/product/${id}`
    );
    dispatch({
      type: "getproductSuccessdetails",
      payload: data.product,
    });
  } catch (err) {
    dispatch({
      type: "getproductFaildetails",
      payload: `err ${err}`,
    });
  }
};
export const setFilterPrice = (body) => async (dispatch) => {
  // let { data } = await axios.get(
  //   `http://localhost:4000/api/v1/products/filterPrice?category=${body.category}&price=${body.price}&size=${body.size}&page=${body.page}`
  // );
  let { data } = await axios.get(
    `https://bright-cap-deer.cyclic.app/api/v1/products/filterPrice?category=${body.category}&price=${body.price}&size=${body.size}&page=${body.page}`
  );
  dispatch({
    type: "setFilterProducts",
    payload: data.products
  });
}
export const filterDiscount = (body) => async (dispatch) => {
  // let { data } = await axios.get(
  //   `http://localhost:4000/api/v1/products/filterdiscount?category=${body.category}&discount=${body.discount}&size=${body.size}&page=${body.page}`
  // );
  // console.log("action", data)
  let { data } = await axios.get(
    `https://bright-cap-deer.cyclic.app/api/v1/products/filterdiscount?category=${body.category}&discount=${body.discount}&size=${body.size}&page=${body.page}`
  );
  dispatch({
    type: "setFilterProducts",
    payload: data.products
  });
}
export const setFiltersubCategory = (body) => async (dispatch) => {
  // let { data } = await axios.get(
  //   `http://localhost:4000/api/v1/products/filtersubcategory?category=${body.category}&discount=${body.subcategory}&size=${body.size}&page=${body.page}`
  // );
  let { data } = await axios.get(
    `https://bright-cap-deer.cyclic.app/api/v1/products/filtersubcategory?category=${body.category}&discount=${body.subcategory}&size=${body.size}&page=${body.page}`
  );
  console.log("action", data)
  dispatch({
    type: "setFilterProducts",
    payload: data.products
  });
}
export const SortByprice = (body) => async (dispatch) => {
  // let { data } = await axios.get(
  //   `http://localhost:4000/api/v1/products/sortbyprice?category=${body.category}&price=${body.sortType}&size=${body.size}&page=${body.page}`
  // );
  let { data } = await axios.get(
    `https://bright-cap-deer.cyclic.app/api/v1/products/sortbyprice?category=${body.category}&price=${body.sortType}&size=${body.size}&page=${body.page}`
  );
  console.log("action", data)
  dispatch({
    type: "setFilterProducts",
    payload: data.products
  });
}
export const addToCart = (cartProduct) => async (dispatch) => {
  try {
    dispatch({
      type: "addCartrequest",
    });
    // let { data } = await axios.post(
    //   `http://localhost:4000/api/v1/product/addcart/${id}`
    // );
    // console.log("data",data)
    const localdata = JSON.parse(localStorage.getItem("cart")) || []
    if (localdata === null) {
      localdata.push(cartProduct)
    } else {
      let temp = false
      for (let i = 0; i < localdata.length; i++) {
        if (localdata[i]._id === cartProduct._id) {
          temp = true
        }
      }
      if (!temp) {
        localdata.push(cartProduct)
        alert(`item add succesfully in cart`)
      } else {
        alert(`item already in cart`)
      }
    }
    localStorage.setItem("cart", JSON.stringify(localdata))
    // console.log("localdata",localdata)
    dispatch({
      type: "addCartSuccess",
      payload: localdata,
    });
  } catch (err) {
    dispatch({
      type: "addCartFaild",
      payload: `err ${err}`,
    });
  }
}
export const SearchAction = (search) => async (dispatch) => {
  try {
    // console.log(search)
    dispatch({
      type: "SearchProductRequest",
    });
    let { data } = await axios.post(
      `http://localhost:4000/api/v1/products/search`,
      search,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(data.product)
    dispatch({
      type: "SearchProductSuccess",
      payload: data.product,
    });
  } catch (err) {
    dispatch({
      type: "SearchProductFail",
      payload: `err ${err}`,
    });
  }
}