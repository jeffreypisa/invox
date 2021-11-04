import $ from "jquery";

export function bgmove() {
	
	var movementStrength = 100;
	var height = movementStrength / $(window).height();
	var width = movementStrength / $(window).width();
	
	$(".sumsum").mousemove(function(e){
		var pageX = e.pageX - ($(window).width() / 2);
		var pageY = e.pageY - ($(window).height() / 2);
		var newvalueX = width * pageX * -1 - 25;
		var newvalueY = height * pageY * -1 - 50;
		$('.mod-teamoverview .fill-space .bg-cover').css("background-position", newvalueX+"px     "+newvalueY+"px");
	});
}