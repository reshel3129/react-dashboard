import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#021526',
            // light: will be calculated from palette.primary.main,
            dark: '#191919',
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            main: '#fff',
            light: '#fff',
            // dark: will be calculated from palette.secondary.main,
            contrastText: '#fff',
        },
        card: {
            main: '#191919',
        }
    },
});

export default theme;