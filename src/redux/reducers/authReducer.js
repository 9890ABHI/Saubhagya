import { createSlice } from "@reduxjs/toolkit";

export const authReducer = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(sessionStorage.getItem("authUser")) || {
      name: "",
      phone: "",
      email: "",
      password: "",
      authUser: false,
    },
  },
  reducers: {
    signup(state, action) {
      const userInfo = action.payload;

      const nameValidation = /^[A-Za-z]{4,30}$/i.test(userInfo.name);

      const emailValidation =
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i.test(
          userInfo.email
        );

      const passwordValidation =
        /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,10}$/i.test(
          userInfo.password
        );

      const phoneValidation = /^\d{10}$/.test(userInfo.phone);

      state.user = userInfo;

      if (
        !nameValidation ||
        !emailValidation ||
        !passwordValidation ||
        !phoneValidation
      ) {
        state.user.authUser = false;
      } else {
        state.user.authUser = true;
        const saveState = JSON.stringify(userInfo);
        sessionStorage.setItem("authUser", saveState);
      }
    },
    login(state, action) {
      const userId = action.payload;
      const userValidation =
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i.test(userId.email);
      const passwordValidation =
        /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,10}$/i.test(
          userId.password
        );
      state.user = userId;
      if (!userValidation || !passwordValidation) {
        state.user.authUser = false;
      } else {
        state.user.authUser = true;
        const saveState = JSON.stringify(userId);
        sessionStorage.setItem("authUser", saveState);
      }
    },
    logout(state) {
      state.user = {
        email: "",
        password: "",
        authUser: false,
      };
      sessionStorage.clear();
    },
  },
});

export const { signup, login, logout } = authReducer.actions;
export default authReducer.reducer;
