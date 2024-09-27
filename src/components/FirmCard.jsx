import Card from "react-bootstrap/Card";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import useStockCalls from "../service/useStockCalls";

const FirmCard = ({ firm, handleOpen, setInfo }) => {
  const { address, image, name, phone, _id } = firm;
  const { deleteStock } = useStockCalls();

  // console.log(firm)

  return (
    <Card>
      <Card.Img
        variant="top"
        src={image}
        alt={name}
        className="h-[125px] object-contain "
      />
      <Card.Body className="h-[175px]">
        <Card.Title>{name}</Card.Title>
        <Card.Text className="text-muted adress">{address}</Card.Text>
        <Card.Text className="text-muted">{phone}</Card.Text>
      </Card.Body>
      <Card.Body className="icon">
        <EditIcon
          className="edit"
          onClick={() => {
            handleOpen();
            setInfo(firm);
          }}
        />
        <DeleteOutlineIcon
          className="delete"
          onClick={() => deleteStock("firms", _id)}
        />
      </Card.Body>
    </Card>
  );
};

export default FirmCard;
