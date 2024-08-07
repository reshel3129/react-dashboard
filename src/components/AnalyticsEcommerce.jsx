import PropTypes from 'prop-types';

// material-ui
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MainCard from './MainCard';
import { MyCard } from './MyCard';
import { Avatar } from '@mui/material';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import { Padding } from '@mui/icons-material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
const iconSX = { fontSize: '1rem', color: 'inherit', marginLeft: 0, marginRight: 0 };
const iconMap = {
    LocalMallIcon: LocalMallIcon,
    CurrencyExchangeOutlinedIcon: CurrencyExchangeOutlinedIcon,
    ShoppingCartOutlinedIcon: ShoppingCartOutlinedIcon
};
export default function AnalyticEcommerce({ color = 'primary', title, count, percentage, isLoss, icon, iconColor, iconBg }) {
    const IconComponent = iconMap[icon]; // Get the icon component based on the icon prop

    return (
        <MyCard contentSX={{ Padding: "10px", height: "140px" }}>
            <Stack>
                <Avatar sx={{ bgcolor: iconBg, borderRadius: "10px", paddingBottom: "5px" }} variant="rounded">
                    {IconComponent && <IconComponent sx={{ color: iconColor }} />}
                </Avatar>
                <Typography variant="h6" sx={{ fontSize: "14px" }}>
                    {title}
                </Typography>
                <Grid container alignItems="center">
                    <Grid item>
                        <Typography variant="h4">
                            {/* {count} */}
                        </Typography>
                    </Grid>
                    {/* {percentage && (
                        <Grid item>
                            <Chip
                                variant="combined"
                                color={color}
                                icon={<ArrowDropUpIcon style={iconSX} />}
                                label={`${percentage}%`}
                                sx={{ ml: 1.25, pl: 1 }}
                                size="small"
                            />
                        </Grid>
                    )} */}
                </Grid>
            </Stack>
            <Box sx={{ display: "inline-flex", justifyContent: "space-between", width: "100%", alignItems: "center", paddingTop: "4px" }}>
                <Typography variant="caption" sx={{ fontSize: 29, fontWeight: 700 }}>
                    {count}
                </Typography>
                <Typography sx={{ color: isLoss == 'No' ? "#08A578" : "#EA5654", display: 'flex', alignItems: 'center', }}>
                    {isLoss == 'No' ? <ArrowDropUpIcon sx={{ fontSize: "1.5rem", color: "#08A578" }} /> : <ArrowDropDownIcon sx={{ fontSize: "1.5rem", color: "#EA5654" }} />}{percentage}%
                </Typography>
            </Box>
        </MyCard>
    );
}

AnalyticEcommerce.propTypes = {
    color: PropTypes.string,
    title: PropTypes.string,
    count: PropTypes.string,
    percentage: PropTypes.number,
    isLoss: PropTypes.bool,
    extra: PropTypes.string
};
