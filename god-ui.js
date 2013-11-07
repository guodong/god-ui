$(function(){
	$(".-tabs li").click(function(){
		$(this).addClass("-active").siblings().removeClass("-active").parent().parent().find(".-pane").hide().eq($(this).index()).show();
	});
	$("[gui-cmd=modal]").click(function(){
		var id = $(this).attr("gui-arg");
		$("body").append("<div class='-mask'></div>");
		$("#"+id).fadeIn();
	});
	$("[gui-cmd=close]").click(function(){
		$(this).parents(".-modal").fadeOut();
		$(".-mask").remove();
	});
});