<?php
    $username = "Bro the code";
    $username1 = array("Bro", "the", "code");
    $phone = "123-456-7890";

    // $username = strtolower($username);
    // $username = strtoupper($username);
    // $username = trim($username);
    // $username = str_pad($username, 10, "0");
    // $phone = str_replace("-", "", $phone);
    // $username = strrev($username);
    // $username = str_shuffle($username);
    // $equals = strcmp($username, "Bro code");
    // $count = strlen($username);
    // $index = strpos($username, " ");
    // $firstname = substr($username, 0, 3);
    // $lastname = substr($username, 4);
    // $fullname = explode(" ", $username);
    $username1 = implode(" ", $username1);

    echo $username . "<br>";
    echo $phone . "<br>";
    // echo $equals;
    // echo $count;
    // echo $index;
    // echo $firstname;
    // echo $lastname;
    // foreach($fullname as $name){
    //     echo $name . "<br>";
    // }
    echo $username1;
?>