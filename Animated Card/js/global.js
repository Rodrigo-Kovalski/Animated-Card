$(document).ready(function() {

		$(function() {
		  	var $exibirTexto = $(".card-number");
		  
			$("#number").on("keyup keydown", function () {
				var texto = $(this).val();
				texto = texto.replace(/\s/g,'');

				part1 = texto.substring(0,4).padEnd(4,'*');
				part2 = texto.substring(4,8).padEnd(4,'*');
				part3 = texto.substring(8,12).padEnd(4,'*');
				part4 = texto.substring(12,16).padEnd(4,'*');

				if(texto != ""){
					if(texto.length < 17){
						$exibirTexto.text(part1+" "+part2+" "+part3+" "+part4);
					}
				}else{
					$exibirTexto.empty();
					$exibirTexto.append('**** **** **** ****');
				}
			});
		});


    	$(function() {
		  	var $exibirTexto = $(".card-user-name");
		  
			$("#name").on("keyup", function () {
				var texto = $(this).val();

				if(texto.length != ""){
					$exibirTexto.text(texto);
				}else{
					$exibirTexto.empty();
					$exibirTexto.append('Nome e Sobrenome');
				}
			});
		});

		$(function() {
		  	var $exibirTexto = $(".card-date");
		  
			$("#data-vesc").on("keyup", function () {
				var texto = $(this).val();
				if(texto.length >= 1){
					$exibirTexto.text(texto);
				}else{
					$exibirTexto.empty();
					$exibirTexto.append('MM/AA');
				}
			});

		});

		$("#data-vesc").mask('00/00');

		$(function() {
		  	var $exibirTexto = $(".card-security-number");
		  
			$("#cvv").on("keyup", function () {
				var texto = $(this).val();
				if(texto.length != ""){
					$exibirTexto.text(texto);
				}else{
					$exibirTexto.empty();
					$exibirTexto.append('***');
				}
			});

		});

		$(function() {
		  	var $exibirTexto = $(".cpf-number");
		  
			$("#cpf").on("keyup", function () {
				var texto = $(this).val();

				if(texto != ""){
					$exibirTexto.text(texto);
				}else{
					$exibirTexto.empty();
					$exibirTexto.append('*** *** *** **');
				}
			});

		});

		$("#cpf").mask("000.000.000-00");

		$(function() {

			$("#cvv").on("focus", function(){
				$(".front").addClass("front-flip");
				$(".back").addClass("back-flip")
			});

			$("#cvv").on("blur", function(){
				$(".front").removeClass("front-flip");
				$(".back").removeClass("back-flip")
			});


			$("#cpf").on("focus", function(){
				$(".credit-card").addClass("credit-card-slip");
				$(".cpf-card").addClass("card-slip");
			});

			$("#cpf").on("blur", function(){
				$(".credit-card").removeClass("credit-card-slip");
				$(".cpf-card").removeClass("card-slip");
			});

		});


		function qual_cartao(numero){
		    var result = "null";
			var bin = (numero).replace(/\D/g,'');

			if(/^(4011(78|79)|43(1274|8935)|45(1416|7393|763(1|2))|50(4175|6699|67[0-7][0-9]|9000)|627780|63(6297|6368)|650(03([^4])|04([0-9])|05(0|1)|4(0[5-9]|3[0-9]|8[5-9]|9[0-9])|5([0-2][0-9]|3[0-8])|9([2-6][0-9]|7[0-8])|541|700|720|901)|651652|655000|655021)/.test(bin)){
				result = "elo";
			} else if (/^4[0-9]{6}/.test(bin)) {
				result = "visa";
			} else if(/^5[1-5]|^2(2(2[1-9]|[3-9])|[3-6]|7([01]|20))/.test(bin)) {
				result = "mastercard";	
			} else if(/^(38[0-9]{5}|60[0-9]{5})/.test(bin)) {
				result = "hipercard";		
			} else if(/^(34[0-9]{5}|37[0-9]{5})/.test(bin)) {
				result = "american-express";		
			}  
		    return result;
		}


		$(function() {
			$("#number").on("keyup blur", function(){
				var bin = (this.value).replace(/\D/g,'');
				var result = qual_cartao(bin);

				if(result!='null'){
					$(".front").removeClass().addClass('front '+result+"-background");
					$(".back").removeClass().addClass('back '+result+"-background");
					$("#card-brands").removeClass().addClass(result+"-brand");
				} else {
					$('.front').removeClass().addClass('front');
					$('.back').removeClass().addClass('back');
					$("#card-brands").removeClass();
				}

				
			});
		});

});