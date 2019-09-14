//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate

$(".next").click(function(){
	current_fs = $(this).parent();
	next_fs = $(this).parent().next();
	
	//activate next step on progressbar using the index of next_fs
	$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

	
	//show the next fieldset
	next_fs.show(); 
	//hide the current fieldset with style
	current_fs.hide();
	$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
});

$(".previous").click(function(){
	current_fs = $(this).parent();
	previous_fs = $(this).parent().prev();
	
	//de-activate current step on progressbar
	$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
	
	//show the previous fieldset
	previous_fs.show(); 
	//hide the current fieldset with style
	current_fs.hide();
	$("#progressbar li").eq($("fieldset").index(previous_fs)).addClass("active");
});

$(".submit").click(function(){
	return false;
})