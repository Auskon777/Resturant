import {Box, Divider, Typography} from "@mui/material";
import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div style={{marginBottom: "0px"}}>
      <Box
        sx={{
          display: " flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "70px",
          marginTop: "100px",
          backgroundColor: "#2c3e50 ",
        }}
      >
        <Box>
          <Typography Variant="body2" align="center" color="white">
            powered By E-Gov Interns
          </Typography>
          <Divider />

          <Typography variant="caption" color="white">
            {" "}
            &copy; {currentYear}{" "}
          </Typography>
        </Box>
      </Box>
    </div>
  );
}
