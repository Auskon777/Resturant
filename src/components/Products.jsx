import React from "react";
import {Box, Paper, Alert, Stack, Typography, Divider} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import ProductCart from "./ProductCart";
import ProductsList from "./ProductsList";
import {Container} from "@mui/material";
import Banner from "../images/Sina-Priyae.jpg";

export default function Products() {
  return (
    <div>
      <Container>
        <Box
          display={"flex"}
          width={"60%"}
          sx={{justifyContent: "space-between"}}
        >
          <Box
            display={"flex"}
            sx={{
              alignItems: "center",
              margin: "70px",
              display: "block",
            }}
          >
            <Box>
              <Typography variant="h6" color="secondary">
                {" "}
                Our Special Dish
              </Typography>
            </Box>
            <Box>
              <Typography variant="h4"> Salad </Typography>
            </Box>
          </Box>
          <Box sx={{marginTop: "50px"}}>
            <img src={Banner} width={"200px"} height={"200px"} alt="Banner" />
          </Box>
        </Box>
      </Container>

      <Box
        sx={{
          display: "flex",
          margin: "50px",
          justifyContent: "center",
        }}
      >
        <Box width="100px" borderBottom="2px solid purple" marginTop="50px">
          <Typography variant="h4" align="center">
            MENU
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: "1rem ",
        }}
      >
        <Grid
          container
          columnSpacing={{xs: 1.5, sm: 2, md: 4}}
          padding="1rem"
          sx={{maxWidth: "1200px"}}
        >
          {ProductsList.map((Products, key) => (
            <Grid item xs={6} sm={3} md={2}>
              <ProductCart key={key} data={Products} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
