import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const themes = {
  cupcake: "cupcake",
  forest: "forest",
};

const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem("theme") || themes.cupcake;
  document.documentElement.setAttribute("data-theme", theme);
  return theme;
};

const getUserFromLocalStorage = () => {
  return localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;
};

const defaultState = {
  user: getUserFromLocalStorage(),
  theme: getThemeFromLocalStorage(),
};

const userSlice = createSlice({
  name: "user",
  initialState: defaultState,
  reducers: {
    userLogin: (state, action) => {
      const user = { ...action.payload.user, token: action.payload.jwt };
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));
    },
    userLogout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
      toast.success("Logout successfully");
    },
    toggleTheme: (state) => {
      const { cupcake, forest } = themes;
      state.theme = state.theme === cupcake ? forest : cupcake;
      document.documentElement.setAttribute("data-theme", state.theme);
      localStorage.setItem("theme", state.theme);
    },
  },
});

export const { userLogin, userLogout, toggleTheme } = userSlice.actions;

export default userSlice.reducer;
