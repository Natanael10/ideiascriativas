	//AÇÃO DOS BOTÕES AO CLICAR
		function abrir1(){
			document.getElementById('modal-infor1').style.display='flex';
		}
		function fechar1(modalID){
			const modal = document.getElementById(modalID);
			if (modal) {
				modal.addEventListener('click', (evento) => {
					if(evento.target.id == modalID || evento.target.className == 'fechartela'){
						document.getElementById(modalID).style.display='none';
					}
				});
			}
		}
/*--------------------------------------------------------------------------------------*/

		function abrir2(){
			document.getElementById('modal-infor2').style.display='flex';
		}
		function fechar2(modalID){
			const modal = document.getElementById(modalID);
			if (modal) {
				modal.addEventListener('click', (evento) => {
					if(evento.target.id == modalID || evento.target.className == 'fechartela'){
						document.getElementById(modalID).style.display='none';
					}
				});
			}
		}
/*--------------------------------------------------------------------------------------*/

		function abrir3(){
			document.getElementById('modal-infor3').style.display='flex';
		}
		function fechar3(modalID){
			const modal = document.getElementById(modalID);
				if (modal) {
					modal.addEventListener('click', (evento) => {
						if(evento.target.id == modalID || evento.target.className == 'fechartela'){
							document.getElementById(modalID).style.display='none';
						}
					});
				}
		}
/*--------------------------------------------------------------------------------------*/

		function abrir4(){
			document.getElementById('modal-infor4').style.display='flex';
		}
		function fechar4(modalID){
			const modal = document.getElementById(modalID);
			if (modal) {
				modal.addEventListener('click', (evento) => {
					if(evento.target.id == modalID || evento.target.className == 'fechartela'){
						document.getElementById(modalID).style.display='none';
					}
				});
			}
		}
/*--------------------------------------------------------------------------------------*/

/*CHAMANDO OS METODOS - PASSANDO COMO PARAMETRO O ID DA CLASS INFORMAÇÕES NO INDEX*/
fechar1('modal-infor1');
fechar2('modal-infor2');
fechar3('modal-infor3');
fechar4('modal-infor4');






/*VIDEOS UTILIZADOS PARA ENTENDER O METODO*/

		/*https://www.youtube.com/watch?v=fu-enUG2VEE*/

		/*https://www.youtube.com/watch?v=gLWIYk0Sd38*/