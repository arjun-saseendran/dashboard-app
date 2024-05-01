import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { DashboardWrapper } from "../../components/DashboardWrapper";
import { Paper } from "@mui/material";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "productName", headerName: "Product Name", width: 140 },
  { field: "category", headerName: "Category", width: 70 },
  {
    field: "price",
    headerName: "Price",
    type: "number",
    width: 80,
  },
  {
    field: "quantity",
    headerName: "Quantity",
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
    quantity: 5003,
  },
  {
    id: 2,
    category: "Mobile",
    productName: "iPhone 15 Pro",
    price: 129999,
    quantity: 4001,
  },
  {
    id: 3,
    category: "Mobile",
    productName: "iPhone 15",
    price: 89999,
    quantity: 3111,
  },
  {
    id: 4,
    category: "Mobile",
    productName: "iPhone 14 Pro Max",
    price: 139999,
    quantity: 2000,
  },
  {
    id: 5,
    category: "Mobile",
    productName: "iPhone 14 Pro",
    price: 119999,
    quantity: 3471,
  },
  {
    id: 6,
    category: "Mobile",
    productName: "iPhone 14",
    price: 79999,
    quantity: 2411,
  },
  {
    id: 7,
    category: "Mobile",
    productName: "iPhone 13 Pro Max",
    price: 119999,
    quantity: 2700,
  },
  {
    id: 8,
    category: "Mobile",
    productName: "iPhone 13 Pro",
    price: 99999,
    quantity: 3171,
  },
  {
    id: 9,
    category: "Mobile",
    productName: "iPhone 13",
    price: 49999,
    quantity: 1111,
  },
];

export const ProductsPage = () => {
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
