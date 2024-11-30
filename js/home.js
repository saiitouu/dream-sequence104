$(function(){
    $('.slick01').slick({
        centerMode: true,
        centerPadding: '25%',
      });


      
       // to-topボタンのスクロール

    $(".top-btn").hide();

    $(window).scroll(function () {
        if ($(window).scrollTop() > 500) {    //スクロール量が500以上になったら、
            $(".top-btn").fadeIn(500);       //.to-topを0.5秒かけてフェードインさせる。
        } else {                              //そうでなければ、
            $(".top-btn").fadeOut(500);      //.to-topを0.5秒かけてフェードアウトさせる。
        }
    });


    // スムーススクロール
    $(".top-btn").click(function () {                   //.to-topの中のaタグがクリックされたとき、
        $("html,body").animate({ scrollTop: 0 }, 500);    //0.5秒かけて画面の一番上までスクロールするアニメーションを実行
        return false;
    });
});