import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { DashboardWrapper } from "../../components/DashboardWrapper";
import { Paper } from "@mui/material";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "productName", headerName: "Product Name", width: 140 },
  { field: "price", headerName: "Price", width: 70 },
  { field: "quantity", headerName: "Quantity", width: 70 },
  {
    field: "user",
    headerName: "User",
    type: "text",
    width: 80,
  },
  {
    field: "address",
    headerName: "Address",
    description: "This column has a value getter and is not sortable.",

    width: 190,
  },
];

const rows = [
  {
    id: 1,
    category: "Mobile",
    productName: "iPhone 15 Pro Max",
    price: 149999,
    quantity: 1,
  },
  {
    id: 2,
    category: "Mobile",
    productName: "iPhone 15 Pro",
    price: 129999,
    quantity: 1,
  },
  {
    id: 3,
    category: "Mobile",
    productName: "iPhone 15",
    price: 89999,
    quantity: 2,
  },
  {
    id: 4,
    category: "Mobile",
    productName: "iPhone 14 Pro Max",
    price: 139999,
    quantity: 1,
  },
  {
    id: 5,
    category: "Mobile",
    productName: "iPhone 14 Pro",
    price: 119999,
    quantity: 1,
  },
  {
    id: 6,
    category: "Mobile",
    productName: "iPhone 14",
    price: 79999,
    quantity: 2,
  },
  {
    id: 7,
    category: "Mobile",
    productName: "iPhone 13 Pro Max",
    price: 119999,
    quantity: 1,
  },
  {
    id: 8,
    category: "Mobile",
    productName: "iPhone 13 Pro",
    price: 99999,
    quantity: 1,
  },
  {
    id: 9,
    category: "Mobile",
    productName: "iPhone 13",
    price: 3,
    quantity: 11,
  },
];

export const OrdersPage = () => {
  return (
    <DashboardWrapper title="Products">
      <Paper style={{ height: 600, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </Paper>
    </DashboardWrapper>
  );
};
