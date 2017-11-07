$(document).ready(function(){
	scrollAsso();
	$(document).on('scroll', function(){
		var top = $(this).scrollTop();
		console.log(top)
	})
});

function scrollAsso(){
	$("#btn-home").on('click', function(){
		$('html,body').animate({
			scrollTop:$("#asso").offset().top
		},1000);
	})
}