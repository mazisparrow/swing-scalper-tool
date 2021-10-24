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
  take: 40,
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
        width: "100%",
      }}
      data={process(products, dataState)}
      {...dataState}
      onDataStateChange={(e) => {
        setDataState(e.dataState);
      }}
    >
      <Column field="ev" title="Trade" width="80px" filterable={false} />
      <Column field="sym" title="Ticker" filterable={false} />
      <Column field="x" title="Exchange ID" filterable={false} />
      <Column field="i" title="Trade ID" filterable={false} />
      <Column field="z" title="Tape" />
      <Column field="p" title="Price" filterable={false}/>
      <Column field="s" title="Trade Size" filter="numeric"  />
      <Column field="c" title="Trade Conditions" filterable={false}/>
      <Column field="t" title="Timestamp" />
    </Grid>
            </Box>
            <Footer/>

        </div>
    )
}
