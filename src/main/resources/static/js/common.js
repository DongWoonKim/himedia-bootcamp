$(document).ready(function () {
    const $topBtn = $('.scroll-to-top');

    $('#content').on('scroll', function () {
        console.log($('#content').scrollTop())
        if ($('#content').scrollTop() > 300) {
            $topBtn.fadeIn();
        } else {
            $topBtn.fadeOut();
        }
    });
});