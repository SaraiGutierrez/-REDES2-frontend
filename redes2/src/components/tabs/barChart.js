import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "UcronCoin a través del tiempo",
    },
  },
};

const labels = [
  "19.10.2022",
  "18.10.2022",
  "17.10.2022",
  "16.10.2022",
  "15.10.2022",
  "14.10.2022",
  "13.10.2022",
];
const ucronCoin = [27.83, 7.84, 7.84, 7.85, 7.855, 7.876, 7.876];
const dolar = [7.8545, 7.85, 7.8645, 7.865, 7.8775, 7.8775, 7.8785];
const euro = [17.8545, 7.85, 7.8645, 7.865, 7.8775, 7.8775, 7.8785];

export const data = {
  labels,
  datasets: [
    {
      label: "UcronCoin",
      data: ucronCoin,
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dolar USD",
      data: dolar,
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: "Euro",
      data: euro,
      backgroundColor: "rgba(178, 255, 102, 0.5)",
    },
  ],
};

export function BarChart() {
  return <Bar options={options} data={data} />;
}
