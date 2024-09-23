import { Button, Typography } from "@mui/material";
import { useEffect } from "react";
import useStockCalls from "../service/useStockCalls";

const Firms = () => {
  const { getSales, getFirms } = useStockCalls();

  useEffect(() => {
    getFirms();
    getSales();

    getStocks("sales");
    getStocks("firms");
  }, []);

  return (
    <div>
      <Typography variant="h5" color="red" mb={2}>
        Firms
      </Typography>
      <Button variant="contained">New Firm</Button>
    </div>
  );
};

export default Firms;
