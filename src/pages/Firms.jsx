import { Button, Typography } from "@mui/material";
import { useEffect } from "react";
import useStockCalls from "../service/useStockCalls";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import FirmCard from "../components/FirmCard";

const Firms = () => {
  const { getStocks } = useStockCalls();
  const { firms } = useSelector((state) => state.stock);

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
      <Button variant="contained">New Firm</Button>

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
