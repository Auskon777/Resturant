import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "./CartSlice";

import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Divider,
  Box,
} from "@mui/material";

export default function ProductCart(props) {
  const items = useSelector((state) => state.cart.items);
  console.log(items);
  const dispatch = useDispatch();
  const {id, name, price, img} = props.data;
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        productId: id,
        quantity: 1,
        price: price,
      })
    );
  };

  return (
    <Card style={{width: "144px", marginBottom: "10px"}}>
      <CardMedia
        component="img"
        image={img}
        style={{height: "144px", width: "144px"}}
      />
      <CardContent>
        <Typography gutterBottom variant="body1" component="div">
          {name}
        </Typography>
        <Divider />
        <Typography
          gutterBottom
          variant="body2"
          component="div"
          style={{textAlign: "right"}}
        >
          {" "}
          N{price}
        </Typography>
      </CardContent>

      <CardActions>
        <Button
          variant="contained"
          fullWidth
          sx={{fontSize: "0.76rem"}}
          color="secondary"
          onClick={handleAddToCart}
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}
