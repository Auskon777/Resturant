import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {addItem} from "./store/CartSlice";

import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Divider,
} from "@mui/material";

export default function ProductCart(props) {
  const carts = useSelector((state) => state.cart.items);
  console.log(carts);
  const dispatch = useDispatch();

  const {id, name, price, img} = props.data;

  return (
    <Card style={{width: "144px", marginBottom: "10px"}}>
      <CardMedia
        component="img"
        image={img}
        style={{height: "144px", width: "144px"}}
      />
      <CardContent>
        <Typography gutterBottom variant="body2" component="div">
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
          onClick={() => dispatch(addItem({id, name, price, img}))}
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}
