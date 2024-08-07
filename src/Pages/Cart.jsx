import React, {useState} from "react";
import ProductList from "../components/ProductsList";
import {Box, Button, Paper, Typography, Grid, Container} from "@mui/material";
import CartItem from "../components/CartItem";
import {purchaseSuccess} from "../components/store/CartSlice";
import {useSelector, useDispatch} from "react-redux";
import {payment} from "../components/BalanceSlice";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import {LoadingButton} from "@mui/lab";
import {Link} from "react-router-dom";

export default function Cart() {
  const carts = useSelector((state) => state.cart.items);
  const quantity = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const balance = useSelector((state) => state.balance.balance);
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [paymentCompleted, setPaymentCompleted] = useState(false);

  //function to deduct money
  const handleDeductMoney = async (e) => {
    setLoading(true);
    setError(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 5000));
      if (balance >= Number(totalPrice)) {
        dispatch(payment(Number(totalPrice)));
        dispatch(purchaseSuccess());
        setPaymentCompleted(true);
      } else {
        setError("Insufficient balance to complete the purchase.");
      }
    } catch (error) {
      setError("Insufficient balance to complete the purchase.");
    } finally {
      setLoading(false);
    }

    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 5000);
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
      {carts.length > 0 && (
        <Container sx={{marginBottom: "20px"}}>
          {" "}
          <Paper>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                padding: "0px 15px",
              }}
            >
              <Box>
                {" "}
                <h3> Subtotal ({quantity} Items )</h3>
              </Box>
              <Box>
                <h3> N{totalPrice} </h3>
              </Box>
            </Box>
          </Paper>
        </Container>
      )}
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
            <Box>
              {loading ? (
                <LoadingButton
                  loading={loading}
                  loadingPosition="end"
                  variant="contained"
                  color="secondary"
                >
                  Pay (NGN {totalPrice})
                </LoadingButton>
              ) : (
                <Button
                  onClick={handleDeductMoney}
                  variant="contained"
                  color="secondary"
                >
                  Pay (NGN {totalPrice})
                </Button>
              )}
            </Box>
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
          {error && (
            <Stack sx={{width: "100%"}} spacing={2}>
              <Alert severity="error">{error}</Alert>
            </Stack>
          )}
        </div>
      </Container>
    </div>
  );
}
