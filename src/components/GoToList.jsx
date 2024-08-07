import { CardGiftcardOutlined, MenuBookOutlined, MessageOutlined, PieChartOutlined, RestaurantOutlined, SettingsOutlined } from "@mui/icons-material";
import { Avatar, Card, IconButton, List, ListItem, ListItemAvatar, ListItemButton, ListItemSecondaryAction, ListItemText, Stack, Typography } from "@mui/material";
import MainCard from "./MainCard";
import DeleteIcon from '@mui/icons-material/Delete';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import TrackChangesSharpIcon from '@mui/icons-material/TrackChangesSharp';
import { MyCard } from "./MyCard";

export function GoToList() {
  const avatarSX = {
    width: 50,
    height: 50,
    fontSize: '1rem'
  };

  const goToSX = {
    width: 26,
    height: 26,
    fontSize: '1rem',
  }
  // action style
  const actionSX = {
    mt: 0.75,
    ml: 1,
    top: 'auto',
    right: 'auto',
    alignSelf: 'flex-start',
    transform: 'none'
  };
  return (
    <MyCard sx={{ width: "100%", padding: 1 }} content={false}>
      <List
        component="nav"
        sx={{
          px: 0,
          py: 0,
          '& .MuiListItemButton-root': {
            py: 1.5,
            // '& .MuiAvatar-root': avatarSX,
            '& .MuiListItemSecondaryAction-root': { ...actionSX, position: 'relative' }
          }
        }}
      >
        <ListItemButton sx={{ alignContent: "center", marginY: 1 }} >
          <ListItemAvatar>
            <Avatar sx={{ ...avatarSX, bgcolor: '#5F3237', color: '#F44336' }}>
              <TrackChangesSharpIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={<Typography variant="subtitle1"> Goals</Typography>} />
          <ListItemSecondaryAction >
            <Avatar sx={{ ...goToSX, bgcolor: '#47484D' }}>
              <KeyboardArrowRightIcon />
            </Avatar>
          </ListItemSecondaryAction>
        </ListItemButton>
        <ListItemButton sx={{ alignContent: "center", paddingY: 2, marginY: 1 }} >
          <ListItemAvatar>
            <Avatar sx={{ ...avatarSX, bgcolor: '#283267', color: '#5766B7' }}>
              <LunchDiningIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={<Typography variant="subtitle1"> Popular Dishes</Typography>} />
          <ListItemSecondaryAction>
            <Avatar sx={{ ...goToSX, bgcolor: '#47484D' }}>
              <KeyboardArrowRightIcon />
            </Avatar>
          </ListItemSecondaryAction>
        </ListItemButton>
        <ListItemButton sx={{ alignItems: "center" }} >
          <ListItemAvatar>
            <Avatar sx={{ ...avatarSX, bgcolor: '#214A60', color: '#1FA1DF' }}>
              <MenuBookOutlined />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={<Typography variant="subtitle1"> Menus</Typography>} />
          <ListItemSecondaryAction>
            <Avatar sx={{ ...goToSX, bgcolor: '#47484D' }}>
              <KeyboardArrowRightIcon />
            </Avatar>
          </ListItemSecondaryAction>
        </ListItemButton>
      </List>
    </MyCard>

  )
}