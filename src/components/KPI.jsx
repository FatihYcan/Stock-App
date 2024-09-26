import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PaymentsIcon from "@mui/icons-material/Payments";
import { amber, deepPurple, pink } from "@mui/material/colors";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";

const KPI = () => {
  const { sales, purchases } = useSelector((state) => state.stock);

  const totalSales = sales?.reduce((acc, val) => acc + val.amount, 0);
  const totalPurchases = purchases?.reduce((acc, val) => acc + val.amount, 0);

  const kpiData = [
    {
      id: 1,
      title: "Sales",
      amount: totalSales.toFixed(2),
      icon: <MonetizationOnIcon sx={{ fontSize: "2rem" }} />,
      bgColor: deepPurple[100],
      color: deepPurple[700],
    },
    {
      id: 2,
      title: "Profit",
      amount: (totalSales - totalPurchases).toFixed(2),
      icon: <ShoppingCartIcon sx={{ fontSize: "2rem" }} />,
      bgColor: pink[100],
      color: pink[700],
    },
    {
      id: 3,
      title: "Pruchases",
      amount: totalPurchases.toFixed(2),
      icon: <PaymentsIcon sx={{ fontSize: "2rem" }} />,
      bgColor: amber[100],
      color: amber[700],
    },
  ];

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
      direction="row"
      gap="1rem"
      marginBottom="2rem"
    >
      {kpiData.map((item) => (
        <Paper
          elevation={5}
          key={item.id}
          sx={{
            padding: "1rem",
            display: "flex",
            gap: "1rem",
            width: "250px",
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{
              bgcolor: item.bgColor,
              color: item.color,
              width: "70px",
              height: "70px",
            }}
          >
            {item.icon}
          </Avatar>

          <Box>
            <Typography variant="button"> {item.title} </Typography>
            <Typography variant="h5"> ${item.amount} </Typography>
          </Box>
        </Paper>
      ))}
    </Stack>
  );
};

export default KPI;
