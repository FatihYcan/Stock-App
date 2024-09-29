import { Alert } from "@mui/material";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

export const ErrMsg = () => {
  return (
    <Alert variant="filled" severity="error" sx={{ textAlign: "center" }}>
      Gösterilmesi gereken veriler çekilememiştir.
    </Alert>
  );
};

export const NoDataMsg = () => {
  return (
    <Alert variant="filled" severity="warning" sx={{ textAlign: "center" }}>
      Gösterilmesi gereken bir veri yoktur.
    </Alert>
  );
};

export const LoadingTable = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Skeleton variant="rectangular" height={400} />
    </Box>
  );
};

export const FirmLoadingCard = () => {
  const { firms } = useSelector((state) => state.stock);

  return (
    <Row
      xs={1}
      md={2}
      lg={3}
      xxl={4}
      className="g-4 my-2 justify-content-center"
    >
      {firms?.map((firm) => (
        <Col key={firm._id}>
          <Skeleton variant="rectangular" height={125} />
          <Skeleton variant="text" width={100} height={50} />
          <Skeleton variant="text" sx={{ marginTop: "-1.5rem" }} height={100} />
          <Skeleton
            variant="text"
            sx={{ marginTop: "-1.2rem" }}
            width={200}
            height={40}
          />
        </Col>
      ))}
    </Row>
  );
};
