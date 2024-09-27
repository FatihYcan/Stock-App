import useStockCalls from "../service/useStockCalls";
import { Box } from "@mui/material";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";

export default function PurchaseTable({ purchases, setInfo, handleOpen }) {
  const { deleteStock } = useStockCalls();

  const getRowId = (row) => row._id;

  const columns = [
    {
      field: "createdAt",
      headerName: "Date",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return new Date(row.createdAt).toLocaleDateString("tr-TR");
      },
    },
    {
      field: "firmId",
      headerName: "Firm",
      flex: 1,
      headerAlign: "center",
      align: "center",
      valueGetter: (props) => props?.name,
    },
    {
      field: "brandId",
      headerName: "Brand",
      flex: 1,
      headerAlign: "center",
      align: "center",
      valueGetter: (props) => props?.name,
    },
    {
      field: "productId",
      headerName: "Product",
      flex: 1,
      headerAlign: "center",
      align: "center",
      valueGetter: (props) => props?.name,
    },
    {
      field: "quantity",
      headerName: "Quantity",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "price",
      headerName: "Price",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "amount",
      headerName: "Amount",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      headerName: "Actions",
      headerAlign: "center",
      align: "center",
      field: "actions",
      type: "actions",

      renderCell: ({ row }) => {
        return [
          <GridActionsCellItem
            key={`edit-${row._id}`}
            icon={<EditIcon />}
            label="Edit"
            className="edit"
            onClick={() => {
              handleOpen();
              setInfo({
                firmId: row.firmId._id,
                brandId: row.brandId._id,
                productId: row.productId._id,
                quantity: row.quantity,
                price: row.price,
                _id: row._id,
              });
            }}
          />,
          <GridActionsCellItem
            key={`delete-${row._id}`}
            icon={<DeleteOutlineIcon />}
            label="Delete"
            className="delete"
            onClick={() => deleteStock("purchases", row._id)}
          />,
        ];
      },
    },
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <DataGrid
        autoHeight
        rows={purchases}
        columns={columns}
        pageSizeOptions={[5, 10, 20, 25, 50, 100]}
        checkboxSelection
        disableRowSelectionOnClick
        getRowId={getRowId}
        slots={{ toolbar: GridToolbar }}
      />
    </Box>
  );
}
