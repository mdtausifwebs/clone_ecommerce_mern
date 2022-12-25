import axios from "axios";

export const Registeruser = (user) => async (dispatch) => {
//   console.log("user", user);
  try {
    dispatch({
      type: "registerRequest",
    });
    let { data } = await axios.post(
      "http://localhost:4000/api/v1/register",
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
      let { data } = await axios.post(
        "http://localhost:4000/api/v1/login",
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    console.log(data)
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
