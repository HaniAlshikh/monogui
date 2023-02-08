import {Box, Typography, useTheme} from "@mui/material";
import {tokens} from "../../theme";

const Header = ({title, subtitle}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box mb={3}>
            <Typography
                variant="h1"
                color={colors.primary.default}
                fontWeight="bold"
                sx={{mb: 1}}
            >
                {title}
            </Typography>
            <Typography variant="h5" color={colors.grey[40]}>
                {subtitle}
            </Typography>
        </Box>
    );
};

export default Header;
