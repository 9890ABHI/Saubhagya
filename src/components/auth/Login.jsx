import React, { useState } from "react";

import { connect, useDispatch } from "react-redux";
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
    <div className="flex items-center justify-center h-screen">
      <Card className="w-[35%] px-5  py-10">
        <Typography variant="h4" className="mb-10" color="black">
          LOGIN
        </Typography>

        <Box className="flex flex-col gap-4 px-20">
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
        <Box className="pt-0">
          <Button variant="text" fullWidth onClick={handleChanges}>
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
    </div>
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
