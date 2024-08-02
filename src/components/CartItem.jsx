import React from "react";
import {removeItem, addItem} from "./store/CartSlice";
import {useDispatch} from "react-redux";
import {useMediaQuery} from "@mui/material";
import {
  Card,
  CardMedia,
  Typography,
  CardContent,
  Divider,
  Box,
  Button,
} from "@mui/material";

export default function CartItem(props) {
  const {id, name, price, img, quantity} = props.data;

  const dispatch = useDispatch();
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <div>
      {isMobile ? (
        <Card style={{marginBottom: "20px"}}>
          <Box sx={{display: "flex"}}>
            <Box>
              <CardMedia
                component="img"
                image={img}
                style={{height: "100px", width: "100px"}}
              />
            </Box>
            <Box sx={{display: "block", width: "100%"}}>
              <Box
                sx={{
                  display: "flex",
                  height: "80px",
                  justifyContent: "space-between",
                }}
              >
                <CardContent>
                  <Typography variant="body2"> {name}</Typography>
                </CardContent>
                <CardContent>
                  <Typography> N{price * quantity}</Typography>
                </CardContent>
              </Box>
              <Divider />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "10px",
                }}
              >
                <Box
                  display={"flex"}
                  sx={{
                    width: "150px",

                    justifyContent: "space-between",
                  }}
                >
                  <Button
                    variant="outlined"
                    size="small"
                    color="secondary"
                    onClick={() => dispatch(removeItem(id))}
                  >
                    <Typography variant="body2">-</Typography>
                  </Button>
                  <Box>
                    <Typography variant="body2"> {quantity}</Typography>
                  </Box>
                  <Button
                    variant="outlined"
                    size="small"
                    color="secondary"
                    onClick={() => dispatch(addItem({id, name, price}))}
                  >
                    +
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Card>
      ) : (
        <Card style={{marginBottom: "20px"}}>
          <Box sx={{display: "flex"}}>
            <Box>
              <CardMedia
                component="img"
                image={img}
                style={{height: "160px", width: "160px"}}
              />
            </Box>
            <Box sx={{display: "block", width: "100%"}}>
              <Box
                sx={{
                  display: "flex",
                  height: "80px",
                  justifyContent: "space-between",
                }}
              >
                <CardContent>
                  <Typography> {name}</Typography>
                </CardContent>
                <CardContent>
                  <Typography> N{price * quantity}</Typography>
                </CardContent>
              </Box>
              <Divider />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "10px",
                }}
              >
                <Box>
                  <CardContent>
                    <Typography>Quantity: {quantity}</Typography>
                  </CardContent>
                </Box>
                <Box
                  display={"flex"}
                  sx={{
                    width: "150px",

                    justifyContent: "space-between",
                  }}
                >
                  <Button
                    variant="outlined"
                    size="small"
                    color="secondary"
                    onClick={() => dispatch(removeItem(id))}
                  >
                    <Typography variant="body1">-</Typography>
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    color="secondary"
                    onClick={() => dispatch(addItem({id, name, price}))}
                  >
                    +
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Card>
      )}
    </div>
  );
}
