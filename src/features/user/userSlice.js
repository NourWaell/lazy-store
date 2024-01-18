import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const themes = {
  dracula: "dracula",
  autumn: "autumn",
};

const getThemesFromLocalStorage = () => {
  const theme = localStorage.getItem("theme") || themes.autumn;
  document.documentElement.setAttribute("data-theme", theme);
  return theme;
};

const initialState = {
  user: { username: "Nour" },
  theme: getThemesFromLocalStorage(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {},

    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem("user");
      toast.success("Logged out successfully!");
    },

    toggleTheme: (state) => {
      const { dracula, autumn } = themes;
      state.theme = state.theme === dracula ? autumn : dracula;
      document.documentElement.setAttribute("data-theme", state.theme);
      localStorage.setItem("theme", state.theme);
    },
  },
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;
export default userSlice.reducer;
