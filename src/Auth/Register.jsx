import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom"
import { Registeruser } from "../redux/action/UserAction";
const Register = () => {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  // console.log("state", state);
  const submit = async () => {
    const user = {
      name,
      email,
      password,
    };
    await dispatch(Registeruser(JSON.stringify(user)));
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
            placeholder="type your name"
            onChange={(e) => setname(e.target.value)}
          />
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
          <button onClick={submit}>Register</button>
          <button><Link to="/Login">Login</Link></button>
        </div>
      </div>
    </div>
  );
};

export default Register;
