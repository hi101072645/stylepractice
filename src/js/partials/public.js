// 輸入框動畫 athInput__label--isfocus
$(".athInput").find("input,textarea").focus(function(){
	$(this).prev().show();
	$(this).prev().addClass("athInput__label--isfocus");
	// $(this).parents(".athInput").css({"margin-top":"20px","margin-bottom":"20px"});
});
$(".athInput").find("input,textarea").blur(function(){
	// var text=
	if($(this).val()=="") {
		$(this).prev().show();
		$(this).prev().removeClass("athInput__label athInput__label--isfocus");
		$(this).prev().addClass("athInput__label");
		// $(this).parents(".athInput").css({"margin-top":"0px","margin-bottom":"15px"});
	}else{
		$(this).prev().hide();
		// $(this).parents(".athInput").css({"margin-top":"0px","margin-bottom":"15px"});
	};
});

$("a[data-toggle='tab']").click(function (e) {

	for(let i = 0 ;i < $('.athInput').length; i++){
		if($(".athInput").eq(i).find('input').val() != "") {
			$(".athInput").eq(i).find('label').hide();
		}
	}
})

//查無空房時自動開啟查詢
$('#athSearchOtherDay').click(function () {

	$('input[ name="daterange"]').focus(function () {
		$(this).css({
			"border-color": "#66afe9",
			"box-shadow": "inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, 0.6)"
		});
	});
	$('input[ name="daterange"]').focus();
});


// 倒數跳轉，給倒數秒數 (sec) 跟要前往的連結 (toGo)

function countDownToGo(sec,toGo){
	let second = sec; // 設定倒數秒數
	document.getElementById("athCountDownSec").innerHTML= second;
	function goURL(){
		second -= 1;
		document.getElementById("athCountDownSec").innerHTML= second;
		if (second > 0){
			setTimeout(goURL,1000);
		}else{
			location.href= toGo ;
			clearTimeout();
		}
	}
	setTimeout(goURL,1000);

}




// 服務條款捲動閱讀完才能打勾~

jQuery(function($) {
	$(".serviceRule").on("scroll", function () {
		if ($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
			$(this).next().css("opacity", "1");
			$(this).next().find("input").removeAttr("disabled");
			$(this).next().find("label").removeClass("athCheckbox__isLocked");
		}
	});
});