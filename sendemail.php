<?php 

	$to="dnotevsky@gmail.com";
	$subject = "Новый клиент";

	$message = '
	<html>
	<head>
	 <title>Клиент</title>
	</head>
	<body>

		<p>
			Имя: '.$_POST['name'].'
		</p>
		<p>
			Телефон: '.$_POST['phone'].'
		</p>
		<p>
			Почта: '.$_POST['email'].'
		</p>
		<p>
			Сервис: '.$_POST['service'].'
		</p>
		<p>
			Сообщение: '.$_POST['message'].'
		</p>

	</body>
	</html>
	';
	$headers= "MIME-Version: 1.0\r\n";
	$headers .= "Content-type: text/html; charset=utf-8\r\n";

	$headers .= "From: <client@new.com>\r\n"; 

	mail($to, $subject, $message, $headers);

?>