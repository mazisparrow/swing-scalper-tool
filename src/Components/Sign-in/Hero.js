import React from "react";
import { Grid, Container, Box, Typography, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Logo from "../../assets/images/logo.png";
import SignIn from "./Login";

export default function Hero() {
  return (
    <div className="hero-section">
      <Container>
        <Grid container justifyContent="center">
          <Grid item lg={6} md={6} sm={8} xs={10}>
          <Card sx={{ maxWidth: 450 }} className="card-main">
              <CardContent>
              <Typography variant="h4" className="RELIABLE">
                Welcome to SwingScalp!
                </Typography>
                <SignIn />
              </CardContent>
              <CardContent>
              <Typography variant="body2" className="RELIABLE3">
              For a Limited Time, Gain 14 days of Unlimited Access to SwingScalp.com for just $12.99! An Unbeatable Value, With Proven Results!
              </Typography>
              </CardContent>
              </Card>
          </Grid>
          <Grid item lg={6} md={6} sm={8} xs={10}>
            <Box className="hero-reliable">
              <Typography variant="h4" className="RELIABLE">
                <span className="plan">Guidance for more profitable trading </span>
              </Typography>
              <Typography variant="h6" className="RELIABLE2">
                <span className="plan2">With This Innovative Platform, 
              You Can; </span>
              </Typography>
              <Typography className="RELIABLE3">
Log and Track Your Trades in A Responsive Trading Journal with Real-Time Price Updates</Typography>
<Typography className="RELIABLE3">
Get a Precise Knowledge of the Risk vs. Reward on Each Trade Before You Buy</Typography>
<Typography className="RELIABLE3">
Utilize Our Complimentary Breakout Scanner to Discover Stocks at Undervalued Prices</Typography>
<Typography className="RELIABLE3">
Become A More Disciplined Trader and Watch Your Profits Grow!</Typography>
            </Box>
            <img src={Logo} width="100%" height="auto" />
            <Box className="hero-reliable"></Box>
            <Typography variant="body2" className="RELIABLE3">
              Enjoy exclusive access to trade streams from All 19 Exchanges in Real Time with our Premium Membership.</Typography>
              <Typography variant="body2" className="RELIABLE2">
                Always evaluate <span className="plan3"> RISK</span> before{" "}
                <span className="plan">REWARD.</span>
              </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
