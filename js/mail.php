<?php

// $mail_to = $_POST['send_to'];
$mail_to ='info@maxillence.com';

if($name = trim(htmlspecialchars($_POST['name']))){
$message .= 
'От '.$name;}

if($email = trim(htmlspecialchars($_POST['email']))){
$message .=
'
E-mail: ' .$email;}


$message = wordwrap($message, 70, "\r\n");

if (mail($mail_to, 'Сообщение от Maxellance', $message)){
    echo json_encode('ok');
}else{
    echo json_encode('err');
}
?>