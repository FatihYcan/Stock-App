import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import StoreIcon from "@mui/icons-material/Store";
import StarsIcon from "@mui/icons-material/Stars";
import InventoryIcon from "@mui/icons-material/Inventory";
import { useNavigate } from "react-router-dom";

const icons = [
  {
    icon: <SpaceDashboardIcon />,
    title: "Dashboard",
    url: "/stock/",
  },
  {
    title: "Purchases",
    icon: <ShoppingCartIcon />,
    url: "/stock/purchases/",
  },
  {
    title: "Sales",
    icon: <AttachMoneyIcon />,
    url: "/stock/sales/",
  },
  {
    title: "Firms",
    icon: <StoreIcon />,
    url: "/stock/firms/",
  },
  {
    title: "Brands",
    icon: <StarsIcon />,
    url: "/stock/brands/",
  },
  {
    title: "Products",
    icon: <InventoryIcon />,
    url: "/stock/products/",
  },
];

const MenuListItems = () => {
  const navigate = useNavigate();
  return (
    <List>
      {icons.map((item, index) => (
        <ListItem key={index} disablePadding>
          <ListItemButton onClick={() => navigate(item.url)}>
            <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
            <ListItemText sx={{ color: "white" }} primary={item.title} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default MenuListItems;
