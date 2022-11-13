// npm install --save chart.js react-chartjs-2
import { Doughnut, Line, Bar } from "react-chartjs-2";
import "chart.js/auto";
import "./App.css";

const data = {
  labels: ["הושלמו בהצלחה", "הושלמו עם בקשת עזרה", "לא הושלמו"],
  datasets: [
    {
      label: "My First Dataset",
      data: [300, 50, 100],
      backgroundColor: [
        "rgb(45, 218, 118)",
        "rgb(255, 160, 66)",
        "rgb(255, 64, 105)",
      ],
      hoverOffset: 4,
    },
  ],
};

const labels2 = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
];
const data2 = {
  labels: labels2,
  datasets: [
    {
      label: "שטיפת כלים",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: true,
      borderColor: "rgb(0, 0, 192)",
      tension: 0.1,
    },
  ],
};

const data3 = {
  labels: ["שטיפת כלים", "הכנת קפה", "הכנת פסטה", "ספירת קופה"],
  datasets: [
    {
      type: "bar",
      label: "ינואר",
      data: [10, 20, 30, 40],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.7)",
    },
    {
      type: "bar",
      label: "פברואר",
      data: [10, 25, 18, 38],
      borderColor: "rgb(0, 128, 255)",
      backgroundColor: "rgba(0, 128, 255, 0.7)",
    },
  ],
};

const labels4 = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
];
const data4 = {
  labels: labels4,
  datasets: [
    {
      label: "שטיפת כלים",
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(201, 203, 207, 0.2)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
        "rgb(201, 203, 207)",
      ],
      borderWidth: 1,
    },
  ],
};

function App() {
  return (
    <div className="App">
      <div className="firstRowCharts">
        <div
          style={{ width: "500px", height: "350px" }}
          className="doughnutDashboard"
        >
          <Doughnut data={data} />
        </div>
        <div
          style={{
            width: "650px",
            height: "350px",
            position: "relative",
            left: 0,
          }}
          className="lineChartDashboard"
        >
          <Line data={data2} />
        </div>
      </div>
      <div className="secondRowCharts">
        <div
          style={{ width: "650px", height: "350px" }}
          className="barDashboard"
        >
          <Bar data={data3} />
        </div>
        <div
          style={{ width: "650px", height: "350px" }}
          className="bar2Dashboard"
        >
          <Bar data={data4} />
        </div>
      </div>
    </div>
  );
}

export default App;
