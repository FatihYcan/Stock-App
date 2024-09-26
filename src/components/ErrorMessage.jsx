import { Alert } from "@mui/material";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

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

const LoadingTable = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Skeleton variant="rectangular" height={400} />
    </Box>
  );
};

export default LoadingTable;
