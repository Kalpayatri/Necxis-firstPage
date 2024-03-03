import React from "react";
import {
  Paper,
  Typography,
  Box,
  useMediaQuery,
  useTheme,
  Button,
  CircularProgress,
  Divider,
  Avatar,
  Grid,
  AvatarGroup,
} from "@mui/material";
import NavBar from "./NavBar";

const HomePage = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const circularSize = isSmallScreen ? 150 : 230.49;
  const typographyVariant = isSmallScreen ? "h5" : "h4";

  return (
    <div>
      <NavBar />
      <Box sx={{ backgroundColor: "#FFFFFF", py: 16 }}>
        <Paper
          elevation={2}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            p: isSmallScreen ? 2 : 4,
            maxWidth: "100%",
            margin: "auto",
            m: isSmallScreen ? 2 : 4,
            borderRadius: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              mb: 2,
            }}
          >
            <Typography
              variant={isSmallScreen ? "body2" : "h6"}
              fontFamily="Public Sans"
              fontWeight="700"
              sx={{
                // fontSize: isSmallScreen ? "12px" : "24px",
                lineHeight: isSmallScreen ? "14.2px" : "28.2px",
              }}
              color="#D29F54"
            >
              live users:{" "}
              <span
                style={{
                  color: "black",
                  fontFamily: "Public Sans",
                  fontWeight: "700",
                  lineHeight: "28.2px",
                }}
              >
                403
              </span>
            </Typography>
            <Button
              variant="outlined"
              sx={{
                color: "#0D99FF",
                fontFamily: "Saira",
                fontWeight: 700,
                fontSize: isSmallScreen ? "16px" : "22px",
                lineHeight: isSmallScreen ? "25.37px" : "50.37px",
                textTransform: "capitalize",
                borderRadius: "10px",
                padding: isSmallScreen ? "2px 28px" : "0.1px 40px",
              }}
            >
              Join live
            </Button>
          </Box>
          <Box>
            <Box
              sx={{
                position: "relative",
                width: `${circularSize}px`,
                height: `${circularSize}px`,
                m: 10,
              }}
            >
              <CircularProgress
                size={circularSize}
                thickness={0.3}
                sx={{ color: "#0D99FF", position: "absolute", top: 0, left: 0 }}
              />
              <Box
                top={0}
                left={0}
                bottom={0}
                right={0}
                position="absolute"
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{ color: "#047BD2" }}
              >
                <Typography variant={typographyVariant}>00:15:00</Typography>
              </Box>
            </Box>
          </Box>
          <Divider sx={{ width: "104.3%" }} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              mb: 2,
              width: "130%",
            }}
          >
            <Grid container spacing={2} m={9}>
              <Grid
                item
                xs={12}
                sm={4}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    alt="Avatar"
                    src="/avatarOne.svg"
                    sx={{ width: "59px", height: "59px", marginRight: "10px" }}
                  />
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography
                      variant={isSmallScreen ? "body2" : "h5"}
                      fontFamily="Poppins"
                      fontWeight="400"
                      sx={
                        {
                          // fontSize: isSmallScreen ? "18px" : "36px",
                        }
                      }
                      lineHeight="54px"
                    >
                      Jonny
                    </Typography>
                    <Typography
                      variant={isSmallScreen ? "body2" : "h8"}
                      fontFamily="Poppins"
                      fontWeight="400"
                      sx={
                        {
                          // fontSize: isSmallScreen ? "9px" : "18px",
                        }
                      }
                      lineHeight="27px"
                      color="#BBB8B8"
                    >
                      @jonny.official
                    </Typography>
                    <Typography
                      variant={isSmallScreen ? "body2" : "h5"}
                      fontFamily="Saira"
                      fontWeight="700"
                      sx={
                        {
                          // fontSize: isSmallScreen ? "16px" : "32px",
                        }
                      }
                      lineHeight="50.37px"
                      color="#0D99FF"
                    >
                      Follow
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                sm={4}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant={isSmallScreen ? "body2" : "h6"}
                    fontFamily="Poppins"
                    fontWeight="400"
                    sx={{
                      // fontSize: isSmallScreen ? "10px" : "20px",
                    }}
                    lineHeight="30px"
                  >
                    Price
                  </Typography>
                  <Typography
                    color="#D29F54"
                    fontFamily="Petrona"
                    fontWeight="700"
                    variant={isSmallScreen ? "body2" : "h4"}
                    sx={{
                      // fontSize: isSmallScreen ? "18px" : "36px",
                    }}
                    lineHeight="40.61px"
                  >
                    $10,000.00
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                sm={4}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    color="#0D99FF"
                    fontFamily="Petrona"
                    fontWeight="700"
                    variant={isSmallScreen ? "body2" : "h4"}
                    sx={{
                      // fontSize: isSmallScreen ? "25px" : "50px",
                    }}
                    lineHeight="56.4px"
                  >
                    Join
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              width: "100%",
              mt: 2,
              pl: 4,
            }}
          >
            <Box>
              <Typography
                fontFamily="Poppins"
                fontWeight="400"
                variant={isSmallScreen ? "body2" : "h5"}
                sx={{
                  // fontSize: isSmallScreen ? "16px" : "32px",
                }}
                lineHeight="48px"
              >
                Advertisement Activity
              </Typography>
            </Box>
            <Box mt={2}>
              <Typography
                fontFamily="Poppins"
                fontWeight="400"
                lineHeight="36px"
                variant={isSmallScreen ? "body2" : "h6"}
                sx={{
                  // fontSize: isSmallScreen ? "12px" : "24px",
                }}
              >
                In this activity, divide the class with an equal number of
                students in each group. You can give any product name to each
                group—for example, soap and coconut oil. You can ask them to
                prepare an advertisement to sell these products. Students will
                plan and implement their strategies for advertising the product.
                It would be best to judge them based on costume, script,
                marketing strategy and planning. The group that meets maximum
                criteria will be considered the winner.
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              width: "100%",
              mt: 6,
              pl: 4,
            }}
          >
            <Box>
              <Typography
                fontFamily="Poppins"
                fontWeight="400"
                variant={isSmallScreen ? "body2" : "h5"}
                sx={{
                  // fontSize: isSmallScreen ? "12px" : "24px",
                }}
                lineHeight="36px"
              >
                Examples
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "2.5rem",
                padding: "4px",
                width: "100%",
                textAlign: "center",
              }}
            >
              {[1, 2, 3, 4].map((index) => (
                <Box
                  key={index}
                  sx={{
                    width: "221px",
                    height: "199px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src={"/PicOne.svg"} alt="PicOne" />
                </Box>
              ))}
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              width: "100%",
              mt: 6,
              pl: isSmallScreen ? 2 : 8,
            }}
          >
            <Box>
              <Typography
                fontFamily="Poppins"
                fontWeight="400"
                variant={isSmallScreen ? "body2" : "h5"}
                sx={{
                  // fontSize: isSmallScreen ? "12px" : "24px",
                }}
                lineHeight="36px"
              >
                Price distribution
              </Typography>
            </Box>
            <Box
              sx={{
                width: "100%",
                maxWidth: "1400px",
                height: "393px",
                mt: 6,
                border: "1px solid #D29F54",
                borderRadius: "5px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{ display: "flex", alignItems: "center", width: "100%" }}
              >
                <Typography
                  fontFamily="Poppins"
                  fontWeight="400"
                  variant={isSmallScreen ? "body2" : "h5"}
                  sx={{
                    // fontSize: isSmallScreen ? "16px" : "32px",
                    lineHeight: isSmallScreen ? "24px" : "48px",
                    textAlign: "center",
                    flex: 1,
                  }}
                >
                  Winner
                </Typography>
                <Divider flexItem />
                <Typography
                  fontFamily="Poppins"
                  fontWeight="400"
                  variant={isSmallScreen ? "body2" : "h5"}
                  sx={{
                    // fontSize: isSmallScreen ? "16px" : "32px",
                    lineHeight: isSmallScreen ? "24px" : "48px",
                    textAlign: "center",
                    flex: 1,
                  }}
                >
                  Price
                </Typography>
              </Box>
              <Divider sx={{ width: "100%", maxWidth: "60%", my: 2 }} />
              <Box
                sx={{ display: "flex", alignItems: "center", width: "100%" }}
              >
                <Typography
                  fontFamily="Poppins"
                  fontWeight="700"
                  variant={isSmallScreen ? "body2" : "h5"}
                  sx={{
                    // fontSize: isSmallScreen ? "18px" : "36px",
                    lineHeight: isSmallScreen ? "27px" : "54px",
                    textAlign: "center",
                    flex: 1,
                  }}
                >
                  #1
                </Typography>
                <Divider flexItem />
                <Typography
                  fontFamily="Poppins"
                  fontWeight="700"
                  variant={isSmallScreen ? "body2" : "h5"}
                  sx={{
                    // fontSize: isSmallScreen ? "18px" : "36px",
                    lineHeight: isSmallScreen ? "27px" : "54px",
                    textAlign: "center",
                    flex: 1,
                  }}
                >
                  $5000
                </Typography>
              </Box>
              <Divider sx={{ width: "100%", maxWidth: "60%", my: 2 }} />
              <Box
                sx={{ display: "flex", alignItems: "center", width: "100%" }}
              >
                <Typography
                  fontFamily="Poppins"
                  fontWeight="700"
                  variant={isSmallScreen ? "body2" : "h5"}
                  sx={{
                    // fontSize: isSmallScreen ? "18px" : "36px",
                    lineHeight: isSmallScreen ? "27px" : "54px",
                    textAlign: "center",
                    flex: 1,
                  }}
                >
                  #2
                </Typography>
                <Divider flexItem />
                <Typography
                  fontFamily="Poppins"
                  fontWeight="700"
                  variant={isSmallScreen ? "body2" : "h5"}
                  sx={{
                    // fontSize: isSmallScreen ? "18px" : "36px",
                    lineHeight: isSmallScreen ? "27px" : "54px",
                    textAlign: "center",
                    flex: 1,
                  }}
                >
                  $3000
                </Typography>
              </Box>
              <Divider sx={{ width: "100%", maxWidth: "60%", my: 2 }} />
              <Box
                sx={{ display: "flex", alignItems: "center", width: "100%" }}
              >
                <Typography
                  fontFamily="Poppins"
                  fontWeight="700"
                  variant={isSmallScreen ? "body2" : "h5"}
                  sx={{
                    // fontSize: isSmallScreen ? "18px" : "36px",
                    lineHeight: isSmallScreen ? "27px" : "54px",
                    textAlign: "center",
                    flex: 1,
                  }}
                >
                  #3
                </Typography>
                <Divider flexItem />
                <Typography
                  fontFamily="Poppins"
                  fontWeight="700"
                  variant={isSmallScreen ? "body2" : "h5"}
                  sx={{
                    // fontSize: isSmallScreen ? "18px" : "36px",
                    lineHeight: isSmallScreen ? "27px" : "54px",
                    textAlign: "center",
                    flex: 1,
                  }}
                >
                  $2000
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              pt: isSmallScreen ? 6 : 10,
              flexDirection: isSmallScreen ? "column" : "row",
              alignItems: isSmallScreen ? "center" : "flex-start",
            }}
          >
            <Typography
              // variant="h6"
              fontFamily="Poppins"
              fontWeight="400"
              variant={isSmallScreen ? "body2" : "h4"}
              sx={{
                // fontSize: isSmallScreen ? "18px" : "36px",
                lineHeight: isSmallScreen ? "27px" : "54px",
                textAlign: isSmallScreen ? "center" : "left",
                marginBottom: isSmallScreen ? "1rem" : 0,
              }}
              color="#8D8A8A"
            >
              Start Date <br />
              <span style={{ color: "#535353" }}>Sep 19, 10:00am</span>
            </Typography>
            <AvatarGroup
              total={14}
              sx={{
                marginTop: isSmallScreen ? "0.8rem" : 0,
                marginLeft: isSmallScreen ? 0 : "2rem",
              }}
            >
              <Avatar alt="Remy Sharp" src="/PicOne.svg" />
              <Avatar alt="Travis Howard" src="/avatarOne.svg" />
              <Avatar alt="Agnes Walker" src="/PicOne.svg" />
              <Avatar alt="Trevor Henderson" src="/avatarOne.svg" />
              <br />
              <span style={{ color: "#535353" }}>Sep 19, 10:00am</span>
            </AvatarGroup>
            <Typography
              // variant="h6"
              variant={isSmallScreen ? "body2" : "h4"}
              fontFamily="Poppins"
              fontWeight="400"
              sx={{
                // fontSize: isSmallScreen ? "18px" : "36px",
                lineHeight: isSmallScreen ? "27px" : "54px",
                textAlign: isSmallScreen ? "center" : "right",
                marginBottom: isSmallScreen ? "1rem" : 0,
              }}
              color="#8D8A8A"
            >
              End Date <br />
              <span style={{ color: "#535353" }}>Sep 25, 10:00am</span>
            </Typography>
          </Box>
        </Paper>
      </Box>
    </div>
  );
};

export default HomePage;
