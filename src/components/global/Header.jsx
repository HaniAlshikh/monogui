import {Box, FormControl, InputBase, MenuItem, Select, styled, Typography, useTheme} from "@mui/material";
import {tokens} from "../../theme";

const Header = ({suffix, subtitle, currentValue, options = [], handleChange}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


    return (
        <Box mb={3}>
            <Box display="flex" alignItems={"baseline"} mb={1}>
                <FormControl>
                    {/*<InputLabel id="demo-simple-select-label">RemoveMe</InputLabel>*/}
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={currentValue}
                        // label={"RemoveMe"}
                        input={<BootstrapInput/>}
                        onChange={handleChange}
                    >
                        {options.map((v) => (
                            <MenuItem key={v} value={v}>{v}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <Typography
                    variant="h1"
                    color={colors.primary.default}
                    fontWeight="bold"
                    // sx={{mb: 1, ml: 2,}}
                >
                    {suffix}
                </Typography>
            </Box>
            <Typography variant="h5" color={colors.grey[80]}>
                {subtitle}
            </Typography>
        </Box>
    );
};

const BootstrapInput = styled(InputBase)(({theme}) => ({
    'label + &': {
        // marginBottom: theme.spacing(3),
    },
    '& .MuiInputBase-root': {
        // paddingBottom: `${theme.spacing(1)} !important`,
    },
    '& .MuiSelect-nativeInput': {
        display: "none",
    },
    '& .MuiSelect-icon': {
        top: "80%",
        left: "80%",
        // bottom: "100%",
        color: theme.palette.primary.dark,
    },
    '& .MuiInputBase-input': {
        // borderRadius: 4,
        // position: 'relative',
        // backgroundColor: theme.palette.background.paper,
        // marginBottom: theme.spacing(3),
        color: theme.palette.primary.dark,
        border: '0px solid #ced4da',
        fontSize: theme.typography.h1.fontSize,
        fontWeight: theme.typography.fontWeightBold,
        paddingRight: `${theme.spacing(1.5)} !important`,
        minHeight: "auto !important",
        // padding: '0px 0px 0px 0px',
        // display: "block",
        // margin: "0px auto",
        // transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        // fontFamily: [
        //     '-apple-system',
        //     'BlinkMacSystemFont',
        //     '"Segoe UI"',
        //     'Roboto',
        //     '"Helvetica Neue"',
        //     'Arial',
        //     'sans-serif',
        //     '"Apple Color Emoji"',
        //     '"Segoe UI Emoji"',
        //     '"Segoe UI Symbol"',
        // ].join(','),
        // '&:focus': {
        //     borderRadius: 4,
        //     borderColor: '#80bdff',
        //     boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        // },
    },
}));

export default Header;
