
$(document).ready(function(){
	$('#enviar').click(function(){
		datos={
			email:$('#email').val(),
			password:$('#pass').val()
		}
		$.ajax({
			url:'/login/',
			data: datos,
			method: 'POST',
			success: function(res, textStatus, xhr){
				console.log(res);
			}
				
		});
	})
})
