import React, { useState } from "react";

import { useDispatch } from "react-redux";
// import { signup } from "../../redux/reducers/authReducer";
import {
  Alert,
  Box,
  Button,
  Card,
  FormLabel,
  Input,
  TextField,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const intitalState = {
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [values, setValues] = useState(intitalState);
  const navigation = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const dispatch = useDispatch();

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (values.password === values.confirmPassword) {
      // dispatch(signup(values));
      navigation("/login");
    } else {
      setPasswordMatch(false);
      window.alert("password dosent match");
      setPassword("");
      setConfirmPassword("");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-[35%] px-5  py-10">
        <Typography variant="h4" className="mb-10" color="black">
          Create an Account
        </Typography>

        <form onSubmit={handleSubmit}>
          <Box className="flex flex-col gap-4 px-20 text-left">
            <TextField
              label="Name"
              size=""
              type="name"
              name="name"
              value={values.name}
              onChange={onChange}
              variant="standard"
            />

            <TextField
              label="Phone Number"
              name="phone"
              //   type="number"
              size="lg"
              value={values.phone}
              onChange={onChange}
              variant="standard"
            />

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
              value={password}
              onChange={handlePasswordChange}
            />
            <TextField
              label="Confirm Password"
              variant="standard"
              size="lg"
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />

            {passwordMatch ? null : (
              <p style={{ color: "red" }}>Passwords do not match.</p>
            )}
          </Box>
          <Box className="pt-5">
            <Button
              variant="text"
              type="submit"
              // onClick={() => dispatch(signup(values))}
            >
              Sign Up
            </Button>

            <Typography variant="small" className="mt-6 flex justify-center">
              Have an Account ?{" "}
              <Link to="/login" className="ml-2 text-blue-600">
                Log in
              </Link>
            </Typography>
          </Box>
        </form>
      </Card>
    </div>
  );
};

export default SignUp;
