import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import AuthReducer from "./src/redux/reducer/auth.reducer";
import Routes from "./src/routes/routes";
import axios from "axios";

export default function App() {
  axios.defaults.baseURL = "https://api.imgur.com/";
  const store = createStore(AuthReducer);
  // axios.interceptors.request.use(
  //   (config) => {
  //     config.headers.Authorization = store.getState().auth.access_token;
  //     console.log(store.getState().auth.access_token);

  //     return config;
  //   },
  //   (error) => {
  //     return Promise.reject(error);
  //   }
  // );

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
