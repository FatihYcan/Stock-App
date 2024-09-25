import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import useStockCalls from "../service/useStockCalls";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
// import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";
import ProductTable from "../components/ProductTable";

const Products = () => {
  const { getStocks } = useStockCalls();
  const { products } = useSelector((state) => state.stock);

  const initialState = {
    categoryId: "",
    brandId: "",
    name: "",
  };

  const [info, setInfo] = useState(initialState);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInfo(initialState);
  };

  useEffect(() => {
    getStocks("products");
    getStocks("categories");
    getStocks("brands");
  }, []);

  // console.log(firms);

  return (
    <Container fluid>
      <Typography variant="h5" color="red" mb={2}>
        Products
      </Typography>
      <Button variant="contained" sx={{ mb: 4 }} onClick={handleOpen}>
        New Product
      </Button>

      <ProductModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />
      <ProductTable />
    </Container>
  );
};

export default Products;
