<?php

// $recepient = "jeka.2010luga@yandex.ua";
// $recepient2 = "skiredon@gmail.com";
// $recepient3 = "admin@skiredtest.kl.com.ua";
// $sitename = "Название сайта";

// $name = trim($_POST["name"]);
// $phone = trim($_POST["phone"]);
// $text = trim($_POST["text"]);
// $message = "Имя: $name \nТелефон: $phone \nТекст: $text";
// $message = "THIS IS SPARTA!!!"

// $pagetitle = "Новая заявка с сайта \"$sitename\"";
// mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
// mail($recepient2, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient2");
// mail($recepient3, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient3");




echo 'asdasdasdasdASDASDASDASDASDASDASDASD';


// Pear Mail Library
require_once "mail.php";

$from = 'from.gmail.com';
$to = 'jeka.2010luga@yandex.ua';
$subject = 'Hi!';
$body = "Hi,\n\nHow are you?";

$headers = array(
    'From' => $from,
    'To' => $to,
    'Subject' => $subject
);

$smtp = Mail::factory('smtp', array(
        'host' => 'ssl://smtp.gmail.com',
        'port' => '465',
        'auth' => true,
        'username' => 'skiredon@gmail.com',
        'password' => 'openlife2013MyStartup'
    ));

$mail = $smtp->send($to, $headers, $body);

if (PEAR::isError($mail)) {
    echo('<p>' . $mail->getMessage() . '</p>');
} else {
    echo('<p>Message successfully sent!</p>');
}