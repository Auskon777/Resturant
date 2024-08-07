import React, {useState} from "react";
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
  Stack,
  Alert,
} from "@mui/material";

export default function ProductCart(props) {
  const carts = useSelector((state) => state.cart.items);
  console.log(carts);
  const dispatch = useDispatch();

  const {id, name, price, img} = props.data;
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const handleOnClick = () => {
    dispatch(addItem({id, name, price, img}));
    setError(null);
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 4000); // 5 seconds
  };

  return (
    <div>
      <div style={{marginBottom: "10px"}}>
        <Stack sx={{width: "100%"}} spacing={2}>
          {open && !error && (
            <Alert severity="success">Item added to cart </Alert>
          )}
        </Stack>
      </div>
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
            onClick={handleOnClick}
          >
            Add to cart
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
