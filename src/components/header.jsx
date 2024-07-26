import React from "react";
import {Link} from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  IconButton,
  Badge,
} from "@mui/material";
import AddCardOutlinedIcon from "@mui/icons-material/AddCardOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import {useSelector} from "react-redux";
import {useState, useEffect} from "react";

function Header() {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const carts = useSelector((state) => state.cart.items);
  useEffect(() => {
    let total = 0;
    carts.forEach((item) => (total += item.quantity));
    setTotalQuantity(total);
  }, [carts]);
  const balance = useSelector((state) => state.balance.balance);
  return (
    <>
      <AppBar>
        <Toolbar>
          <Grid container justifyContent={"space-between"}>
            <Grid item>
              <Link to={"/"}>
                <IconButton style={{color: "white", textDecoration: "none"}}>
                  {" "}
                  <RestaurantMenuIcon />
                  <Typography variant="body1">E-Resturant</Typography>
                </IconButton>
              </Link>
            </Grid>
          </Grid>

          <Grid container justifyContent={"space-between"}>
            <Grid item>
              <Typography variant="h6">NGN{balance.toFixed(2)}</Typography>
            </Grid>
            <Grid item>
              <Link
                to="/Deposit"
                style={{color: "white", textDecoration: "none"}}
              >
                <Typography fontSize={16}>Deposit</Typography>
              </Link>
            </Grid>
            <Grid item>
              <Link to="/Cart" style={{color: "white", textDecoration: "none"}}>
                <Badge badgeContent={totalQuantity} color="secondary">
                  <ShoppingCartOutlinedIcon />
                </Badge>
              </Link>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
