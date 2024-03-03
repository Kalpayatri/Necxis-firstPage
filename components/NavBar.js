import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
  Avatar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const NavBar = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#EEF5FF",
        boxShadow: "none",
        width: "100%",
        height: isSmallScreen ? "80px" : "81px",
        // left: 0,
        // right: 0,
        zIndex: 1,
      }}
    >
      <Toolbar
        sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: isSmallScreen ? "0.6rem" : "0.5rem 0.9rem", 
        }}
      >
        <Typography variant="h6" component="div">
          <img
            src="/Necxis.svg"
            alt="Logo"
            style={{
              width: isSmallScreen ? "60px" : "120px",
              height: isSmallScreen ? "20px" : "40px",
              marginLeft: isSmallScreen ? "0.5rem" : "2rem",
            }}
          />
        </Typography>
        <div style={{ position: "relative" }}>
          <InputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            sx={{
              m: 1,
              backgroundColor: "white",
              width: isSmallScreen ? "190px" : "484.47px",
              height: isSmallScreen ? "40px" : "40px",
              borderRadius: "0.4rem",
              color: "#D9D9D9",
              fontSize: isSmallScreen ? "0.8rem" : "1.1rem",
              paddingLeft: "3rem", 
            }}
          />
          <IconButton
            sx={{
              position: "absolute",
              left: "10px", 
              top: "50%",
              transform: "translateY(-50%)",
              backgroundColor: "transparent", 
            }}
          >
            <SearchIcon
              sx={{
                // width: isSmallScreen ? "25px" : "30px",
                // height: isSmallScreen ? "25px" : "30px",
                color: "#000000",
              }}
            />
          </IconButton>
        </div>
        {!isSmallScreen && (
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src="/home.svg"
              alt="Logo"
              style={{ width: "48px", height: "40px", marginRight: "7rem" }}
            />
            <img
              src="/prize.svg"
              alt="Logo"
              style={{ width: "48px", height: "40px" }}
            />
          </div>
        )}
        {!isSmallScreen && (
          <Avatar
            alt="Avatar"
            src="/avatarOne.svg"
            sx={{
              marginRight: "2rem",
              width: "48px",
              height: "48px",
              marginLeft: "1rem",
            }}
          />
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
