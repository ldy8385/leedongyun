$(function(){
	setTimeout("showBi()", 500);
});
function showBi(){
	if(location.href.substring(133,141) == "universe"){
		$("#intro_wrap").append("<img class='universe_bi' src='http://static.123games.co.kr/h5/intro/universe_bi_c.png' alt=''>");
		$('.universe_bi').slideDown(700, 'easeOutBounce');
	}else{
		$("#intro_wrap").append("<img class='simple5_bi' src='http://static.123games.co.kr/h5/intro/simple5_bi_c.png' alt=''>");
		$('.simple5_bi').slideDown(700, 'easeOutBounce');
	}
}

$(function(){
	setTimeout("hidebi()", 6500);
});
function hidebi(){
	$("#intro_wrap").hide();
}