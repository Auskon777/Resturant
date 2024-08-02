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
