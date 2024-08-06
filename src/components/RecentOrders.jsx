import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Avatar, Box, Card, CardHeader, Chip, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { MyCard } from './MyCard';

function createData(customer, orderno, amount, status) {
  return { customer, orderno, amount, status };
}

const rows = [
  createData('Wade Warren', 15478258, '$124.00', 'Delivered'),
  createData('Jane Cooper', 48965786, '$365.02', 'Delivered'),
  createData('Guy Hawkins', 78958215, '$45.88', 'Cancelled'),
  createData('Kristin Watson', 20965732, '$65.00', 'Pending'),
  createData('Cody Fisher', 95715620, '$545.00', 'Delivered'),
  createData('Savannah Nguyen', 78514568, '$128.20', 'Delivered'),
];

export default function RecentOrders() {

  return (
    <MyCard>
      <CardHeader title={<Typography sx={{ fontWeight: "800" }} component="div" variant="h5">
        Recent Orders        </Typography>} />

      <TableContainer>
        <Table aria-label="simple table" >
          <TableHead >
            <TableRow >
              <TableCell sx={{ color: "white" }}> Customer</TableCell>
              <TableCell sx={{ color: "white" }} align="center">Order No.</TableCell>
              <TableCell sx={{ color: "white" }} align="center">Amount</TableCell>
              <TableCell sx={{ color: "white" }} align="center">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.customer}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{ color: "white" }} component="th" scope="row">
                  <Box display="flex" alignItems="center">
                    <Avatar alt={row.customer} sx={{ width: 30, height: 30, mr: 2 }}>{row.customer.charAt(0)}</Avatar>
                    <Typography variant="subtitle1">{row.customer}</Typography>
                  </Box>
                </TableCell>
                <TableCell sx={{ color: "white" }} align="center">{row.orderno}</TableCell>
                <TableCell sx={{ color: "white" }} align="center">{row.amount}</TableCell>
                <TableCell sx={{ color: "white" }} align="center"><Chip label={row.status} style={{ color: row.status === 'Delivered' ? '#0F9D75' : '#E1585F', backgroundColor: row.status === 'Delivered' ? '#135547' : '#5D343A' }} /></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </MyCard>
  );
}
