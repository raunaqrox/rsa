$(document).ready(function(){
	var chk = $('.chk');
	chk.on('click', function(){
		var v = $(this).val();
		$.get('/api/change', {"v":v},  function(data){
		});
	});
});
