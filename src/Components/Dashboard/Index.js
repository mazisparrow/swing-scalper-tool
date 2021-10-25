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
      data: [0, 0, 3.99],
    },
    {
      name: "Risk",
      data: [3.42, 2.1, 3.99],
    },
    {
      name: "Profit",
      data: [17.1, 10.5, 0],
    },
    {
      name: "Reward",
      data: [17.1, 10.5, 7.54],
    },
  ];
  const pieData = [
    {
      name: "LOSS",
      share: 3.99,
    },
    {
      name: "OPEN TRADES",
      share: 45.82,
      explode: true,
    },
    {
      name: "PROFIT",
      share: 27.6,
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