import React, {useState, useEffect} from "react";
import productsList from "./ProductsList";
import {
  Grid,
  Card,
  CardMedia,
  Typography,
  CardContent,
  Divider,
  Paper,
} from "@mui/material";

export default function CartItem(props) {
  const {productId, quantity} = props.data;
  const [detail, setDetail] = useState([]);
  useEffect(() => {
    const findDetail = productsList.filter(
      (product) => product.id === productId
    )[0];
    setDetail(findDetail);
  }, [productId]);

  return (
    <Card style={{marginBottom: "20px"}}>
      <Grid container>
        <Grid item sx={4}>
          <CardMedia
            component="img"
            image={detail.img}
            style={{height: "148px", width: "148px"}}
          />
        </Grid>
        <Grid item sx={8}>
          <CardContent>
            <Typography> {detail.name}</Typography>
          </CardContent>
          <Typography> N{detail.price * quantity}</Typography>

          <Typography>Quantity: {quantity}</Typography>
        </Grid>
      </Grid>
    </Card>
  );
}
