<?php

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST, GET");
header("Access-Control-Allow-Credentials: true");

require_once 'Wrapper.php';
session_start();
$request = new Wrapper();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $name = $request->post('name');
    $phone = $request->post('phone');
    $email = $request->post('email');
    $message = $request->post('postMessage');

    $requestMethodUsed = isset($_REQUEST['name']) ? '$_REQUEST contains form data' : '$_REQUEST is empty';

    if (empty($name) || empty($phone) || empty($email) || empty($message)) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "All field are required."]);
        exit();
    }

    setcookie('last_user_email', $email, time() + (86400 * 30), "/", "localhost", false, true);

    if (!isset($_SESSION['form_submissions'])) {
        $_SESSION['form_submissions'] = 0;
    }
    $_SESSION['form_submissions']++;

    $response = [
        "status" => "success",
        "message" => "$name, your message was received.",
        "debug_info" => [
            "session_submissions" => $_SESSION['form_submissions'],
            "request_check" => $requestMethodUsed
        ]
    ];

    http_response_code(200);
    echo json_encode($response);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $action = $request->get('action', 'none');
    if ($action === 'fetch_initial_state') {
        $savedEmail = isset($_COOKIE['last_user_email']) ? htmlspecialchars($_COOKIE['last_user_email']) : '';
        $submissionsCount = $_SESSION['form_submissions'] ?? 0;

        $responseData = [
            "status" => "success",
            "data" => [
                "prefill_email" => $savedEmail,
                "forms_sent_in_session" => $submissionsCount
            ]
        ];

        http_response_code(200);
        echo json_encode($responseData);
        exit();
    }

    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Invalid GET parameters."]);
    exit();
}