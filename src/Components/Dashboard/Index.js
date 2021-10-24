import React from 'react'
import Navbar from './navbar'
import { Box } from '@mui/system'
import Footer from './Footer'
import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartTitle,
    ChartLegend,
  } from "@progress/kendo-react-charts";
  import "hammerjs";
  const categories = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  const series = [
    {
      name: "Loss",
      data: [3.907, 7.943, 7.848],
    },
    {
      name: "Profit",
      data: [0.21, 0.375, 1.161],
    },
    {
      name: "Risk",
      data: [1.988, 2.733, 3.994],
    },
    {
      name: "Reward",
      data: [1.988, 2.733, 3.994],
    },
  ];
  const areaData = [
    {
      name: "World",
      data: [3.988, 3.733, 3.994],
    },
    {
      name: "Germany",
      data: [2.21, 2.375, 2.161],
    },
    {
      name: "Russian Federation",
      data: [1.743, 1.295, 1.175],
    },
    {
      name: "India",
      data: [0.907, 0.943, 0.848],
    },
  ];
  const pieData = [
    {
      name: "LOSS",
      share: 12800,
    },
    {
      name: "OPEN TRADES",
      share: 3499,
      explode: true,
    },
    {
      name: "PROFIT",
      share: 16909,
    },
  ];

  
export default function Index() {
    return (
        <div>
            <Navbar/>
            
            <Box my={10} mb={15} >
              <div className="ffflex">



<div className="asdasd">
              <Chart
            style={{
              height: 350,
            }}
          >
            <ChartTitle text="Total P/L" />
            <ChartLegend position="top" orientation="horizontal" />
            <ChartSeries>
              <ChartSeriesItem
                type="pie"
                overlay={{
                  gradient: "sharpBevel",
                }}
                tooltip={{
                  visible: true,
                }}
                data={pieData}
                categoryField="name"
                field="share"
              />
            </ChartSeries>
          </Chart>

</div>




   <div className="asdasd">
          <Chart
            style={{
              height: 350,
            }}
          >
            <ChartTitle text="Profit / Loss" />
            <ChartLegend position="top" orientation="horizontal" />
            <ChartCategoryAxis>
              <ChartCategoryAxisItem categories={categories} startAngle={45} />
            </ChartCategoryAxis>
            <ChartSeries>
              {series.map((item, idx) => (
                <ChartSeriesItem
                  key={idx}
                  type="column"
                  tooltip={{
                    visible: true,
                  }}
                  data={item.data}
                  name={item.name}
                />
              ))}
            </ChartSeries>
          </Chart>

          </div>

          </div>






          <Chart
            style={{
              height: 350,
            }}
          >
            <ChartTitle text="Risk / Reward Trend" />
            <ChartLegend position="top" orientation="horizontal" />
            <ChartCategoryAxis>
              <ChartCategoryAxisItem categories={categories} startAngle={45} />
            </ChartCategoryAxis>
            <ChartSeries>
              {series.map((item, idx) => (
                <ChartSeriesItem
                  key={idx}
                  type="line"
                  tooltip={{
                    visible: true,
                  }}
                  data={item.data}
                  name={item.name}
                />
              ))}
            </ChartSeries>
          </Chart>
  
      
 
    
            </Box>
            <Footer/>

        </div>
    )
}
