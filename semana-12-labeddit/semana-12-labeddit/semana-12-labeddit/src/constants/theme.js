import { createMuiTheme } from '@material-ui/core/styles';
import { primaryColor, outroColor } from "./colors"

const theme = createMuiTheme({
    palette: {
        primary: {
            main: primaryColor,
            contrastText: "white"
        },
        text: {
            primary: outroColor,
        }
    },
});


export default theme