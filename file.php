/*************  ✨ Windsurf Command ⭐  *************/
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "codingclubskenya@gmail.com";
    $subject = "Form Submission";
    $headers = "From: " . $_POST['email'] . "\r\n" .
               "Reply-To: " . $_POST['email'] . "\r\n" .
               "X-Mailer: PHP/" . phpversion();
    
    $message = "You have received a new form submission:\n\n";
    foreach ($_POST as $key => $value) {
        $message .= ucfirst($key) . ": " . htmlspecialchars($value) . "\n";
    }
    
    if (mail($to, $subject, $message, $headers)) {
        echo "Thank you for your submission!";
    } else {
        echo "There was a problem sending your email. Please try again.";
    }
}
?>

/*******  783895f0-14c6-44cf-a1d7-dd00f9c7c3bd  *******/