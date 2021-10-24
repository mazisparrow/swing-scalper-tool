import React from 'react'
import Navbar from '../Dashboard/navbar'
import { Box } from '@mui/system'
import Footer from './Footer'
import {
    Grid,
    GridColumn as Column,
    GridToolbar,
  } from "@progress/kendo-react-grid";
  import { sampleProducts } from "./sample-products";
  import { MyCommandCell } from "./myCommandCell";
  import { DropDownCell } from "./myDropDownCell";
  import { insertItem, getItems, updateItem, deleteItem } from "./services";
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
    const editField = "inEdit";
    const [data, setData] = React.useState(sampleProducts);
  
    const CommandCell = (props) => (
      <MyCommandCell
        {...props}
        edit={enterEdit}
        remove={remove}
        add={add}
        discard={discard}
        update={update}
        cancel={cancel}
        editField={editField}
      />
    );
  
    const remove = (dataItem) => {
      const newData = deleteItem(dataItem);
      setData(newData);
    };
  
    const add = (dataItem) => {
      dataItem.inEdit = true;
      const newData = insertItem(dataItem);
      setData(newData);
    };
  
    const update = (dataItem) => {
      dataItem.inEdit = false;
      const newData = updateItem(dataItem);
      setData(newData);
    };
  
    const discard = (dataItem) => {
      const newData = [...data];
      newData.splice(0, 1);
      setData(newData);
    };
  
    const cancel = (dataItem) => {
      const originalItem = getItems().find(
        (p) => p.ProductID === dataItem.ProductID
      );
      const newData = data.map((item) =>
        item.ProductID === originalItem.ProductID ? originalItem : item
      );
      setData(newData);
    };
  
    const enterEdit = (dataItem) => {
      let newData = data.map((item) =>
        item.ProductID === dataItem.ProductID ? { ...item, inEdit: true } : item
      );
      setData(newData);
    };
  
    const itemChange = (event) => {
      const field = event.field || "";
      const newData = data.map((item) =>
        item.ProductID === event.dataItem.ProductID
          ? { ...item, [field]: event.value }
          : item
      );
      setData(newData);
    };
  
    const addNew = () => {
      const newDataItem = {
        inEdit: true,
        status: true,
        ProductID: new Date().getMilliseconds(),
      };
      setData([newDataItem, ...data]);
    };
  
    return (
        <div>
            <Navbar/>
            <Box my={12} mb={15}>
            <Grid
            pageable={true}
            sortable={true}
            filterable={true}
            style={{
              height: "100%",
              width: "100%",
            }}
      data={data}
      onItemChange={itemChange}
      editField={editField}
      dataItemKey={"FirstOrderedOn"}
      
    >
      <GridToolbar>
        <button title="Add new" className="k-button k-primary" onClick={addNew}>
          Add new
        </button>
      </GridToolbar>
      <Column cell={CommandCell} width="40px" filterable={false} />
      <Column field="openDate" title="Open Date" editor="date" format="{0:d}" />
      <Column field="ticker" title="Ticker" filterable={false} />
      <Column field="quantity" title="Qty" filterable={false} />
      <Column field="buyPrice" title="Avg Price" filterable={false} />
      <Column field="stopLoss" title="Stop Loss" filterable={false} />
      <Column field="priceTgt" title="Price Target" filterable={false} />
      <Column field="tradeRisk" title="Risk" editable={false} filterable={false} />
      <Column field="tradeReward" title="Reward" editable={false} filterable={false} />
      <Column field="plPercent" title="P/L %" editable={false} filterable={false} />
      <Column field="sellDate" title="Sell Date" editor="date" format="{0:d}"/>
      <Column field="sellPrice" title="Sell Price" editor="numeric" filterable={false} />
      <Column field="status" title="Status" cell={DropDownCell} width="100px" />
      <Column field="strategy" title="Strategy" width="150px" editable={false} filterable={false} />
    </Grid>
            </Box>
            <Footer/>

        </div>
    )
}
