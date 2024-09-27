import { useSelector } from "react-redux";
import useStockCalls from "../service/useStockCalls";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Button, Typography } from "@mui/material";
import LoadingTable, { ErrMsg, NoDataMsg } from "../components/ErrorMessage";
import SalesModal from "../components/SalesModal";
import SalesTable from "../components/SalesTable";

const Sales = () => {
  const { getProSalBra } = useStockCalls();
  const { error, loading, sales } = useSelector((state) => state.stock);

  const [info, setInfo] = useState({
    brandId: "",
    productId: "",
    quantity: "",
    price: "",
  });

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInfo({
      brandId: "",
      productId: "",
      quantity: "",
      price: "",
    });
  };

  useEffect(() => {
    getProSalBra();
  }, []);

  return (
    <Container fluid>
      <Typography variant="h5" color="red" mb={2}>
        Sales
      </Typography>
      {error && <ErrMsg />}

      {loading && <LoadingTable />}

      {!error && !loading && !sales?.length && <NoDataMsg />}

      {!loading && !error && sales?.length > 0 && (
        <>
          <Button variant="contained" sx={{ mb: 4 }} onClick={handleOpen}>
            New Sale
          </Button>

          <SalesModal
            open={open}
            handleClose={handleClose}
            info={info}
            setInfo={setInfo}
          />
          <SalesTable sales={sales} setInfo={setInfo} handleOpen={handleOpen} />
        </>
      )}
    </Container>
  );
};

export default Sales;
