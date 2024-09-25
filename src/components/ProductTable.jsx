import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import useStockCalls from "../service/useStockCalls";

export default function ProductTable() {
  const { products } = useSelector((state) => state.stock);
  const { deleteStock } = useStockCalls();

  // console.log(products);

  const getRowId = (row) => row._id;

  const columns = [
    { field: "_id", headerName: "#", flex: 0.5 },
    {
      field: "categoryId",
      headerName: "Category",
      flex: 1,
      headerAlign: "center",
      align: "center",
      valueGetter: (props) => {
        // console.log(props);
        return props.name;
      },
    },
    {
      field: "brandId",
      headerName: "Brand",
      flex: 1,
      headerAlign: "center",
      align: "center",
      valueGetter: (props) => props.name,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "quantity",
      headerName: "Stock",
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
      getActions: (params) => [
        <GridActionsCellItem
          icon={<DeleteOutlineIcon />}
          label="Delete"
          className="delete"
          onClick={() => deleteStock("products", params.id)}
        />,
      ],
    },
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <DataGrid
        autoHeight
        rows={products}
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
