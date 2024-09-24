import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import useStockCalls from "../service/useStockCalls";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import FirmCard from "../components/FirmCard";
import FirmModal from "../components/FirmModal";

const Firms = () => {
  const { getStocks } = useStockCalls();
  const { firms } = useSelector((state) => state.stock);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    getStocks("firms");
    getStocks("sales");
  }, []);

  // console.log(firms);

  return (
    <Container fluid>
      <Typography variant="h5" color="red" mb={2}>
        Firms
      </Typography>
      <Button variant="contained" onClick={handleOpen}>
        New Firm
      </Button>

      <FirmModal open={open} handleClose={handleClose} />

      <Row
        xs={1}
        sm={1}
        md={2}
        lg={3}
        xl={4}
        className="g-4 my-2 justify-content-center"
      >
        {firms?.map((firm) => (
          <Col key={firm._id}>
            <FirmCard firm={firm} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Firms;
