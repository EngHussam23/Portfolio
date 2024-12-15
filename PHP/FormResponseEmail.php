<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fullName = $_POST['fullName'];
    $email = $_POST['email'];
    $mobile = $_POST['mobile'];
    $message = $_POST['message'];

    $to = "hussamraedalraggad@gmail.com"; // Replace with your email address
    $subject = "New Contact Form Your Portfolio";
    $body = "Name: $fullName\nEmail: $email\nMobile: $mobile\nMessage:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(["status" => "success", "message" => "Message sent successfully!"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Failed to send message."]);
    }

}
?>