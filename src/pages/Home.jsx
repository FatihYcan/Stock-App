import { Container } from "react-bootstrap";
import KPI from "../components/KPI";
import Charts from "../components/Charts";
import { useEffect } from "react";
import useStockCalls from "../service/useStockCalls";

const Home = () => {
  const { getStocks } = useStockCalls();

  useEffect(() => {
    getStocks("sales");
    getStocks("purchases");
  }, []);

  return (
    <Container fluid>
      <KPI />
      <Charts />
    </Container>
  );
};

export default Home;
