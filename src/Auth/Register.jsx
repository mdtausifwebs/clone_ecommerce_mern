import { useState } from "react";
import { useDispatch } from "react-redux";
// import { Link } from "react-router-dom"
import { Registeruser,GoogleRegister } from "../redux/action/UserAction";
import { GoogleLogin } from "@react-oauth/google"
import jwtDecode from "jwt-decode"
const Register = () => {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const dispatch = useDispatch();
  // const state = useSelector((state) => state);
  // console.log("state", state);
  const submit = async () => {
    const user = {
      name,
      email,
      password,
    };
    await dispatch(Registeruser(JSON.stringify(user)));
  };
  const LogSuccess = async (inputs) => {
    let googleLogin = jwtDecode(inputs.credential)
    await dispatch(GoogleRegister(googleLogin));
  }
  const LogError = (inputs) => {
    console.log(inputs)

  }

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
        </div>
        <div>
          <GoogleLogin onSuccess={LogSuccess} onError={LogError} />
        </div>
      </div>
    </div>
  );
};

export default Register;
