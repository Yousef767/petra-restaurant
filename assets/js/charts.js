const ctx = document.getElementById("myChart");

const dataset11 = [1000, 1000, 1800, 1600, 2000, 3000, 1000];
const maxDataValue1 = Math.max(...dataset11);
const minDataValue1 = Math.min(...dataset11);
new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "01 Apr",
      "02 Apr",
      "03 Apr",
      "04 Apr",
      "05 Apr",
      "06 Apr",
      "07 Apr",
    ],
    datasets: [
      {
        label: "Sales",
        data: dataset11,
        borderWidth: 2,
        tension: 0.4,
        pointBackgroundColor: "rgb(54, 162, 235)",
        pointBorderColor: "#fff",
        pointBorderWidth: 1,
        pointRadius: 6,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        beginAtZero: true,
        suggestedMax: maxDataValue1 + minDataValue1,
      },
    },
  },
});
const dataset22 = [20, 30, 40, 60, 40, 30, 50];
const maxDataValue2 = Math.max(...dataset22);
const minDataValue2 = Math.min(...dataset22);

const ctx2 = document.getElementById("myChart2");
new Chart(ctx2, {
  type: "line",
  data: {
    labels: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    datasets: [
      {
        label: "Orders",
        data: dataset22,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderWidth: 2,
        tension: 0.4,
        pointBackgroundColor: "rgba(75, 192, 192, 1)",
        pointBorderColor: "#fff",
        pointBorderWidth: 1,
        pointRadius: 6,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        beginAtZero: true,
        suggestedMax: maxDataValue2 + minDataValue2,
      },
    },
  },
});

const ctx3 = document.getElementById("myChart3");

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const dataset1 = [65, 59, 80, 81, 56, 55, 40, 45, 60, 75, 70, 90];
const dataset2 = [28, 48, 40, 19, 86, 27, 90, 85, 80, 95, 60, 70];
const allData = dataset1.concat(dataset2);
const maxDataValue = Math.max(...allData);
const minDataValue = Math.min(...allData);

const myChart = new Chart(ctx3, {
  type: "line",
  data: {
    labels: months,
    datasets: [
      {
        label: "2024",
        data: dataset1,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderWidth: 2,
        tension: 0.4,
        pointBackgroundColor: "rgba(75, 192, 192, 1)",
        pointBorderColor: "#fff",
        pointBorderWidth: 1,
        pointRadius: 6,
      },
      {
        label: "2025",
        data: dataset2,
        borderColor: "rgb(255, 104, 119)",
        backgroundColor: "rgba(255, 104, 119,0.2)",
        borderWidth: 2,
        tension: 0.4,
        pointBackgroundColor: "rgb(255, 104, 119)",
        pointBorderColor: "#fff",
        pointBorderWidth: 1,
        pointRadius: 6,
      },
    ],
  },
  options: {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        beginAtZero: true,
        suggestedMax: maxDataValue + minDataValue,
      },
    },
  },
});

const dataset44 = [20, 30, 40, 60, 40, 30, 50];
const maxDataValue4 = Math.max(...dataset44);
const minDataValue4 = Math.min(...dataset44);

const ctx4 = document.getElementById("myChart4");
new Chart(ctx4, {
  type: "bar",
  data: {
    labels: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    datasets: [
      {
        label: "Customers",
        data: dataset44,
        backgroundColor: "rgb(75, 192, 192)",
        borderColor: "rgb(75, 192, 192)",
        borderWidth: 0,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        beginAtZero: true,
        suggestedMax: maxDataValue4 + minDataValue4,
      },
    },
  },
});
