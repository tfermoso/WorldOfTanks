
$(document).ready(function(){
	$('#enviar').click(function(){
		datos={
			email:$('#email').val(),
			password:$('#password').val()
		}
		$.ajax({
			url:'/login/',
			data: datos,
			method: 'POST',
			success: function(res, textStatus, xhr){
				console.log(res);
				if(res.login)
					window.location='juego.html';
			}
				
		});
	})
	$('#registro').click(function(){
		datos={
			email:$('#email').val(),
			name:$('#name').val(),
			username:$('#username').val(),
			password:$('#passwordrg').val()
		};
		console.log(datos);
		$.ajax({

			url:'/login/register',
			data: datos,
			method: 'POST',
			success: function(res, textStatus, xhr){
				console.log(res);
				if(res.login)
					window.location='juego.html';
			}		
		});

	})
})
