/**
 * Created by wansan on 2016/2/24.
 */
(function (win) {
    $(".navList a").on("click",function () {
        console.log($(this).text());
        $(this).addClass("click-scale").on("webkitTransitionEnd", function () {
            $(this).removeClass("click-scale").css({"-webkit-transition":"all 0.2s ease-out"});
        });
    })
})(window)