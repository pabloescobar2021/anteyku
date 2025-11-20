<?php
// Разрешаем CORS для конкретного фронтенда
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
header('Content-Type: application/json; charset=utf-8');

if (isset($_SESSION['id'])) {
    echo json_encode([
        "status" => "success",
        "user" => [
            "id" => $_SESSION['id'],
            "email" => $_SESSION['email']
        ]
    ]);
} else {
    echo json_encode([
        "status" => "error",
        "message" => "Не авторизован"
    ]);
}
?>
