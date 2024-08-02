import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {addMoney} from "../components/BalanceSlice";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const Deposit = () => {
  const balance = useSelector((state) => state.balance.balance);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState(null);

  const handleAddMoney = (e) => {
    e.preventDefault();

    if ((amount >= 100) & (amount <= 100000)) {
      dispatch(addMoney(Number(amount)));
      setError(null);
    } else {
      setError("Amount must be between N100.00 and N100,000.00");
    }
    setAmount("");
  };

  return (
    <div>
      <div style={{padding: "20px"}}>
        <h1>Balance: NGN{balance.toFixed(2)}</h1>
        <form onSubmit={handleAddMoney}>
          <TextField
            label="Enter Amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            variant="outlined"
            margin="normal"
            fullWidth
          />
          {error && (
            <Stack sx={{width: "100%"}} spacing={2}>
              <Alert severity="error">{error}</Alert>
            </Stack>
          )}
          <div style={{marginTop: "10px"}}>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleAddMoney}
              style={{marginRight: "10px"}}
            >
              Add Money
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Deposit;
