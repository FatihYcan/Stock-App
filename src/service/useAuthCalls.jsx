import { toastSuccessNotify, toastErrorNotify } from "../helper/ToastNotify";
import { useNavigate } from "react-router-dom";
import {
  fetchFail,
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
} from "../features/authSlice";
import { useDispatch } from "react-redux";
import useAxios from "./useAxios";

const useAuthCalls = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const { token } = useSelector((state) => state.auth);
  const { axiosWithToken, axiosPublic } = useAxios();

  const register = async (userInfo) => {
    dispatch(fetchStart());
    try {
      // const { data } = await axios.post(
      //   `${process.env.REACT_APP_BASE_URL}/users/`,
      //   userInfo
      // );

      const { data } = await axiosPublic.post("/users/", userInfo);
      dispatch(registerSuccess(data));
      toastSuccessNotify("Register işlemi başarılıdır.");
      navigate("/stock");
      // console.log(data);
    } catch (error) {
      // console.log(error);
      dispatch(fetchFail());
      toastErrorNotify("Register işlemi başarısızdır.");
    }
  };

  const login = async (userInfo) => {
    dispatch(fetchStart());
    try {
      // const { data } = await axios.post(
      //   `${process.env.REACT_APP_BASE_URL}/auth/login`,
      //   userInfo
      // );
      const { data } = await axiosPublic.post("/auth/login", userInfo);
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

  const logout = async () => {
    dispatch(fetchStart());
    try {
      // await axios.get(`${process.env.REACT_APP_BASE_URL}/auth/logout`, {
      //   headers: { Authorization: `Token ${token}` },
      // });
      await axiosWithToken.get("/auth/logout");
      dispatch(logoutSuccess());
      toastSuccessNotify("Logout işlemi başarılıdır.");
      // navigate("/");
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      toastErrorNotify("Logout işlemi başarısızdır.");
    }
  };

  return { register, login, logout };
};

export default useAuthCalls;
