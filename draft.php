<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $tour = $_POST['tour'];
    $date = $_POST['date'];
    $people = $_POST['people'];
    $message = $_POST['message'];

    $to = "your-email@example.com"; // Replace with your actual email
    $subject = "New Booking Request from $name";
    $headers = "From: $email\r\nReply-To: $email";

    $body = "New Booking Request:\n\n";
    $body .= "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Phone: $phone\n";
    $body .= "Tour Package: $tour\n";
    $body .= "Preferred Date: $date\n";
    $body .= "Number of People: $people\n";
    $body .= "Message: $message\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "Booking request sent successfully!";
    } else {
        echo "Error sending booking request.";
    }
}
?>
