import { Button, Typography } from "@mui/material";
import { useEffect } from "react";

const Firms = () => {
  const getFirms = () => {};

  useEffect(() => {
    getFirms();
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
