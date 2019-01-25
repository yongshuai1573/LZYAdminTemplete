// var multiple = false;
$('.classify-header>p').click(function () {
    // if(!multiple){
    //     $('.detailed').slideUp();
    //     $('.classify-header').removeClass('active');
    // }//仅展开一个
    $(this).siblings().slideToggle();
    $(this).parent().toggleClass('active');
});
$('.icon-shanchu').click(function () {
    $(this).parent().parent().remove();
});