<?php
    $date = date("l"); //give the date of the week
    // echo "{$date}";

    switch($date){
        case "Monday":
            echo "Monday"; break;
        case "Tuesday":
            echo "Tuesday"; break;
        default:
          echo "{$date} is not a day";
    }
?>