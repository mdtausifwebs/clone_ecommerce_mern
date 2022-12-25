import axios from "axios";

export const getProductdata = (body) => async (dispatch) => {
  try {
    // console.log(body)
    dispatch({
      type: "getproductRequest",
    });
    let { data } = await axios.post(
      `http://localhost:4000/api/v1/product/category`,
      body,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    // console.log(data.product.length)
    dispatch({
      type: "getproductSuccess",
      payload: data.product,
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
      `http://localhost:4000/api/v1/product/${id}`
    );
    // console.log(data)
    dispatch({
      type: "getproductSuccessdetails",
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: "getproductFaildetails",
      payload: `err ${err}`,
    });
  }
};
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
    // console.log(data.product)
    // dispatch({
    //   type: "SearchProductSuccess",
    //   payload: data.product,
    // });
  } catch (err) {
    dispatch({
      type: "SearchProductFail",
      payload: `err ${err}`,
    });
  }
}