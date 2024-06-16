<?php
    $db_server = "localhost";
    $db_user = "root";
    $db_pass = "";
    $db_name = "businessdb";
    $conn = "";

    try{
        $conn = mysqli_connect($db_server, 
        $db_user, 
        $db_pass, 
        $db_name);
    }
    catch(mysqli_sql_exception){
        echo "Could not connect! <br>";
    }

    if($conn){
        echo "You are connected! <br>";
    }
?>

<!--
add columns to the businessdb
id, user, password, reg_date
insert one row to the businessdb
NULL, "Spongebob", "pineapple1", 'date'
 -->