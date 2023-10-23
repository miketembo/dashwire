import React from "react";
import { LineChart } from "@opd/g2plot-react";

const lineData = {
  title: {
    visible: true,
    text: "Company A's Incident Rate"
  },
  padding: "auto",
  forcefit: true,
  data: [
    { month: "Jan", value: 3 },
    { month: "Feb", value: 4 },
    { month: "Mar", value: 3.5 },
    { month: "Apr", value: 5 },
    { month: "May", value: 4.9 },
    { month: "Jun", value: 6 },
    { month: "July", value: 7 },
    { month: "Aug", value: 9 },
    { month: "Sept", value: 13 },
    { month: "Oct", value: 11 },
    { month: "Nov", value: 6 },
    { month: "Dec", value: 10 }
  ],
  xField: "month",
  yField: "value",
  smooth: false,
  meta: {
    year: {
      alias: "年份"
    },
    value: {
      alias: "Incident Count"
    }
  },
  animation: {
    appear: {
      animation: "clipingWithData"
    }
  }
};

function LineChartList() {
  return <LineChart className="container" {...lineData} />;
}

export default LineChartList;
