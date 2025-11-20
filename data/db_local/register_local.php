<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");

require 'config.php'; // путь относительно этого файла
header('Content-Type: application/json; charset=utf-8');

$data = json_decode(file_get_contents("php://input"), true);

if(!$data || !isset($data['email']) || !isset($data['pass'])) {
    echo json_encode(["status"=>"error","message"=>"Нет данных"]);
    exit;
}

$email = $conn->real_escape_string($data['email']);
$password = $data['pass'];
$hashed = password_hash($password, PASSWORD_DEFAULT);

$sql = "INSERT INTO messages (email, pass) VALUES ('$email', '$hashed')";
if($conn->query($sql)) echo json_encode(["status"=>"ok","id"=>$conn->insert_id]);
else echo json_encode(["status"=>"error","message"=>$conn->error]);
?>
