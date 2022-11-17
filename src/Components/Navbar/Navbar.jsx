import React, { useContext, useState } from "react";
import {
  alpha,
  AppBar,
  Badge,
  Box,
  Button,
  IconButton,
  InputBase,
  Menu,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { AccountCircle } from "@mui/icons-material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import MoreIcon from "@mui/icons-material/MoreVert";
import "./Navbar.css";
import LiveSearch from "../LiveSearch/LiveSearch";
import { basketContext } from "../../context/BasketContextProvider";
import { authContext } from "../../context/AuthContextProvider";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
const Navbar = () => {
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const { basketCount } = React.useContext(basketContext);

  const { user, handleLogout } = React.useContext(authContext);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}>
      <Link
        to="/"
        style={{ color: "black", paddingLeft: "10px", paddingRight: "10px" }}>
        {user.email ? (
          user.email
        ) : (
          <Link to="/auth" style={{ color: "black" }}>
            <MenuItem onClick={handleMenuClose}>Войти</MenuItem>
          </Link>
        )}
      </Link>

      <MenuItem onClick={handleLogout}>Выйти</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}>
      <MenuItem>
        {user.email ? (
          user.email
        ) : (
          <Link to="/auth">
            <IconButton
              size="small"
              sx={{ color: "black", paddingLeft: "32px" }}>
              Войти
            </IconButton>
          </Link>
        )}
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"></IconButton>
        <Button sx={{ color: "black" }} onClick={handleLogout}>
          Выход
        </Button>
      </MenuItem>
    </Menu>
  );
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        className="navbar-hover"
        position="static"
        style={{ backgroundColor: "black" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}>
            {
              <img
                src="https://i.pinimg.com/originals/86/52/45/865245bd7f79289e656e81bb7ab54a5f.gif"
                style={{ width: "50%" }}
                alt="logo"
              />
            }
          </Typography>
          <LiveSearch />
          <Box
            sx={{
              display: "flex",
              width: "80%",
              justifyContent: "space-around",
              flexWrap: "wrap",
              textAlign: "center",
            }}>
            <Link className="gain-center" to="/">
              Главная
            </Link>
            <Link className="gain-center" to="/mainsquad">
              Стартовый состав
            </Link>
            <Link className="gain-center" to="/fanzone">
              Фан-зона
            </Link>
            {user.email === "isken60@gmail.com" ? (
              <Link className="gain-center" to="/add">
                Добавить игрока
              </Link>
            ) : null}
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit">
              <Link to="/basket">
                <Badge badgeContent={basketCount} color="error">
                  <ShoppingCartCheckoutIcon />
                </Badge>
              </Link>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit">
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit">
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
};

export default Navbar;
