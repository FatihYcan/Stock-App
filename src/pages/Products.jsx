import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import useStockCalls from "../service/useStockCalls";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
// import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";

const Products = () => {
  const { getStocks } = useStockCalls();
  const { firms } = useSelector((state) => state.stock);
  const [info, setInfo] = useState({
    name: "",
    phone: "",
    address: "",
    image: "",
  });
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInfo({
      name: "",
      phone: "",
      address: "",
      image: "",
    });
  };

  useEffect(() => {
    getStocks("firms");
  }, []);

  // console.log(firms);

  return (
    <Container fluid>
      <Typography variant="h5" color="red" mb={2}>
        Products
      </Typography>
      <Button variant="contained" onClick={handleOpen}>
        New Product
      </Button>

      <ProductModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />
    </Container>
  );
};

export default Products;
