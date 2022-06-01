import { Chart as ChartJS, registerables } from "chart.js";
import React from "react";
import { Line } from "react-chartjs-2";
import { Coin } from "../../../types";
ChartJS.register(...registerables);

type Props = {
  coin?: Coin;
};

const CoinChart = ({ coin }: Props) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Line Chart",
      },
    },
  };
  const data = {
    labels: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    datasets: [
      {
        label: "Price",
        data: coin?.sparkline,
        borderColor: coin?.color,
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export default CoinChart;
