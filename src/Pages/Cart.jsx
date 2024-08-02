import React, {useState} from "react";
import ProductList from "../components/ProductsList";
import {Box, Button, Typography, Grid, Container} from "@mui/material";
import CartItem from "../components/CartItem";
import {purchaseSuccess} from "../components/store/CartSlice";
import {useSelector, useDispatch} from "react-redux";
import {payment} from "../components/BalanceSlice";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import {Link} from "react-router-dom";

export default function Cart() {
  const carts = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const balance = useSelector((state) => state.balance.balance);
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);

  //function to deduct money
  const handleDeductMoney = (e) => {
    if (balance >= Number(totalPrice)) {
      setError("");
      dispatch(payment(Number(totalPrice)));
      dispatch(purchaseSuccess());
      setError(null);
    } else {
      setError("Insufficient balance to complete the purchase.");
    }
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 5000); // 5 seconds
  };

  return (
    <div>
      {carts.length > 0 ? (
        <Typography variant="h5" align="center">
          Cart Summary
        </Typography>
      ) : (
        <Typography variant="h5" align="center">
          Your Cart is Empty!
        </Typography>
      )}

      <div style={{marginBottom: "50px"}}>
        <Stack sx={{width: "100%"}} spacing={2}>
          {open && !error && (
            <Alert severity="success">Purchase Successful </Alert>
          )}
        </Stack>
      </div>
      {carts.length > 0 && <h3> Subtotal: N{totalPrice}</h3>}
      <Container>
        <Grid container>
          <Grid item xs>
            {carts.map((item, key) => (
              <CartItem key={key} data={item} />
            ))}
          </Grid>
        </Grid>
        <Box style={{marginTop: "50px"}}>
          {carts.length > 0 ? (
            <Button
              onClick={handleDeductMoney}
              variant="contained"
              color="secondary"
            >
              Pay (NGN {totalPrice})
            </Button>
          ) : (
            <Link to="/">
              <Button variant="contained" color="secondary">
                Start Shopping
              </Button>
            </Link>
          )}
        </Box>
        <div style={{marginBottom: "100px"}}>
          {" "}
          {open && error && (
            <Stack sx={{width: "100%"}} spacing={2}>
              <Alert severity="error">{error}</Alert>
            </Stack>
          )}
        </div>
      </Container>
    </div>
  );
}
