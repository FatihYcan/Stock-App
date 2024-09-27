import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { modalStyle } from "../styles/globalStyles";
import { TextField } from "@mui/material";
import useStockCalls from "../service/useStockCalls";

export default function BrandModal({ open, handleClose, info, setInfo }) {
  const { postStock, putStock } = useStockCalls();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (info._id) {
      putStock("brands", info);
    } else {
      postStock("brands", info);
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
            component="form"
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            onSubmit={handleSubmit}
          >
            <TextField
              label="Brand Name"
              name="name"
              id="name"
              type="text"
              variant="outlined"
              value={info.name}
              onChange={handleChange}
              required
            />
            <TextField
              label="Image"
              name="image"
              id="image"
              type="url"
              variant="outlined"
              value={info.image}
              onChange={handleChange}
              required
            />
            <Button type="submit" variant="contained" size="large">
              {info._id ? "Update Brand" : "Add Brand"}
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
