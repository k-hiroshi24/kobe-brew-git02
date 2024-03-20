
// 年齢確認
$(function(){
    if($("div").hasClass("cart__check")){
        $(".cart__checkout-button").attr("disabled","disabled");
        $("#cart_check").click(function(){
            if ($(this).prop("checked") == false){
               $(".cart__checkout-button").attr("disabled", "disabled");
            } else{
                $(".cart__checkout-button").removeAttr("disabled");
            }
        });

    }
});


// トップのポップアップ
$(document).ready(function() {
    // トップページのURL
    var topPageUrl = 'https://kobe-brew.myshopify.com/'; // トップページのURLをここに設定
  
    // サイト表示後2秒待機してからバナーを表示する
    setTimeout(function() {
      // 現在のURLを取得
      var currentUrl = window.location.href;
  
      // トップページのみバナーを表示する
      if (currentUrl === topPageUrl) {
        $('#coupon-banner').show();
      }
    }, 2000); // 2秒待機する
  
    // 閉じるボタンがクリックされたらバナーを非表示にする
    $('#coupon-banner-close').click(function() {
      $('#coupon-banner').hide();
    });
  });
  
  
 
// アコーディオン
  $(function () {
    // タイトルをクリックすると
    $(".js-accordion-title").on("click", function () {
      // クリックした次の要素を開閉
      $(this).next().slideToggle(300);
      // タイトルにopenクラスを付け外しして矢印の向きを変更
      $(this).toggleClass("open", 300);
    });
  });