import { Box, Divider, List, ListItemButton, ListItemIcon, ListItemText, Paper } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
// import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined'; import BarChartIcon from '@mui/icons-material/BarChart';
import ListAltIcon from '@mui/icons-material/ListAlt';
import InsertChartOutlinedSharpIcon from '@mui/icons-material/InsertChartOutlinedSharp';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import PixOutlinedIcon from '@mui/icons-material/PixOutlined';
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';
export default function SideBar() {
    return (
        <Paper square sx={{ width: "65px", backgroundColor: "#202028" }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>

            <List component="nav">
                <ListItemButton sx={{ marginBottom: "20px" }}>
                    <ListItemIcon>
                            <SpaceDashboardIcon sx={{ color: "#6D92FC", fontSize: "34px" }} />
                    </ListItemIcon>
                </ListItemButton>
                <ListItemButton sx={{ marginBottom: "15px" }}>
                    <ListItemIcon>
                            <HomeIcon sx={{ color: "#6D92FC" }} />
                    </ListItemIcon>
                </ListItemButton>
                {/* <Divider sx={{ my: 1, borderColor: "#393B44" }} /> */}
                <ListItemButton sx={{ marginBottom: "15px" }}>
                    <ListItemIcon>
                        <InsertChartOutlinedSharpIcon sx={{ color: "#FFFFFF" }} />
                    </ListItemIcon>
                </ListItemButton>
                <ListItemButton sx={{ marginBottom: "15px" }}>
                    <ListItemIcon>
                        <AssignmentTurnedInOutlinedIcon sx={{ color: "#FFFFFF" }} />
                    </ListItemIcon>
                </ListItemButton>
                <ListItemButton sx={{ marginBottom: "15px" }}>
                    <ListItemIcon>
                        <AccountBalanceWalletOutlinedIcon sx={{ color: "#FFFFFF" }} />
                    </ListItemIcon>
                </ListItemButton>
                <ListItemButton sx={{ marginBottom: "15px" }}>
                    <ListItemIcon>
                            <LocalMallOutlinedIcon sx={{ color: "#FFFFFF" }} />
                        </ListItemIcon>
                    </ListItemButton>
                    <Box sx={{ flexGrow: 1 }} />  {/* Spacer */}

                    <ListItemButton sx={{ marginBottom: "15px" }}>
                        <ListItemIcon>
                            <PowerSettingsNewOutlinedIcon sx={{ color: "#FFFFFF" }} />
                    </ListItemIcon>
                </ListItemButton>
            </List>
            </Box>
        </Paper>
    )
}