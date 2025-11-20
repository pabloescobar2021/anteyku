<?php
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
    echo json_encode(["status" => "error", "message" => "Не авторизован"]);
}
?>
