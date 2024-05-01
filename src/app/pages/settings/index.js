import React from "react";
import { DashboardWrapper } from "../../components/DashboardWrapper";
import { Checkbox, Divider, FormControlLabel, Paper, Stack, Switch, Typography, Button } from "@mui/material";

export const SettingsPage = () => {
  return (
    <DashboardWrapper title="Settings">
      <Paper sx={{ p: 3 }}>
        <Stack gap={2}>
        <Stack direction="row" alignItems="center">
          <Typography sx={{ flexGrow: 1 }}>Allow Notification</Typography>
          <Switch defaultChecked />
        </Stack>
        <Stack direction="row" alignItems="center">
          <Typography sx={{ flexGrow: 1 }}>Allow Returns</Typography>
          <Switch defaultChecked />
        </Stack>
        <Divider />
        <Stack direction="row" alignItems="center">
          <Typography sx={{ flexGrow: 1 }}>Accepted Payments</Typography>
          <Stack direction="row">
          <FormControlLabel control={<Checkbox defaultChecked />} label="Cards" />
          <FormControlLabel control={<Checkbox defaultChecked />} label="UPI" />
          <FormControlLabel control={<Checkbox defaultChecked />} label="Cash On Delivery" />
          <FormControlLabel control={<Checkbox defaultChecked />} label="Pay Later" />
          </Stack>
        </Stack>
        <Button variant="contained" sx={{mt:5}}>Save</Button>
        </Stack>
      </Paper>
    </DashboardWrapper>
  );
};
