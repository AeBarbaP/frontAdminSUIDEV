<?php

    session_start();
    include ("../prcd/qc.php");

    date_default_timezone_set('America/Mexico_City');
    setlocale(LC_TIME, 'es_MX.UTF-8');
    $fecha_actual = strftime("%Y-%m-%d,%H:%M:%S");

    $sql = "SELECT users.nombre AS nombre, users.user AS user, log_registo.usr AS usrLog INNER JOIN "
?>