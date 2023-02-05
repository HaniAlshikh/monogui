import { useState } from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  menuClasses,
  useProSidebar,
} from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";

const Layout = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState("Audit");
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
    useProSidebar();

  const menuItemStyles = {
    root: {
      color: colors.grey[80],
    },
    icon: {
      [`&.${menuClasses.active}`]: {
        color: colors.primary.dark,
      },
    },
    button: {
      [`&.${menuClasses.active}`]: {
        color: colors.primary.dark,
        boxSizing: "borderBox",
        borderRight: ".4em solid",
        borderRightColor: colors.primary.dark,
      },
      "&:hover": {
        color: colors.primary.dark,
        background: "transparent",
      },
    },
  };

  return (
    <Sidebar
      backgroundColor={theme.palette.background.default}
      rootStyles={{
        color: colors.grey[80],
        borderRightColor: colors.grey[94],
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        alignItems="left"
      >
        <Box flex="1" sx={{ m: collapsed ? 2 : 5 }}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <img
              alt="profile-user"
              width={collapsed ? "100%" : "60%"}
              src={`../../assets/m8.svg`}
              style={{ cursor: "pointer" }}
            />
            {!collapsed && (
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.primary.dark}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Monoskope
                </Typography>
              </Box>
            )}
          </Box>
        </Box>

        <Box
          flex="1"
          // sx={{ mt: 15 }}
          // display="flex"
          // justifyContent="center"
          // flexDirection="column"
          // alignItem="stretch"
        >
          <Menu iconShape="square" menuItemStyles={menuItemStyles}>
            <Item
              title="Dashboard"
              to="/dashboard"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Clusters"
              to="/clusters"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Users"
              to="/users"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Audit"
              to="/audit"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Menu>
        </Box>

        <Box
          flex="1"
          display="flex"
          height="100%"
          // justifyContent="center"
          alignItems="flex-end"
        >
          <Menu menuItemStyles={menuItemStyles}>
            <MenuItem
              onClick={() => collapseSidebar()}
              icon={
                collapsed ? (
                  <KeyboardArrowRightOutlinedIcon />
                ) : (
                  <KeyboardArrowLeftOutlinedIcon />
                )
              }
            ></MenuItem>
          </Menu>

          {/* <IconButton onClick={() => collapseSidebar()} color={colors.grey[80]}>
          {collapsed ? (
              <KeyboardArrowRightOutlinedIcon />
            ) : (
              <KeyboardArrowLeftOutlinedIcon />
            )}
          </IconButton> */}
        </Box>
      </Box>
    </Sidebar>
  );
};

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const active = selected === title;
  return (
    <Box sx={{ py: 3 }}>
      <MenuItem
        active={active}
        onClick={() => setSelected(title)}
        icon={icon}
        component={<Link to={to} />}
      >
        <Typography variant="h3" fontWeight={active ? 700 : 400}>
          {title}
        </Typography>
      </MenuItem>
    </Box>
  );
};

export default Layout;
