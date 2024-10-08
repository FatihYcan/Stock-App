import { useSelector } from "react-redux";
import useStockCalls from "../service/useStockCalls";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Button, Typography } from "@mui/material";
import { LoadingTable, ErrMsg, NoDataMsg } from "../components/ErrorMessage";
import PurchaseModal from "../components/PurchaseModal";
import PurchaseTable from "../components/PurchaseTable";

const Purchases = () => {
  const { getProPurBraFir } = useStockCalls();
  const { error, loading, purchases } = useSelector((state) => state.stock);

  const [info, setInfo] = useState({
    firmId: "",
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
      firmId: "",
      brandId: "",
      productId: "",
      quantity: "",
      price: "",
    });
  };

  useEffect(() => {
    getProPurBraFir();
  }, []);

  // console.log(info);

  return (
    <Container fluid>
      <Typography variant="h5" color="red" mb={2}>
        Purchases
      </Typography>
      {error && <ErrMsg />}

      {loading && <LoadingTable />}

      {!error && !loading && !purchases?.length && (
        <>
          <Button variant="contained" sx={{ mb: 4 }} onClick={handleOpen}>
            New Purchase
          </Button>

          <PurchaseModal
            open={open}
            handleClose={handleClose}
            info={info}
            setInfo={setInfo}
          />

          <NoDataMsg />
        </>
      )}

      {!loading && !error && purchases?.length > 0 && (
        <>
          <Button variant="contained" sx={{ mb: 4 }} onClick={handleOpen}>
            New Purchase
          </Button>

          <PurchaseModal
            open={open}
            handleClose={handleClose}
            info={info}
            setInfo={setInfo}
          />
          <PurchaseTable
            purchases={purchases}
            setInfo={setInfo}
            handleOpen={handleOpen}
          />
        </>
      )}
    </Container>
  );
};

export default Purchases;
