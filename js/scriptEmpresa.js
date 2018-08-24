//LINK PARA O VIDEO - EXPLICATIVO DA FUNÇÃO
//https://www.youtube.com/watch?v=pKTOT63X9XQ

const debounce = function(func, wait, immediate){
	let timeout;
	return function(...args){
		const context = this;
		const later = function(){
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		const callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};


const target = document.querySelectorAll('[data-anime]'); //Constante para selecionar todos os elementos com [data-anime] da classe CSS
const animationClass = 'animate';

function animeScroll(){
	const windowTop = window.pageYOffset + ((window.innerHeight * 4) / 5);
	target.forEach(function(element){
		
		if((windowTop) > element.offsetTop){
			element.classList.add(animationClass);
		}
		else{
			element.classList.remove(animationClass);	
		}
	})
}

animeScroll();

if(target.length){
	window.addEventListener('scroll', debounce(function() {
		animeScroll();
	}, 200 ));
}
