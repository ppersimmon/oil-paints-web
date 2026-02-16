<?php

//variables, strings, concatenation
$name = "John Doe";
const greeting = "Hello, ";
$greetingText = greeting . $name;

echo "<h1>" . $greetingText . "</h1>";

//variable variables
$$name = $greetingText;
echo "<h2>" . ${$name} . "</h2>";

//arrays, associative arrays
$arr = [1, 2, 3];
$arr[] = 4;

$book = array("author" => "Author1", "title" => "Title1");
echo "<p>" . $book["title"] ?> of <?= $book["author"] . "</p>";

//explode, implode
echo "<p>" . implode(", ", $arr) . "</p>";
echo "<p>" . explode(", ", $greetingText)[0] . "</p>";

//comparison
echo "<p>" . ($arr <=> $book ? "true" : 'false') . "</p>";
echo "<p>" . ($greetingText <=> $name ? "true" : 'false') . "</p>";
echo "<p>" . ($arr[2] !== 3 ? "true" : 'false') . "</p>";
echo "<p>" . ($arr[2] === 3 ? "true" : 'false') . "</p>";

//type casting
$num_float = (float)$arr[3];
$num_str = (string)$num_float;

echo "<p>" . var_dump($num_float) . "</p>";
echo "<p>" . var_dump($num_str) . "</p>";
?>
