import { useState } from "react";
import { useDispatch } from "react-redux";
import { Registeruser, GoogleRegister } from "../redux/action/UserAction";
import { GoogleLogin } from "@react-oauth/google"
import jwtDecode from "jwt-decode"
import { Box, Card, CardActions, InputBase, CardContent, Button, Typography } from "@mui/material"
const Register = () => {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const dispatch = useDispatch();
  // const state = useSelector((state) => state);
  // console.log("state", state);
  const submit = async () => {
    const user = {
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
    <Card sx={{ maxWidth: 345, margin: "50px auto" }}>
      <CardContent sx={{ width: "50%", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", textAlign: "center" }}>
        <Typography variant="h4">Login</Typography>
        <Box
          sx={{
            width: 500,
            maxWidth: '100%',
          }}
        >
          <InputBase fullWidth placeholder="Hello world" onChange={(e) => setemail(e.target.value)} />
          <InputBase fullWidth placeholder="Placeholder" onChange={(e) => setpassword(e.target.value)} />
        </Box>
        <CardActions>
          <Button onClick={submit} size="small">Register</Button>
        </CardActions>
        <CardActions>
          <GoogleLogin onSuccess={LogSuccess} onError={LogError} />
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default Register;
