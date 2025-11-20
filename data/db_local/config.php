<?php
$allowedOrigin = "http://localhost:4321";
header("Access-Control-Allow-Origin: $allowedOrigin");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

// ОБЯЗАТЕЛЬНО обрабатываем preflight OPTIONS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// config.php
$db_host = '127.0.0.1';   // иногда 'localhost' использует сокет, '127.0.0.1' работает надёжно
$db_user = 'root';        // по умолчанию в XAMPP: root без пароля
$db_pass = '';            // если ставил пароль — укажи
$db_name = 'myproject_db';

$conn = new mysqli($db_host, $db_user, $db_pass, $db_name);
if ($conn->connect_error) {
  header('Content-Type: application/json; charset=utf-8');
  echo json_encode(["status"=>"error","message"=>"DB connect error: ".$conn->connect_error]);
  exit;
}
