// Options untuk chart Pendapatan dan Laba Bersih
const combinedOptions = {
  responsive: true, // Membuat grafik responsif
  maintainAspectRatio: false, // Agar aspek rasio tidak dipertahankan dan grafik menyesuaikan tinggi
  scales: {
    yAxes: [
      {
        id: "y-axis-1",
        type: "linear",
        position: "left",
        ticks: {
          beginAtZero: true,
          callback: function (value) {
            return "$" + value.toLocaleString() + " Juta";
          },
        },
        scaleLabel: {
          display: true,
          labelString: "Pendapatan & Laba Bersih (Juta $)",
        },
      },
      {
        id: "y-axis-2",
        type: "linear",
        position: "right",
        ticks: {
          beginAtZero: true,
          callback: function (value) {
            return value + "%";
          },
        },
        scaleLabel: {
          display: true,
          labelString: "Margin Keuntungan (%)",
        },
      },
    ],
  },
};

// Data untuk chart Pendapatan dan Laba Bersih
const combinedData = {
  labels: ["2019", "2020", "2021", "2022", "2023"],
  datasets: [
    {
      label: "Pendapatan (Juta $)",
      data: [5000, 10000, 20000, 40000, 80000], // Pendapatan naik drastis
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
      type: "bar",
      yAxisID: "y-axis-1",
    },
    {
      label: "Laba Bersih (Juta $)",
      data: [1000, 3000, 6000, 15000, 35000], // Laba bersih juga meningkat tajam
      backgroundColor: "rgba(153, 102, 255, 0.2)",
      borderColor: "rgba(153, 102, 255, 1)",
      borderWidth: 1,
      type: "bar",
      yAxisID: "y-axis-1",
    },
    {
      label: "Margin Keuntungan (%)",
      data: [20, 30, 35, 37.5, 43.75], // Margin keuntungan juga naik
      backgroundColor: "rgba(255, 159, 64, 0.2)",
      borderColor: "rgba(255, 159, 64, 1)",
      borderWidth: 2,
      fill: false,
      type: "line",
      yAxisID: "y-axis-2",
    },
  ],
};

// Membuat grafik Pendapatan dan Laba Bersih
const ctxCombined = document.getElementById("combinedChart").getContext("2d");
new Chart(ctxCombined, {
  type: "bar", // Tipe dasarnya tetap bar
  data: combinedData,
  options: combinedOptions,
});

// Data saham dengan kenaikan selama 13 tahun
const shareholdingData = {
  labels: [
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
  ],
  datasets: [
    {
      label: "Harga Saham ($)",
      data: [100, 120, 150, 170, 200, 230, 250, 270, 300, 350, 400, 450, 500], // Harga saham terus naik
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 2,
      fill: false,
      tension: 0.4, // Membuat garis lebih halus
    },
  ],
};

// Options untuk chart Shareholding
const shareholdingOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: false,
          callback: function (value) {
            return "$" + value;
          },
        },
        scaleLabel: {
          display: true,
          labelString: "Harga Saham ($)",
        },
      },
    ],
    xAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: "Tahun",
        },
      },
    ],
  },
};

// Membuat chart Shareholding
const ctxShareholding = document
  .getElementById("shareholdingChart")
  .getContext("2d");
new Chart(ctxShareholding, {
  type: "line",
  data: shareholdingData,
  options: shareholdingOptions,
});
