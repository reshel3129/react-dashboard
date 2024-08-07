import { Box, Paper } from "@mui/material";
import Header from "./Header";
import SideBar from "./SideBar";

export default function DashboardLayout(props) {

    return (
        <Box display={"flex"} sx={{ flexDirection: "row", height: "100vh", backgroundColor: '#141416', overflowY: "hidden" }}>
            <SideBar />
            <Box sx={{ height: "98vh", overflowY: "scroll", backgroundColor: '#141416' }}>
                <Header />
                <Box sx={{ padding: 3, }} >
                    {props.children}

                </Box>
            </Box>
        </Box>
    )
}