$(document).ready(function(){

    //Fullpage設定
    $('#Fullpage').fullpage({
        navigation: false, // 顯示導行列
        navigationPosition: "right", // 導行列位置
        anchors: ['home', 'about', 'skill', 'works', 'contact'],
        scrollOverflow: true,
        menu: 'header'
    });

    //點擊往下
    $(document).on('click', '#btnGoDown', function () {
        $.fn.fullpage.moveSectionDown();
    });

});