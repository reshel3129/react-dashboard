import { Box, CircularProgress, Typography } from "@mui/material";

export default function CircularProgressWithLabel(props) {
    return (
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            {/* <CircularProgress variant="determinate" {...props}
                size={100}
                thickness={6}
                sx={{
                    color: "#7394FD",
                    '& .MuiCircularProgress-circle': {
                        strokeLinecap: 'round',
                    },
                    // position: 'absol?ute',
                }} /> */}
            <CircularProgress
                variant="determinate"
                value={100}
                size={100}
                thickness={6}
                sx={{
                    color: "#242A4A",
                    position: 'absolute',
                }}
            />
            <CircularProgress
                variant="determinate"
                {...props}
                size={100}
                thickness={6}
                sx={{
                    color: "#7394FD",
                    '& .MuiCircularProgress-circle': {
                        strokeLinecap: 'round',
                    },
                }}
            />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    width: "50%",
                    justifyContent: 'center',
                    flexDirection: 'column',
                    marginX: "auto"
                }}
            >
                <Typography variant="caption" component="div" sx={{ fontSize: "20px", fontWeight: "700" }}>
                    {`${Math.round(props.value)}%`}
                </Typography>
                <Typography variant="caption" sx={{ fontSize: 8, textAlign: "center" }} component="div" >
                    Goal Completed.
                </Typography>
            </Box>
        </Box>
    );
}
