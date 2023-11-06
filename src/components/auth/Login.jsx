import React, { useState } from "react";

import { connect, useDispatch, useSelector } from "react-redux";
// import { login } from "../../redux/reducers/authReducer";
import {
  Box,
  Button,
  Card,
  CardHeader,
  FormLabel,
  Input,
  TextField,
  Typography,
} from "@mui/material";
import { Label } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../Store/actions";

const Login = () => {
  const user = useSelector((state) => state.auth.user);

  const intitalState = {
    email: "",
    password: "",
  };
  const [values, setValues] = useState(intitalState);
  const navigation = useNavigate();
  // Use the user and error from Redux state
  // const credentials = useState(intitalState);

  // const handleLogin = (credentials) => {
  //   login(credentials);
  // };

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const dispatch = useDispatch();
  const handleChanges = () => {
    // dispatch(login(values));
    // dispatch(LoginAction(res.token))
    dispatch(login(values));
    navigation("/");
  };

  return (
    <>
    
    {
      !user ? <><div className="flex py-24 justify-center h-full bg-[#f2f2f2]">
      <Card className="md:w-[35%]  px-5  py-10 flex flex-col justify-center items-center">
        <Typography variant="h4" className="mb-10" color="black">
          LOGIN
        </Typography>

        <Box className="flex flex-col gap-4 px-20 w-full">
          <TextField
            label="Email"
            size=""
            type="email"
            name="email"
            variant="standard"
            value={values.email}
            onChange={onChange}
          />
          <TextField
            label="Password"
            variant="standard"
            size="lg"
            type="password"
            name="password"
            value={values.password}
            onChange={onChange}
          />
        </Box>
        <Box className=" w-full flex flex-col justify-center items-center pt-10">
          <Button variant="contained" 
          // className="px-16 py-2 "
          sx={{
            px:3,
            // background: "linear-gradient(to right,  #c90f7290, #c90f72)",
            background: "#c90f72",
            color: "#fff",
            transition:'0.5s',
            ":hover": {
              // background: "linear-gradient(to left,  #c90f7290, #c90f72)",
              background: "#c90f72",
              color: "pink",
            },
          }}
               onClick={handleChanges}
               >
            Sign In
          </Button>

          <Typography variant="small" className="mt-6 flex justify-center">
            Don't have an account?
            <Link to="/signup" className="ml-2 text-blue-600">
              Sign up
            </Link>
          </Typography>
        </Box>
      </Card>
    </div></> : navigation("/")
    }
    
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    error: state.auth.error,
  };
};

const mapDispatchToProps = {
  login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
