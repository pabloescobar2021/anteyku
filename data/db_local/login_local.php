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

session_start();
require 'config.php';
header('Content-Type: application/json; charset=utf-8');

$data = json_decode(file_get_contents("php://input"), true);
if(!$data || !isset($data['email']) || !isset($data['pass'])) {
  echo json_encode(["status"=>"error","message"=>"Нет данных"]);
  exit;
}

$email = $conn->real_escape_string($data['email']);
$password = $data['pass'];

$sql = "SELECT * FROM messages WHERE email='$email' LIMIT 1";
$res = $conn->query($sql);
if($res && $res->num_rows === 1){
  $user = $res->fetch_assoc();
  if(password_verify($password, $user['pass'])){
    $_SESSION['id'] = $user['id'];
    $_SESSION['email'] = $user['email'];
    echo json_encode(["status"=>"success","user"=>["id"=>$user['id'],"email"=>$user['email']]]);
  } else {
    echo json_encode(["status"=>"error","message"=>"Неверный пароль"]);
  }
} else {
  echo json_encode(["status"=>"error","message"=>"Пользователь не найден"]);
}
