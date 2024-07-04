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
                      'Nuevos registros',
                      'Actualizar expedientes',
                      'Tarjetones entregados',
                      'Expedientes Actualizados'
                    ],
                    datasets: [{
                      data: [
                        filas,
                        filasExp,
                        filasTar,
                        filasAct
                      ],
                      lineTension: 0,
                      backgroundColor: '',
                      borderColor: '#007bff',
                      borderWidth: 4,
                      pointBackgroundColor: '#007bff'
                    }]
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
