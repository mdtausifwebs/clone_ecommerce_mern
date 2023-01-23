import axios from "axios";

export const Registeruser = (user) => async (dispatch) => {
  //   console.log("user", user);
  try {
    dispatch({
      type: "registerRequest",
    });
    // let { data } = await axios.post(
    //   "http://localhost:4000/api/v1/registeruser",
    //   user,
    //   {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );
    let { data } = await axios.post(
      "https://bright-cap-deer.cyclic.app/api/v1/registeruser",
      user,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(data)
    dispatch({
      type: "registerSuccess",
      payload: data.user
    });
  } catch (err) {
    dispatch({
      type: "registerFail",
      payload: err,
    });
  }
};
export const Loginruser = (user) => async (dispatch) => {
  try {
    dispatch({
      type: "LoginRequest",
    });
    let { data } = await axios.get(
      "http://localhost:4000/api/v1/users",
    );
    // let { data } = await axios.get(
    //   "https://bright-cap-deer.cyclic.app/api/v1/users",
    // );
    console.log("data",data)
    dispatch({
      type: "LoginSuccess",
      payload: data.user,
    });
  } catch (err) {
    dispatch({
      type: "LoginFail",
      payload: err,
    });
  }
};
export const GoogleRegister = (googledata) => async (dispatch) => {
  // console.log("googledata", googledata);
  try {
    dispatch({
      type: "registerRequest",
    });
    // let { data } = await axios.post(
    //   "http://localhost:4000/api/v1/googleregister",
    //   googledata,
    //   {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );
    let { data } = await axios.post(
      `https://bright-cap-deer.cyclic.app/api/v1/googleregister`, googledata, { headers: { "Content-Type": "application/json" } }
    );
    console.log(data)
    dispatch({
      type: "registerSuccess",
      payload: data.user
    });
  } catch (err) {
    dispatch({
      type: "registerFail",
      payload: err,
    });
  }
};
export const GoogleLogin = (googledata) => async (dispatch) => {
  // console.log("googledata", googledata);
  try {
    dispatch({
      type: "registerRequest",
    });
    let { data } = await axios.post(
      "http://localhost:4000/api/v1/googlelogin",
      googledata,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(data)
    dispatch({
      type: "registerSuccess",
      payload: data.user
    });
  } catch (err) {
    dispatch({
      type: "registerFail",
      payload: err,
    });
  }
};

