$(document).ready(function(){

    //Fullpage設定
    $('#Fullpage').fullpage({
        navigation: true, // 顯示導行列
        navigationPosition: "right", // 導行列位置
        anchors: ['home', 'about', 'experience', 'skill', 'works', 'contact'],
        scrollOverflow: true,
        fitToSection: false,
        menu: 'header',
        afterLoad: function (anchorLink, index) {
            var loadedSection = $(this);
            //using anchorLink
            if (anchorLink == 'experience') {
                $('header').fadeOut(100);
            }else{
                $('header').fadeIn(500);
            }
        }
    });

    //點擊往下
    $(document).on('click', '#btnGoDown', function () {
        $.fn.fullpage.moveSectionDown();
    });

});