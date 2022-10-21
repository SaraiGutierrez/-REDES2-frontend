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
const ucronCoin = [7.83, 6.84, 7.97, 8.85, 7.855, 7.876, 8.876];
const dolar = [6.8545, 7.85, 6.9645, 6.865, 6.8775, 7.6775, 6.8785];
const euro = [8.9545, 8.75, 8.645, 8.965, 7.975, 8.6775, 7.9785];

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
