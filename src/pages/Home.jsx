import { Container } from "react-bootstrap";
import KPI from "../components/KPI";
import Charts from "../components/Charts";

const Home = () => {
  return (
    <Container fluid>
      <KPI />
      <Charts />
    </Container>
  );
};

export default Home;
