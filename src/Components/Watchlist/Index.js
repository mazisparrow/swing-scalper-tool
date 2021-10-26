import SyncIcon from "@mui/icons-material/Sync";
import React from "react";
import Navbar from "../Dashboard/navbar";
import { Box } from "@mui/system";
import Footer from "./Footer";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import { process } from "@progress/kendo-data-query";
import products from "./products.json";

import { Context as WatchListsContext } from "../../context/WatchListContext";
import { Context as AuthContext } from "../../context/AuthContext";
const initialDataState = {
  sort: [
    {
      field: "code",
      dir: "asc",
    },
  ],
  take: 25,
  skip: 0,
};

export default function Index() {
  const { state } = React.useContext(AuthContext);
  const {
    listWatchLists,
    state: { watchLists },
  } = React.useContext(WatchListsContext);

  React.useEffect(() => {
    listWatchLists({ token: state.token });
  }, [state.token]);

  const [dataState, setDataState] = React.useState(initialDataState);
  return (
    <div>
      <Navbar />
      {/* <SyncIcon /> */}
      <Box my={12} mb={15}>
        <Grid
          pageable={true}
          sortable={true}
          filterable={true}
          style={{
            height: "100%",
            width: "100%",
          }}
          data={process(watchLists, dataState)}
          {...dataState}
          onDataStateChange={(e) => {
            setDataState(e.dataState);
          }}
        >
          <Column field="id" title="ID" width="80px" filterable={false} />
          <Column field="createdAt" title="Created At" filterable={false} />
          <Column field="ticker" title="Ticker" />
          <Column field="buyPrice" title="But Price" filter="numeric" />
          <Column field="priceTargets" title="Price Targets" filter="numeric" />

          <Column
            field="Buy Zone"
            filter="boolean"
            cell={(props) => (
              <td>
                <input
                  disabled={true}
                  type="checkbox"
                  checked={props.dataItem[props.field || ""]}
                />
              </td>
            )}
          />
          <Column
            field="Buy Trigger"
            filter="boolean"
            cell={(props) => (
              <td>
                <input
                  disabled={true}
                  type="checkbox"
                  checked={props.dataItem[props.field || "true"]}
                />
              </td>
            )}
          />

          <Column field="stopLoss" title="Stop Loss" filter="numeric" />
        </Grid>
      </Box>
      <Footer />
    </div>
  );
}
