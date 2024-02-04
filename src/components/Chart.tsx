import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
  ArcElement,
} from "chart.js";
import { Bar, Doughnut, Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

interface IChartProps {
  horizontal?: boolean;
  data_1: number[];
  data_2: number[];
  title1: string;
  title2: string;
  bgColor1: string;
  bgColor2: string;
  labels?: string[];
}

const months = ["January", "February", "March", "April", "May", "June", "July"];

function Chart({
  horizontal = false,
  data_1 = [],
  data_2 = [],
  title1,
  title2,
  bgColor1,
  bgColor2,
  labels = months,
}: IChartProps) {
  const options: ChartOptions<"bar"> = {
    responsive: true,
    indexAxis: horizontal ? "y" : "x",
    plugins: {
      legend: {
        display: false,
        // position: "top" as const,
      },
      title: {
        display: false,
        text: "Revenue & Transition",
      },
    },

    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
      x: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
    },
  };

  const data: ChartData<"bar", number[], string> = {
    labels,
    datasets: [
      {
        label: title1,
        data: data_1,
        backgroundColor: bgColor1,
        barThickness: "flex",
        barPercentage: 1,
        categoryPercentage: 0.4,
      },
      {
        label: title2,
        data: data_2,
        backgroundColor: bgColor2,
        barThickness: "flex",
        barPercentage: 1,
        categoryPercentage: 0.4,
      },
    ],
  };
  return <Bar options={options} data={data} />;
}

export default Chart;

interface IDoughnutProps {
  labels?: string[];
  data: number[];
  bgColor: string[];
  cutout?: number | string;
  legend?: boolean;
  offset?: number[];
}

export const DoughnutChart = ({
  labels,
  data,
  bgColor,
  cutout,
  legend = true,
  offset,
}: IDoughnutProps) => {
  const doughnutData: ChartData<"doughnut", number[], string> = {
    labels,
    datasets: [
      {
        data,
        backgroundColor: bgColor,
        borderWidth: 0,
        offset,
      },
    ],
  };
  const doughnutOption: ChartOptions<"doughnut"> = {
    responsive: true,
    plugins: {
      legend: {
        display: legend,
        position: "bottom",
        labels: {
          padding: 40,
        },
      },
    },
    cutout,
  };
  return <Doughnut data={doughnutData} options={doughnutOption} />;
};

interface IPieChartProps {
  labels?: string[];
  data: number[];
  bgColor: string[];
  offset?: number[];
}

export const PieChart = ({ labels, data, bgColor, offset }: IPieChartProps) => {
  const pieData: ChartData<"pie", number[], string> = {
    labels,
    datasets: [
      {
        data,
        backgroundColor: bgColor,
        borderWidth: 1,
        offset,
      },
    ],
  };
  const pieOption: ChartOptions<"pie"> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return <Pie data={pieData} options={pieOption} />;
};
