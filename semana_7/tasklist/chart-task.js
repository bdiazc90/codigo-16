const barChart = document.querySelector("#bar-chart").getContext("2d");

new Chart(barChart, {
  type: "bar",
  data: {
    labels: [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ],
    datasets: [
      {
        label: "Meses del año",
        data: [10, 12, 5, 11, 8, 10, 12, 5, 11, 8, 10, 12],
        backgroundColor: ["#FF6420", "#20FFA0", "#009EFF", "#DE25FF"],
        borderColor: "#c9c9c9", //["#000", "#f01", "#aac", "#019"],
        borderWidth: 1,
      },
    ],
  },
});
