<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Conten-Type"  charset="utf-8">
	<title>Contatos</title>
</head>
<body>
	<?php
	# CAPTURANDO OQ FOI DIGITADO PARA AS VARIAVEIS
	//Obrigatorio para envio
	$nome = $_POST['nome'];//NOME DA PESSOA QUE ESTÁ ENVIANDO O EMAIL
	$assunto = $_POST['assunto'];//TITULO / ASSUNTO
	$email = $_POST['email']; // EMAIL DA PESSOA QUE ESTÁ ENVIANDO EMAIL
	$msg = $_POST['mensagem'];// MENSAGEN QUE VAI SER ENVIADA
	$destinatario = "natanael.10@hotmail.com";//EMAIL QUE SERAR ENVIADO A MENSAGEM

	 // monta o e-mail na variavel $body

	$body = "===================================" . "\n";
	$body = $body . "FALE CONOSCO - TESTE COMPROVATIVO" . "\n";
	$body = $body . "===================================" . "\n\n";
	$body = $body . "Nome: " . $nome . "\n";
	$body = $body . "Email: " . $email . "\n";
	$body = $body . "Mensagem: " . "\n" . $msg . "\n\n";
	$body = $body . "===================================" . "\n";

	// envia o email
	mail($destinatario, $assunto , $body)
	?>

	<script>
		alert('E-mail enviado com sucesso!');
	</script>

	<meta http-equiv="refresh" content="0; url=https://natanael10.github.io/ideiascriativas/#contact">
</body>
</html>