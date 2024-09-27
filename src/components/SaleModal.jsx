import { useSelector } from "react-redux";
import useStockCalls from "../service/useStockCalls";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
} from "@mui/material";
import { modalStyle } from "../styles/globalStyles";
import { useNavigate } from "react-router-dom";

export default function SaleModal({ open, handleClose, info, setInfo }) {
  const { postStock, putStock } = useStockCalls();
  const { products, brands } = useSelector((state) => state.stock);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (info._id) {
      putStock("sales", info);
    } else {
      postStock("sales", info);
    }
    handleClose();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Box
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            component="form"
            onSubmit={handleSubmit}
          >
            <FormControl>
              <InputLabel variant="outlined" id="brand-select-label">
                Brand
              </InputLabel>
              <Select
                labelId="brand-select-label"
                label="Brand"
                id="brand-select"
                name="brandId"
                value={info?.brandId}
                onChange={handleChange}
                required
              >
                <MenuItem onClick={() => navigate("/stock/brands")}>
                  Add New Brand
                </MenuItem>
                <hr />
                {brands?.map((item) => {
                  return (
                    <MenuItem key={item._id} value={item._id}>
                      {item.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <FormControl>
              <InputLabel variant="outlined" id="product-select-label">
                Product
              </InputLabel>
              <Select
                labelId="product-select-label"
                label="Product"
                id="product-select"
                name="productId"
                value={info?.productId}
                onChange={handleChange}
                required
              >
                <MenuItem onClick={() => navigate("/stock/products")}>
                  Add New Product
                </MenuItem>
                <hr />
                {products?.map((item) => {
                  return (
                    <MenuItem key={item._id} value={item._id}>
                      {item.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <TextField
              label="Quantity"
              id="quantity"
              name="quantity"
              type="number"
              variant="outlined"
              InputProps={{ inputProps: { min: 0 } }}
              value={info?.quantity}
              onChange={handleChange}
              required
            />
            <TextField
              label="Price"
              id="price"
              type="number"
              variant="outlined"
              name="price"
              InputProps={{ inputProps: { min: 0 } }}
              value={info?.price}
              onChange={handleChange}
              required
            />
            <Button type="submit" variant="contained" size="large">
              {info?._id ? "Update Sale" : "Add Sale"}
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
