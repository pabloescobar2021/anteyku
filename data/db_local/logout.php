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

$_SESSION = [];
session_unset();
session_destroy();

if(ini_get("session.use_cookies")){
    $params = session_get_cookie_params();
    setcookie(session_name(), '', time() - 42000,
        $params["path"], $params["domain"],
        $params["secure"], $params["httponly"]
    );
}

header('Content-Type: application/json; charset=utf-8');
echo json_encode(["status" => "success", "message" => "Вы вышли из системы"]);