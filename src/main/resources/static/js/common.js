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

function scrollToTop() {
    $('html, body').animate({ scrollTop: 0 }, 500); // 500ms 동안 부드럽게 스크롤
}