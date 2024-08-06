import React from 'react';
import { Card, CardContent, CardHeader, Typography, Box, List, ListItem, ListItemAvatar, Avatar, ListItemText, Rating } from '@mui/material';
import { styled } from '@mui/material/styles';
import { MyCard } from './MyCard';

// Styled component for CardContent with scrollbar
const ScrollableCardContent = styled(CardContent)(({ theme }) => ({
  maxHeight: '400px', // Adjust as needed
  overflowY: 'auto',
  padding: '0px',
  // backgroundColor: "red"
}));

const rows = [
  { name: "Jenny Wilson", rating: 4, feedback: "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome had a burger over groems (gluten-fres) which was also very gooit. They were very conscientious about gluten allergies" },
  { name: "Dianne Russell", rating: 5, feedback: "We aroyed the Eggs Benettct servest sin bread and hat coffee in homemade focaccia Perfect service" },
  { name: "Devon Lane", rating: 4, feedback: "Normally wings are wings but theirs are lean meaty and tender and" },
  { name: "Kristin Watson", rating: 3, feedback: "$65.00" },
  { name: "John Doe", rating: 4, feedback: "We aroyed the Eggs Benettct servest sin bread and hat coffee in homemade focaccia Perfect service" },
  { name: "George W", rating: 1, feedback: "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome had a burger over groems (gluten-fres) which was also very gooit. They were very conscientious about gluten allergies" }
];


const Feedbacks = () => {
  return (
    <MyCard>
      <CardHeader
        title={<Typography sx={{ fontWeight: "800" }} component="div" variant="h5">
          Customer's Feedback
        </Typography>}
        sx={{ textAlign: 'left' }} // Align header text to the left
      />
      <ScrollableCardContent className='feedback'>
        <List sx={{ padding: "0px" }}>
          {rows.map((row, index) => (
            <ListItem alignItems="flex-start" key={index} divider>
              <Box display="flex" flexDirection="column" width="100%">
                <Box display="flex" alignItems="center" mb={1}>
                  <Avatar sx={{ mr: 2 }}>{row.name.charAt(0)}</Avatar>
                  <Typography variant="subtitle1">{row.name}</Typography>
                </Box>
                <Box mb={1}>
                  <Rating value={row.rating} readOnly size="small" />
                </Box>
                <Typography variant="body2" fontSize={10}>
                  {row.feedback}
                </Typography>
              </Box>
            </ListItem>
          ))}
        </List>
      </ScrollableCardContent>
    </MyCard >
  );
};

export default Feedbacks;
