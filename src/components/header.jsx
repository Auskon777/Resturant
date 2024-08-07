import React from "react";
import {Link} from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  IconButton,
  Badge,
  useMediaQuery,
} from "@mui/material";
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
  const IsMobile = useMediaQuery("(max-width:600px)");
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
                  <Typography variant="body1">Casa Mia</Typography>
                </IconButton>
              </Link>
            </Grid>
          </Grid>

          <Grid container justifyContent={"space-between"}>
            {IsMobile ? (
              <Grid container justifyContent={"space-between"}>
                <Grid item>
                  <Link
                    to="/Deposit"
                    style={{color: "white", textDecoration: "none"}}
                  >
                    <Typography variant="body2">
                      [NGN{balance.toFixed(2)}]
                    </Typography>
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    to="/Cart"
                    style={{color: "white", textDecoration: "none"}}
                  >
                    <Badge badgeContent={totalQuantity} color="secondary">
                      <ShoppingCartOutlinedIcon />
                    </Badge>
                  </Link>
                </Grid>
              </Grid>
            ) : (
              <Grid container justifyContent={"space-between"}>
                <Grid item>
                  <Typography variant="h6">NGN{balance.toFixed(2)}</Typography>
                </Grid>
                <Grid item>
                  <Link
                    to="/Deposit"
                    style={{color: "white", textDecoration: "none"}}
                  >
                    <Typography variant="">Deposit</Typography>
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    to="/Cart"
                    style={{color: "white", textDecoration: "none"}}
                  >
                    <Badge badgeContent={totalQuantity} color="secondary">
                      <ShoppingCartOutlinedIcon />
                    </Badge>
                  </Link>
                </Grid>
              </Grid>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
