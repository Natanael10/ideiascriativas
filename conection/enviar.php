<?php
# CAPTURANDO OQ FOI DIGITADO PARA AS VARIAVEIS
$nome = $_POST['nome'];
$email = $_POST['email'];
$msg = $_POST['mensagem'];
$assunto = $_POST['assunto'];

//Obrigatorio para envio
$remetente = "From: " . $nome;//NOME DA PESSOA QUE ESTÁ ENVIANDO O EMAIL
$destinatario = "natanael.10@hotmail.com";//EMAIL QUE SERAR ENVIADO

 // monta o e-mail na variavel $body

$body = "===================================" . "\n";
$body = $body . "FALE CONOSCO - TESTE COMPROVATIVO" . "\n";
$body = $body . "===================================" . "\n\n";
$body = $body . "Nome: " . $nome . "\n";
$body = $body . "Email: " . $email . "\n";
$body = $body . "Mensagem: " . $msg . "\n\n";
$body = $body . "===================================" . "\n";

// envia o email
if(mail($destinatario, $assunto , $body, $remetente)){

	echo "<script>alert('Mensagem Enviada Com Sucesso!');</script>";
	// redireciona para a página de obrigado
	//header("location: ..pages/obrigado.html");
} else{
	echo "<script>alert('Erro ao enviar, Tente novamente!');</script>";
}

?>