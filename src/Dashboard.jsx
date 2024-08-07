import { Box, Card, CardContent, CardHeader, Grid, IconButton, Typography } from "@mui/material";
import AnalyticEcommerce from "./components/AnalyticsEcommerce";
import DashboardLayout from "./layout/DashboardLayout";
import { ActivityBarChart } from "./components/AcitivityChart";
import RecentOrders from "./components/RecentOrders";
import Feedbacks from "./components/CustomerFeedback";
import { GoToList } from "./components/GoToList";
import CircularProgressWithLabel from "./components/CircularProgressWithLabel";
import { MyCard } from "./components/MyCard";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { BloodtypeRounded } from "@mui/icons-material";
import CustomizedMenus from "./components/SelectMenu";
export default function Dashboard() {
    return (
        <DashboardLayout>
            <Grid container rowSpacing={4.5} spacing={2} columnSpacing={2.75}>
                {/* row 1 */}
                <Grid item xs={12} sx={{ mb: -2.25 }}>
                    <Typography variant="h5" sx={{ color: "white", fontWeight: "600" }}>Dashboard</Typography>
                </Grid>
                <Grid item container xs={12} sm={8} spacing={4} sx={{ paddingRight: "20px" }}>
                    {[
                        { title: 'Total Orders', count: 75, percentage: 3, isLoss: "No", iconColor: "#4063F3", iconBg: "#293269", icon: "ShoppingCartOutlinedIcon" },
                        { title: 'Total Delivered', count: 70, percentage: 3, isLoss: "Yes", iconColor: "#00CA8A", iconBg: "#165246", icon: "LocalMallIcon" },
                        { title: 'Total Cancelled', count: "05", percentage: 3, isLoss: "No", iconColor: "#F0605F", iconBg: "#5F3237", icon: "LocalMallIcon" },
                        { title: 'Total Revenue', count: "$12k", percentage: 3, isLoss: "Yes", iconColor: "#E241A1", iconBg: "#5A264A", icon: "CurrencyExchangeOutlinedIcon" }
                    ].map((item) => (
                        <Grid key={'card_' + item?.title} item xs={6} sm={3} >
                            <AnalyticEcommerce title={item.title} count={item.count} percentage={item.percentage} isLoss={item.isLoss} icon={item.icon} iconColor={item.iconColor} iconBg={item.iconBg} />
                        </Grid>
                    ))}

                </Grid>
                <Grid item container xs={12} sm={4}>
                    <Card sx={{ display: 'flex', width: "100%", height: "140px", justifyContent: "space-around", backgroundColor: "#202028", borderRadius: "8px", color: "white" }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography variant="" component="div" sx={{ fontSize: "12px", paddingBottom: "20px" }}>
                                    Net Profit
                                </Typography>
                                <Typography component="div" variant="h4" sx={{ fontWeight: "900", paddingBottom: "4px" }}>
                                    $ 6759.25
                                </Typography>
                                <Typography style={{ display: 'flex', alignItems: 'center', color: "#5DD64B" }}>
                                    <ArrowDropUpIcon sx={{ fontSize: "1.5rem" }} />3%
                                </Typography>
                            </CardContent>
                        </Box>

                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                            <CircularProgressWithLabel value={70} />
                            <Typography sx={{ fontSize: "8px", paddingTop: "5px" }}>*The values here has been rounded off</Typography>
                        </Box>

                    </Card>
                </Grid>
                <Grid item container xs={12} sm={8}>
                    <MyCard sx={{ width: "100%", height: "100%", paddingX: 1 }}>

                        <CardHeader title={<Typography sx={{ fontWeight: "800" }} component="div" variant="h5">
                            Activity
                        </Typography>} action={
                            <CustomizedMenus />
                        } />
                        <ActivityBarChart />
                    </MyCard>
                </Grid>
                <Grid item container xs={12} sm={4}>
                    <GoToList />
                </Grid>
                <Grid item container xs={12} sm={8}>
                    {/* <RecentOrders /> */}

                </Grid>
                <Grid item container xs={12} sm={4} md={4}>
                    <Feedbacks />
                </Grid>
            </Grid>
        </DashboardLayout >
    );
}
