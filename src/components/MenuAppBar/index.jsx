import * as React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

import {
  AppBar,
  Grid,
  Box,
  Toolbar,
  IconButton,
  MenuItem,
  Menu,
  ImageListItem,
  Button,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";

import { Can, Logo } from "../index";

const pages = [{ path: "/", label: "Home" }];

const MenuAppBar = () => {
  const navigate = useNavigate();
  const { logout, user } = useAuth0();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleProfileMenu = (event) => setAnchorEl(event.currentTarget);
  const handleMenu = (path) => (event) => navigate(path);

  const handleLogout = () => {
    setAnchorEl(null);
    logout({ logoutParams: { returnTo: window.location.origin } });
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar elevation={0} position="fixed" color="default">
        <Toolbar>
          <Grid container spacing={2} direction="row">
            <Grid container item xs={8} direction="row" sx={{ paddingTop: 20 }}>
              <Grid item container lg={4} md={5} xs={8}>
                <Logo />
              </Grid>
              <Can>
                <Grid
                  item
                  container
                  lg={8}
                  md={7}
                  xs={5}
                  sx={{ display: { xs: "none", md: "flex" } }}
                >
                  {pages.map((page, index) => (
                    <Button key={index} onClick={handleMenu(page?.path)}>
                      {page?.label}
                    </Button>
                  ))}
                </Grid>
              </Can>
            </Grid>

            <Grid container item md={4} xs={4} justifyContent="flex-end">
              <Can>
                <>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleProfileMenu}
                    color="inherit"
                  >
                    {user ? (
                      <ImageListItem
                        sx={{
                          width: "20px",
                          height: "20px",
                          borderRaduis: "100%",
                        }}
                      >
                        <img src={user?.picture} alt={user?.name} />
                      </ImageListItem>
                    ) : (
                      <AccountCircle />
                    )}
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    {pages.map((page, index) => (
                      <MenuItem
                        key={index}
                        sx={{ display: { md: "none" } }}
                        onClick={handleMenu(page?.path)}
                      >
                        {page?.label}
                      </MenuItem>
                    ))}
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  </Menu>
                </>
              </Can>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MenuAppBar;
