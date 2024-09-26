import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PaymentsIcon from "@mui/icons-material/Payments";
import { amber, deepPurple, pink } from "@mui/material/colors";
import { Avatar, Stack } from "@mui/material";
import Paper from "@mui/material/Paper";

const kpiData = [
  {
    id: 1,
    title: "Sales",
    amount: "$16900",
    icon: <MonetizationOnIcon sx={{ fontSize: "2.5rem" }} />,
    bgColor: deepPurple[100],
    color: deepPurple[700],
  },
  {
    id: 2,
    title: "Sales",
    amount: "$16900",
    icon: <ShoppingCartIcon sx={{ fontSize: "2.5rem" }} />,
    bgColor: pink[100],
    color: pink[700],
  },
  {
    id: 3,
    title: "Sales",
    amount: "$16900",
    icon: <PaymentsIcon sx={{ fontSize: "2.5rem" }} />,
    bgColor: amber[100],
    color: amber[700],
  },
];

const KPI = () => {
  return (
    <Stack justifyContent="center" alignItems="center">
      {kpiData.map((item) => (
        <Paper elevation={5} key={item.id}>
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
        </Paper>
      ))}
    </Stack>
  );
};

export default KPI;
