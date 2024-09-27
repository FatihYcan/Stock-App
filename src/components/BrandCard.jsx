import Card from "react-bootstrap/Card";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import useStockCalls from "../service/useStockCalls";

const BrandCard = ({ brand, handleOpen, setInfo }) => {
  const { image, name, _id } = brand;
  const { deleteStock } = useStockCalls();

  return (
    <Card>
      <Card.Img
        variant="top"
        src={image}
        alt={name}
        className="h-[175px] object-contain"
       />
      <Card.Body 
      className="h-[100px]"
      >
        <Card.Title>{name}</Card.Title>
      </Card.Body>
      <Card.Body className="icon">
        <EditIcon
          className="edit"
          onClick={() => {
            handleOpen();
            setInfo(brand);
          }}
        />
        <DeleteOutlineIcon
          className="delete"
          onClick={() => deleteStock("brands", _id)}
        />
      </Card.Body>
    </Card>
  );
};

export default BrandCard;
