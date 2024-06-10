<?php
$name = "Bro Code";
$age = 21;
$quantity = 3;
$price = 4.99;
$online1 = true;
$online2 = false;

$total = null;
$total = $quantity * $price;

echo "Hello {$name}<br>";
echo "Your are {$age} years old<br>";
echo "Your pizza is \${$price}<br>";
echo "Online status: {$online1}<br>";
echo "Online status: {$online2}<br>";

echo "Your total is: \${$total}";
