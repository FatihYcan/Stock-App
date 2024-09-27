import { useEffect, useState } from "react";
import useStockCalls from "../service/useStockCalls";
import { useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import { Button, Typography } from "@mui/material";
import BrandModal from "../components/BrandModal";
import BrandCard from "../components/BrandCard";

const Brands = () => {
  const { getStocks } = useStockCalls();
  const { brands } = useSelector((state) => state.stock);
  const [info, setInfo] = useState({
    name: "",
    image: "",
  });
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInfo({
      name: "",
      image: "",
    });
  };

  useEffect(() => {
    getStocks("brands");
  }, []);

  return (
    <Container fluid>
      <Typography variant="h5" color="red" mb={2}>
        Brands
      </Typography>
      <Button variant="contained" onClick={handleOpen}>
        New Brand
      </Button>

      <BrandModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />

      <Row
        xs={1}
        md={2}
        lg={3}
        xxl={4}
        className="g-4 my-2 justify-content-center"
      >
        {brands?.map((brand) => (
          <Col key={brand._id}>
            <BrandCard
              brand={brand}
              handleOpen={handleOpen}
              setInfo={setInfo}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Brands;
