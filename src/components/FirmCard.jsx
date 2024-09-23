import Card from "react-bootstrap/Card";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import useStockCalls from "../service/useStockCalls";

const FirmCard = ({ firm }) => {
  const { address, image, name, phone, _id } = firm;
  const { deleteStock } = useStockCalls();

  return (
    <Card className="card">
      <Card.Img variant="top" src={image} alt={name} className="card-img" />
      <Card.Body className="body">
        <Card.Title>{name}</Card.Title>
        <Card.Text className="text-muted adress">{address}</Card.Text>
        <Card.Text className="text-muted phone">{phone}</Card.Text>
      </Card.Body>
      <Card.Body className="icon">
        <EditIcon className="edit" />
        <DeleteOutlineIcon
          className="delete"
          onClick={() => deleteStock("firms", _id)}
        />
      </Card.Body>
    </Card>
  );
};

export default FirmCard;
