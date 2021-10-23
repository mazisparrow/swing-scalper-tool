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
  take: 10,
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
        height: "400px",
      }}
      data={process(products, dataState)}
      {...dataState}
      onDataStateChange={(e) => {
        setDataState(e.dataState);
      }}
    >
      <Column field="ProductID" title="ID" width="80px" filterable={false} />
      <Column field="ProductName" title="Name" width="250px" />
      <Column field="UnitPrice" title="Price" filter="numeric" width="150px" />
      <Column
        field="UnitsInStock"
        title="In stock"
        filter="numeric"
        width="150px"
      />
      <Column
        field="Discontinued"
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
    </Grid>
            </Box>
            <Footer/>

        </div>
    )
}
