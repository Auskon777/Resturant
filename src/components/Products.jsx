import React from "react";
import {Box, Paper, Typography} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import ProductCart from "./ProductCart";
import ProductsList from "./ProductsList";

export default function Products() {
  return (
    <div>
      <Typography variant="h4" align="center">
        MENU
      </Typography>

      <Box
        sx={{
          flexGrow: 1,
          margin: "1.5rem ",
        }}
      >
        <Grid container columnSpacing={{xs: 1, sm: 3, md: 4}} padding="1.5rem">
          {ProductsList.map((Products, key) => (
            <Grid item xs={6} sm={4} md={2} key={key}>
              <ProductCart data={Products} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
