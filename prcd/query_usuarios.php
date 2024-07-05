<?php

    session_start();
    include ("../prcd/qc/qc.php");

    date_default_timezone_set('America/Mexico_City');
    setlocale(LC_TIME, 'es_MX.UTF-8');
    $fecha_actual = strftime("%Y-%m-%d,%H:%M:%S");

    $sql = "SELECT * FROM users ORDER BY nombre ASC";

    $resultadoSql = $conn->query($sql);

    while($row = $resultadoSql->fetch_assoc()){
        
        echo'
        <tr>
            <th scope="row"><i class="bi bi-three-dots-vertical"></i></th>
            <td>'.$row['perfil'].'</td>
            <td>'.$row['fecha_creacion'].'</td>
            <td>'.$row['fecha_creacion'].'</td>  /* ultimo login */
            <td>'.$row['estatus'].'</td>
            <td>'.$row['nombre'].'</td>
            <td>'.$row['username'].'</td>
            <td class="text-end">
                <a href="#" class="text-end" aria-expanded="false">
                    <img src="assets/img/avatar.jpg" alt="" width="32" height="32" class="rounded-circle">
                </a>
            </td>
        </tr>
        ';
    }

    
?>