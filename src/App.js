// npm install --save chart.js react-chartjs-2
import { Doughnut, Line, Bar } from "react-chartjs-2";
import "chart.js/auto";

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

function App() {
  return (
    <div className="App">
      <div
        style={{ display: "flex", flexDirection: "row" }}
        className="firstRowCharts"
      >
        <div
          style={{ width: "500px", height: "500px" }}
          className="doughnutDashboard"
        >
          <Doughnut data={data} />
        </div>
        <div
          style={{ width: "650px", height: "650px" }}
          className="LineChartDashboard"
        >
          <Line data={data2} />
        </div>
      </div>

      <div
        style={{ width: "500px", height: "500px" }}
        className="doughnutDashboard"
      >
        <Bar data={data3} />
      </div>
    </div>
  );
}

export default App;
