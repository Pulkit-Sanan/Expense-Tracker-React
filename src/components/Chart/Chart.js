import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const datapointValues = props.datapoints.map((datapoint) => datapoint.value);
  const maximum = Math.max(...datapointValues);

  return (
    <div className="chart">
      {props.datapoints.map((datapoint) => (
        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          maxValue={maximum}
          label={datapoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
