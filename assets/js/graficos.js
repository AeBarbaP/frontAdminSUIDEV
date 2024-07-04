function conteoGeneral(){

  $.ajax({
      type:"POST",
      url:"query/queryconteoGeneral.php",
      dataType: "json",
      cache: false,
          success: function(response)
          { 
              var jsonData = JSON.parse(JSON.stringify(response));
              var filas = jsonData.filas;
              var filasExp = jsonData.filasExp;
              var filasTar = jsonData.filasTar;
              var filasAct = jsonData.filasAct;

              console.log("Nuevos registros: "+filas);
              document.getElementById("expNews2").innerHTML = filas;
              console.log("Entrega credenciales: "+filasExp);
              document.getElementById("credEnt").innerHTML = filasExp;
              console.log("Tarjetones entregados: "+filasTar);
              document.getElementById("filasTar").innerHTML = filasTar;
              // console.log("Expedientes actualizados: "+filasAct);
              // document.getElementById("expNews2").innerHTML = filas

              (() => {
                'use strict'
              
                // Graphs
                const ctx = document.getElementById('myChart')
                
                // eslint-disable-next-line no-unused-vars
                const myChart = new Chart(ctx, {
                  type: 'bar',
                  data: {
                    labels: [
                      'Ene',
                      'Feb',
                      'Mzo',
                      'Abr',
                      'May',
                      'Jun',
                      'Jul',
                      'Ago',
                      'Sep',
                      'Oct',
                      'Nov',
                      'Dic',
                    ],
                    datasets: [{
                      data: [
                        
                        filasExp,
                        
                      ],
                      lineTension: 0,
                      backgroundColor: '#3399ff',
                      borderColor: '#3399ff',
                      borderWidth: 1,
                      pointBackgroundColor: '#3399ff',
                      borderRadius: 40,
                      borderSkipped: false,
                      responsive: true,
                      maintainAspectRatio: false,
                    },
                    {
                      data: [
                        filas,
                        
                      ],
                      lineTension: 0,
                      backgroundColor: '#3399ff',
                      borderColor: '#3399ff',
                      borderWidth: 1,
                      pointBackgroundColor: '#3399ff',
                      borderRadius: 40,
                      borderSkipped: false,
                      responsive: true,
                      maintainAspectRatio: false,
                    },
                    {
                      data: [
                        filasTar,
                        
                      ],
                      lineTension: 0,
                      backgroundColor: '#3399ff',
                      borderColor: '#3399ff',
                      borderWidth: 1,
                      pointBackgroundColor: '#3399ff',
                      borderRadius: 40,
                      borderSkipped: false,
                      responsive: true,
                      maintainAspectRatio: false,
                    },
                    {
                      data: [
                        filasAct,
                        
                      ],
                      lineTension: 0,
                      backgroundColor: '#3399ff',
                      borderColor: '#3399ff',
                      borderWidth: 1,
                      pointBackgroundColor: '#3399ff',
                      borderRadius: 40,
                      borderSkipped: false,
                      responsive: true,
                      maintainAspectRatio: false,
                    }
                  ],
                  
                  },
                  options: {
                    plugins: {
                      legend: {
                        display: false
                      },
                      tooltip: {
                        boxPadding: 3
                      }
                    }
                  }
                })
              })()
              
          }
      });

}
