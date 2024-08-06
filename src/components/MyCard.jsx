import { Card, CardContent } from "@mui/material";

export function MyCard(props) {
    return (
        <Card
            elevation={1}
            sx={{
                backgroundColor: "#202028",
                borderRadius: "8px",
                padding: "10px",
                color: "white",
                width: "100%"
            }}
        >
            {props.children}
        </Card>
    )
}