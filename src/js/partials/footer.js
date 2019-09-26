// 雙層下拉選單
var colleges=['老爺酒店','老爺行旅','老爺會館'];
var collegeSelect=document.getElementById("athFooter__branch");
var inner="";
for(var i=0;i<colleges.length;i++){
    inner=inner+'<option value=i>'+colleges[i]+'</option>';
}
collegeSelect.innerHTML=inner;


var sectors=new Array();
sectors[0]=['知本老爺酒店 ',' 北投老爺酒店' ,' 新竹老爺酒店' ,' 礁溪老爺酒店'];
sectors[1]=['宜蘭傳藝老爺行旅 ',' 老爺會館台北南西 '];
sectors[2]=['台中大毅老爺酒店 ',' 老爺會館台北林森 '];
function changeCollege(index){
    var Sinner="";
    for(var i=0;i<sectors[index].length;i++){
        Sinner=Sinner+'<option value=i>'+sectors[index][i]+'</option>';
    }
    var sectorSelect=document.getElementById("athFooter__branchList");
    sectorSelect.innerHTML=Sinner;
}
changeCollege(document.getElementById("athFooter__branch").selectedIndex);

//ScrollTop
$(document).ready(function() {

    $('.athScrolltop').click(function(event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: 0}, 1000);
    });

});



// //Alert 加入購物車

localStorage.setItem('cartNumber',0);
cartNumber = localStorage.getItem('cartNumber');


if(cartNumber > '0' ){
    $('.athBadge').show();
    $('.athBadge').html(cartNumber);
}else{
    $('.athBadge').hide();
}

$('.js-cart').click(function(){
    // 顯示alert並關閉
    $('.alert').addClass('in');
    function closeAlert(){
        $('.alert').removeClass('in');
    }
    setTimeout(closeAlert, 500);

    //取值
    let cartNumber= parseInt(localStorage.getItem('cartNumber'));
    console.log(cartNumber);

    cartNumber++;
    console.log(cartNumber);
    $('.athBadge').html(cartNumber);

    localStorage .setItem('cartNumber',cartNumber);

    //呈現
    if(cartNumber == 0 ){
        $('.athBadge').hide();
    }else{
        $('.athBadge').show();
    }
});
