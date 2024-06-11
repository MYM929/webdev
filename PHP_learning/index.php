<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="index.php" method="post">
        <label>radius:</label>
        <input type="text" name="radius">
        <input type="submit" value="calculate">
    </form><br>
    <!-- <form action="index.php" method="post">
        <label>x:</label>
        <input type="text" name="x">
        <label>y:</label>
        <input type="text" name="y">
        <label>z:</label>
        <input type="text" name="z">
        <input type="submit" value="total">
    </form> -->
</body>

</html>

<?php
$radius = $_POST["radius"];
$c = null;
$area = null;

$c = 2 * pi() * $radius;
$c = round($c, 2);
$area = pi() * pow($radius, 2);
$area = round($area, 2);

echo "Circumfence = {$c}cm <br>";
echo "Area = {$area}cm^2 <br>";



// $x = $_POST["x"];
// $y = $_POST["y"];
// $z = $_POST["z"];
// $total = null;

// // $total = abs($x);
// // round(), floor(), ceil(), pow($x, $y), sqrt(), 
// // max(), min(), pi(), rand(1, 6),  

// echo $total;
?>