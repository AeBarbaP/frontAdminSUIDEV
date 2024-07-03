<?php

    session_start();
    include ("../prcd/qc.php");

    date_default_timezone_set('America/Mexico_City');
    setlocale(LC_TIME, 'es_MX.UTF-8');
    $fecha_actual = strftime("%Y-%m-%d,%H:%M:%S");

    $sql = "SELECT users.username as userName, log_registro.tipo_dato as tipoDato, COUNT(log_registro.tipo_dato) as contarDatos FROM users INNER JOIN log_registro ON users.username = log_registro.usr GROUP BY users.username, log_registro.tipo_dato";

    $resultadoSql = $conn->query($sql);

    while($row = $resultadoSql->fetch_assoc()){
        
        echo'
        <tr>
            <th scope="row"><i class="bi bi-three-dots-vertical"></i></th>';
        $tipoDato = $row['tipoDato'];
        $sqlTipodato = "SELECT * FROM cat_logs WHERE id = '$tipoDato'";
        $resultadoTipo = $conn->query($sqlTipodato);
        $rowTipo = $resultadoTipo->fetch_assoc();

        echo'
            <td>'.$rowTipo['nombre'].'</td>
            <td>'.$row['contarDatos'].'</td>
            <td>'.$row['userName'].'</td>
            <td>'.$row['userName'].'</td>
             <td class="text-end">
                <a href="#" class="text-end" aria-expanded="false">
                    <img src="assets/img/avatar.jpg" alt="" width="32" height="32" class="rounded-circle">
                </a>
            </td>
        </tr>
        ';
    }

     
?>