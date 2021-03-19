
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

const getPercentageBorders = (data, field) => {
  const sortedValues = data.map((dataItem) => dataItem[field]).sort((a, b) => a - b);
  const average = sortedValues.reduce((prevVal, value) => prevVal += value, 0) / sortedValues.length;
  const deviations = sortedValues.map((value) => value - average);
  const dispersion = deviations.reduce((prevVal, value) => prevVal += value ** 2, 0) / deviations.length;
  const standardDeviation = Math.sqrt(dispersion);

  const [firstRecord, lastRecord] = [sortedValues[0], sortedValues[sortedValues.length - 1]];
  const _100percent = lastRecord - firstRecord;
  const upperGreenPerc = Math.round((average + standardDeviation - firstRecord) / _100percent * 100);
  const bottomGreenPerc = Math.round((average - standardDeviation - firstRecord) / _100percent * 100);

  return [upperGreenPerc, bottomGreenPerc];
} 

const [upperGreenPercUv, bottomGreenPercUv] = getPercentageBorders(data, 'uv');
const [upperGreenPercPv, bottomGreenPercPv] = getPercentageBorders(data, 'pv');

function App() {
  
  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <defs>
        <linearGradient id="colorPv" x1="0" y1="100%" x2="0" y2="0%">
          <stop offset="0%" stopColor="red" />
          <stop offset={`${bottomGreenPercPv}%`} stopColor="red" />
          <stop offset={`${bottomGreenPercPv}%`} stopColor="green" />
          <stop offset={`${upperGreenPercPv}%`} stopColor="green" />
          <stop offset={`${upperGreenPercPv}%`} stopColor="red" />
          <stop offset="100%" stopColor="red" />
        </linearGradient>
      </defs>
      <Line type="monotone" dataKey="pv" stroke="url(#colorPv)" activeDot={{ r: 8 }} strokeWidth={3}/>

      <defs>
        <linearGradient id="colorUv" x1="0" y1="100%" x2="0" y2="0%">
          <stop offset="0%" stopColor="red" />
          <stop offset={`${bottomGreenPercUv}%`} stopColor="red" />
          <stop offset={`${bottomGreenPercUv}%`} stopColor="green" />
          <stop offset={`${upperGreenPercUv}%`} stopColor="green" />
          <stop offset={`${upperGreenPercUv}%`} stopColor="red" />
          <stop offset="100%" stopColor="red" />
        </linearGradient>
      </defs>
      <Line type="monotone" dataKey="uv" stroke="url(#colorUv)" strokeWidth={3}/>
    </LineChart>
  );
}

export default App;
