<?php
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $subject = strip_tags(trim($_POST["subject"]));
    $message = strip_tags(trim($_POST["message"]));

    // Validation
    if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(["message" => "Por favor complete el formulario correctamente."]);
        exit;
    }

    // Recipient email
    $recipient = "ventas@engiser.com.pe";

    // Email headers
    $email_headers = "From: Formulario de Contacto <noreply@engiser.com.pe>\r\n";
    $email_headers .= "Reply-To: $name <$email>\r\n";
    $email_headers .= "X-Mailer: PHP/" . phpversion();

    // Email content
    $email_content = "Has recibido un nuevo mensaje desde el sitio web de ENGISER:\n\n";
    $email_content .= "Nombre: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Asunto: $subject\n\n";
    $email_content .= "Mensaje:\n$message\n";

    // Send email
    if (mail($recipient, "Nuevo Mensaje: $subject", $email_content, $email_headers)) {
        http_response_code(200);
        echo json_encode(["message" => "¡Gracias! Tu mensaje ha sido enviado correctamente."]);
    } else {
        http_response_code(500);
        echo json_encode(["message" => "Oops! Algo salió mal y no pudimos enviar tu mensaje."]);
    }

} else {
    http_response_code(403);
    echo json_encode(["message" => "Hubo un problema con tu envío, por favor intenta de nuevo."]);
}
?>
