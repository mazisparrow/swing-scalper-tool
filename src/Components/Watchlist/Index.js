import React from 'react'
import Navbar from '../Dashboard/navbar'
import { Box } from '@mui/system'
import Footer from './Footer'
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import { process } from "@progress/kendo-data-query";
import products from "./products.json";
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
    const [dataState, setDataState] = React.useState(initialDataState);
    return (
        <div>
            <Navbar/>
            <Box  my={12} mb={15} >
            <Grid
      pageable={true}
      sortable={true}
      filterable={true}
      style={{
        height: "100%",
        width: "100%"
      }}
      data={process(products, dataState)}
      {...dataState}
      onDataStateChange={(e) => {
        setDataState(e.dataState);
      }}
    >
      <Column field="ProductID" title="ID" width="80px" filterable={false} />
      <Column field="ProductName" title="Ticker" filterable={false} />
      <Column field="UnitPrice" title="Price" />
      <Column field="UnitPrice" title="Stop Loss" filterable={false} />
      <Column field="UnitPrice" title="Price Target" filterable={false} />
      <Column field="UnitPrice" title="Risk/Reward(per 1x)" filter="numeric" />
      <Column field="UnitPrice" title="RSI" filter="numeric" />
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
    </Grid>
            </Box>
            <Footer/>

        </div>
    )
}
