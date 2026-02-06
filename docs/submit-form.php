<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $to = 'ivanleejackson@gmail.com';
    $subject = 'New FDD Questionnaire Submission - MyFranchiseMachine';
    $headers = "From: noreply@myfranchisemachine.com\r\n";
    $headers .= "Reply-To: noreply@myfranchisemachine.com\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    
    // Build email body
    $message = '<html><body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">';
    $message .= '<div style="max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9;">';
    $message .= '<h1 style="color: #2AC5D7; border-bottom: 3px solid #2AC5D7; padding-bottom: 10px;">New FDD Questionnaire Submission</h1>';
    $message .= '<p style="font-size: 14px; color: #666;">Received: ' . date('F j, Y g:i A') . '</p>';
    
    // Get all POST data
    foreach ($_POST as $key => $value) {
        if (!empty($value) && $key !== 'submit') {
            $fieldName = ucwords(str_replace('_', ' ', $key));
            $message .= '<div style="margin: 20px 0; padding: 15px; background: white; border-left: 4px solid #2AC5D7;">';
            $message .= '<strong style="color: #0F1B2D;">' . htmlspecialchars($fieldName) . ':</strong><br>';
            $message .= '<span style="color: #555;">' . nl2br(htmlspecialchars($value)) . '</span>';
            $message .= '</div>';
        }
    }
    
    $message .= '</div></body></html>';
    
    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(['success' => true, 'message' => 'Form submitted successfully!']);
    } else {
        http_response_code(500);
        echo json_encode(['success' => false, 'message' => 'Failed to send email.']);
    }
} else {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
}
?>
