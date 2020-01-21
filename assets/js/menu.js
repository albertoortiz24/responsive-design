$(document).ready(main);

var contador = 1;

function main(){
	$('.bt-menu').click(function(){
		// $('nav').toggle();

		if(contador == 1){
			$('nav').animate({
				left: '0'
			});
			window.addEventListener('scroll', disableScroll);
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
			window.removeEventListener('scroll', disableScroll);
		}

	});

	$('.btn-expand2').click(function(){
		 $('descripcion_movil').toggle();

		if(contador == 1){
			$('descripcion_movil').animate({
					left: '0'
			});
			window.addEventListener('scroll', disableScroll);
			contador = 0;
		} else {
			contador = 1;
			$('descripcion_movil').animate({
					left: '-100%'
			});
			window.removeEventListener('scroll', disableScroll);
		}

		});


	function disableScroll(){
	  window.scrollTo(0, 0);
	}

};



function myfunction1(){
	var x= document.getElementById("hiden");
	if(x.style.display==="block"){
	  x.style.display="none";
	}else{
	  x.style.display="block";
	}
}
//esta funcion aplica para todas las de editorial es la misma que la de index pero nomas cambie los nombres del id referido para que no hubiera problemas 
function expandMobil(){
	var y = document.getElementById("mirar")
	 if(y.style.display==="block"){
		 y.style.display="none";
	 }else{
		 y.style.display="block";
	 }
}
