$(function(){
	$(".-tabs li").click(function(){
		$(this).addClass("-active").siblings().removeClass("-active").parent().parent().find(".-pane").hide().eq($(this).index()).show();
	});
});