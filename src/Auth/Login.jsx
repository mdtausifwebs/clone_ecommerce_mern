import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {Loginruser} from "../redux/action/UserAction"
const Login = () => {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const dispatch=useDispatch()
  // const state=useSelector((state)=>state)
  // console.log('state', state);
  const submit = async () => {
    const user = {
      email,
      password,
    };
    await dispatch(Loginruser(JSON.stringify(user)))
    // console.log(user);
  };

  return (
    <div>
      <div>
        <div>
          <h1>Login</h1>
        </div>
        <div>
          <input
            type="text"
            placeholder="type your email"
            onChange={(e) => setemail(e.target.value)}
          />
          <input
            type="password"
            placeholder="type your password"
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
        <div>
          <button onClick={submit}>Login</button>
          <button>
            <Link to="/register">Register</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
