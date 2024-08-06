import { Box, Paper } from "@mui/material";
import Header from "./Header";
import SideBar from "./SideBar";

export default function DashboardLayout(props) {

    return (
        <Box display={"flex"} sx={{ flexDirection: "row" }}>
            <SideBar />
            <Box>
                <Header />
                <Box sx={{ padding: 3, backgroundColor: '#141416' }} >
                    {props.children}

                </Box>
            </Box>
        </Box>
    )
}