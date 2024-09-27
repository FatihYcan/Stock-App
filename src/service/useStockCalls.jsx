import { useDispatch } from "react-redux";
import useAxios from "./useAxios";
import {
  fetchFail,
  fetchStart,
  stocksSuccess,
  proCatBraSuccess,
  proPurBraFirSuccess,
} from "../features/stockSlice";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

const useStockCalls = () => {
  const { axiosWithToken } = useAxios();
  const dispatch = useDispatch();

  // const getSales = async () => {
  //   dispatch(fetchStart());
  //   try {
  //     const { data } = await axiosWithToken("/sales/");
  //     dispatch(salesSuccess(data.data));
  //   } catch (error) {
  //     dispatch(fetchFail());
  //     toastErrorNotify("Sales bilgileri çekilemiştir.");
  //   }
  // };

  // const getFirms = async () => {
  //   dispatch(fetchStart());
  //   try {
  //     const { data } = await axiosWithToken("/firms/");
  //     dispatch(firmsSuccess(data.data));
  //   } catch (error) {
  //     dispatch(fetchFail());
  //     toastErrorNotify("Firms bilgileri çekilemiştir.");
  //   }
  // };

  const getStocks = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken(`${url}`);
      const apiData = data.data;
      dispatch(stocksSuccess({ apiData, url }));
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`${url} bilgileri çekilemiştir.`);
    }
  };

  const getProCatBra = async () => {
    dispatch(fetchStart());
    try {
      const [products, categories, brands] = await Promise.all([
        axiosWithToken("/products/"),
        axiosWithToken("/categories/"),
        axiosWithToken("/brands/"),
      ]);

      dispatch(
        proCatBraSuccess([
          products?.data?.data,
          categories?.data?.data,
          brands?.data?.data,
        ])
      );
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const getProPurBraFir = async () => {
    dispatch(fetchStart());
    try {
      const [products, purchases, brands, firms] = await Promise.all([
        axiosWithToken("/products/"),
        axiosWithToken("/purchases/"),
        axiosWithToken("/brands/"),
        axiosWithToken("/firms/"),
      ]);
      dispatch(
        proPurBraFirSuccess([
          products?.data?.data,
          purchases?.data?.data,
          brands?.data?.data,
          firms?.data?.data,
        ])
      );
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const deleteStock = async (url, id) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.delete(`${url}/${id}`);
      getStocks(url);
      toastSuccessNotify(`${url} bilgisi silinmiştir.`);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`${url} bilgisi silinememiştir.`);
    }
  };

  const postStock = async (url, info) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`${url}/`, info);
      getStocks(url);
      toastSuccessNotify(`${url} bilgisi eklenmiştir.`);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`${url} bilgisi eklenememiştir .`);
    }
  };

  const putStock = async (url, info) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.put(`${url}/${info._id}`, info);
      getStocks(url);
      toastSuccessNotify(`${url} bilgisi güncellenmiştir..`);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`${url} bilgisi güncellenememiştir .`);
    }
  };

  return {
    getStocks,
    deleteStock,
    postStock,
    putStock,
    getProCatBra,
    getProPurBraFir,
  };
};

export default useStockCalls;
