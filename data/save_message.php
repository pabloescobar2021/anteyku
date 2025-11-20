<?php
header("Content-Type: application/json; charset=utf-8");

// Получаем JSON
$data = json_decode(file_get_contents("php://input"), true);

if(!$data || !isset($data['email'])){
    echo json_encode(["status"=>"error","message"=>"Нет текста"]);
    exit;
}

// Подключение к базе (данные возьми из панели Beget → MySQL)
$host = "localhost"; 
$user = "mishutvd_prodaj";
$pass = "4*j2V0IBkSIq";
$db   = "mishutvd_prodaj";

$conn = new mysqli($host, $user, $pass, $db);
if($conn->connect_error){
    echo json_encode(["status"=>"error","message"=>"Ошибка подключения к БД"]);
    exit;
}

$email = $conn->real_escape_string($data['email']);
$password = $data['pass'];

$hashedPass = password_hash($password, PASSWORD_DEFAULT);

$sql = "INSERT INTO messages (email, pass) VALUES ('$email', '$hashedPass')";
if($conn->query($sql)){
    echo json_encode(["status"=>"ok","id"=>$conn->insert_id]);
} else {
    echo json_encode(["status"=>"error","message"=>$conn->error]);
}

$conn->close();
