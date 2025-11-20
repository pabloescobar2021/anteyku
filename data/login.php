<?php
session_start();
header('Content-Type: application/json; charset=utf-8');

$host = "localhost"; 
$user = "mishutvd_prodaj";
$pass = "4*j2V0IBkSIq";
$db   = "mishutvd_prodaj";

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    echo json_encode(["status" => "error", "message" => "Ошибка подключения к БД"]);
    exit;
}

$data = json_decode(file_get_contents("php://input"), true);

if (!$data || !isset($data['email']) || !isset($data['pass'])) {
    echo json_encode(["status" => "error", "message" => "Некорректные данные"]);
    exit;
}

$email = $conn->real_escape_string($data['email']);
$password = $data['pass'];

$sql = "SELECT * FROM messages WHERE email = '$email' LIMIT 1";
$result = $conn->query($sql);

if ($result->num_rows === 1) {
    $user = $result->fetch_assoc();

    if (password_verify($password, $user['pass'])) {
        // Сохраняем пользователя в сессию
        $_SESSION['id'] = $user['id'];
        $_SESSION['email'] = $user['email'];

        echo json_encode([
            "status" => "success",  
            "message" => "Успешный вход",
            "user" => [
                "id" => $user['id'],
                "email" => $user['email']
            ]
        ]);
    } else {
        echo json_encode(["status" => "error", "message" => "Неверный пароль"]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Пользователь не найден"]);
}

$conn->close();
?>
