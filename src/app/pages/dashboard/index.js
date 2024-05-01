import * as React from "react";
import { DashboardWrapper } from "../../components/DashboardWrapper";
import { Avatar, Grid, Paper, Stack, Typography } from "@mui/material";
import Groups2Icon from '@mui/icons-material/Groups2';
import { Inventory2 } from "@mui/icons-material";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import RestorePageIcon from '@mui/icons-material/RestorePage';

export const DashboardPage = () => {
  return (
    <DashboardWrapper title="Dashboard">
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Paper sx={{ p: 3 }}>
          <PaperItem title="Orders" number="12535" color="#1976d2" icon={<Inventory2/>} />
         
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper sx={{ p: 3 }}>
          <PaperItem title="Users" number="2335" color="#1976d2" icon={<Groups2Icon/>} />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper sx={{ p: 3 }}>
          <PaperItem title="Revenue" number="976135" color="#1976d2" icon={<CurrencyRupeeIcon/>} />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper sx={{ p: 3 }}>
          <PaperItem title="Refunds" number="465" color="#1976d2" icon={<RestorePageIcon/>} />
            </Paper>
        </Grid>
      </Grid>
    </DashboardWrapper>
  );
};

const PaperItem = ({title,number,color, icon}) => {
return  <Stack direction="row" spacing={2} alignItems='center'>
<Avatar sx={{backgroundColor:'#1976d2', height:54, width:54}}>
  {icon}
</Avatar>
<div>
<Typography color={color}>{title}</Typography>
<Typography variant="h4">{number}</Typography>

</div>
</Stack>


}
