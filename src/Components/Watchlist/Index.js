import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import { CardHeader } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { Grid as MaterialGrid } from "@mui/material";

import Navbar from "../Dashboard/navbar";
import { LinearGaugeComponent } from "./LinearGaugeComponent";
import { RadialGaugeComponent } from "./RadialGaugeComponent";
import { ArcGaugeComponent } from "./ArcGaugeComponent";

export default function Index() {
  const MyLinearGaugeComponent = (props) => {
    return <LinearGaugeComponent {...props} />;
  };

  const MyRadialGaugeComponent = (props) => {
    return <RadialGaugeComponent {...props} />;
  };

  const MyArcGaugeComponent = (props) => {
    return <ArcGaugeComponent {...props} />;
  };

  return (
    <>
      <Navbar />

      {/* Search Section*/}
      <MaterialGrid container justifyContent="center" style={{ marginTop: "30px" }}>
        <Paper
          component="form"
          sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: "50%" }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1, fontSize: "1.5rem" }}
            placeholder="Search Watch List"
            inputProps={{ "aria-label": "search watchList" }}
          />

          <IconButton type="button" sx={{ p: "10px", alignSelf: "center" }} aria-label="search">
            <Button
              style={{ backgroundColor: "#9F3D65", color: "white" }}
              variant="contained"
              href="#"
            >
              Search
            </Button>
          </IconButton>
        </Paper>
      </MaterialGrid>

      <div
        style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}
      >
        <Box my={12} mb={15}>
          <Grid
            style={{
              textAlign: "center",
              fontSize: "1.3rem",
              height: "100%",
            }}
            data={[{ ticker: "hello", quantity: 100, buyPrice: 150 }]}
          >
            <Column field="ticker" title="Ticker" filterable={false} editable={false} />
            <Column field="price" title="Price" filterable={false} editable={false} />
            <Column field="stopLoss" title="Stop Loss" filterable={false} editable={false} />
            <Column field="priceTarget" title="Price Target" filterable={false} editable={false} />
            <Column field="priceTarget" title="Risk/Reward" filterable={false} editable={false} />
          </Grid>
        </Box>
      </div>

      <MaterialGrid sx={{ marginTop: "5rem" }} container>
        <MaterialGrid item xs={12}>
          <MaterialGrid container justifyContent="space-around" spacing={0} style={{ padding: 10 }}>
            <MaterialGrid className="guage" item sx={{ maxWidth: 345, flexBasis: 350 }}>
              <CardHeader title="RSI" />
              <MyRadialGaugeComponent />
            </MaterialGrid>
            <MaterialGrid item sx={{ maxWidth: 345, flexBasis: 300 }} className="guage">
              <CardHeader title="Buy Zone" />
              <MyLinearGaugeComponent />
            </MaterialGrid>
            <MaterialGrid item sx={{ maxWidth: 345, flexBasis: 300 }} className="guage">
              <CardHeader title="Buy Tigger" />
              <MyArcGaugeComponent />
            </MaterialGrid>
          </MaterialGrid>
        </MaterialGrid>
      </MaterialGrid>
    </>
  );
}
{
}
