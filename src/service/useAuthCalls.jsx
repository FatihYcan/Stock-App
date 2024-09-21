import axios from "axios";
import { toastSuccessNotify, toastErrorNotify } from "../helper/ToastNotify";
import { useNavigate } from "react-router-dom";
import { fetchFail, fetchStart, loginSuccess, registerSuccess } from "../features/authSlice";
import { useDispatch } from "react-redux";

const useAuthCalls = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const login = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/login`,
        userInfo
      );
      dispatch(loginSuccess(data));
      toastSuccessNotify("Login işlemi başarılıdır.");
      navigate("/stock");
      // console.log(data);
    } catch (error) {
      // console.log(error);
      dispatch(fetchFail());
      toastErrorNotify("Login işlemi başarısızdır.");
    }
  };

  const register = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/users/`,
        userInfo
      );
      dispatch(registerSuccess(data));
      toastSuccessNotify("Register işlemi başarılıdır.");
      navigate("/stock");
      // console.log(data);
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      toastErrorNotify("Register işlemi başarısızdır.");
    }
  };
  const logout = async (userInfo) => {};

  return { login, register, logout };
};

export default useAuthCalls;
