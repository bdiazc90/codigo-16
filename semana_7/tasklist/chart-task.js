// const barChart = document.querySelector("#bar-chart").getContext("2d");
// new Chart(barChart, {
//   type: "doughnut",
//   data: {
//     labels: [
//       "Enero",
//       "Febrero",
//       "Marzo",
//       "Abril",
//       "Mayo",
//       "Junio",
//       "Julio",
//       "Agosto",
//       "Septiembre",
//       "Octubre",
//       "Noviembre",
//       "Diciembre",
//     ],
//     datasets: [
//       {
//         label: "Meses del año",
//         data: [10, 12, 5, 11, 8, 10, 12, 5, 11, 8, 10, 12],
//         backgroundColor: ["#FF6420", "#20FFA0", "#009EFF", "#DE25FF"],
//         borderColor: "#c9c9c9", //["#000", "#f01", "#aac", "#019"],
//         borderWidth: 1,
//       },
//     ],
//   },
// });

const chartTaskReport = document
  .querySelector("#task-chart-report")
  .getContext("2d");

const myChart = new Chart(chartTaskReport, {
  type: "doughnut",
  data: {
    labels: ["TODO", "DONE", "DELETE"],
    datasets: [
      {
        // data: [10, 11, 12] // data[0] = 10 data[1] = 11 data[2] = 12
        label: "Estados de tareas",
        backgroundColor: ["#25A9FF", "#00C45F", "#FF6674"],
      },
    ],
  },
});

function generateChart() {
  const countTODO = getCountTask("todo");
  const countDONE = getCountTask("done");
  const countDelete = getCountTask("delete");
  myChart.data.datasets[0].data[0] = countTODO;
  // {
  //   data: [countTODO]
  //   label: "Estados de tareas",
  //   backgroundColor: ["#25A9FF", "#00C45F", "#FF6674"],
  // },
  myChart.data.datasets[0].data[1] = countDONE;
  // {
  //   data: [countTODO, countDONE]
  //   label: "Estados de tareas",
  //   backgroundColor: ["#25A9FF", "#00C45F", "#FF6674"],
  // },
  myChart.data.datasets[0].data[2] = countDelete;
  // {
  //   data: [countTODO, countDONE, countDelete]
  //   label: "Estados de tareas",
  //   backgroundColor: ["#25A9FF", "#00C45F", "#FF6674"],
  // },
  myChart.update();
}

function getCountTask(status) {
  const tasks = arrayTask.filter((task) => task.status === status);
  return tasks.length;
}
