$(document).ready(function () {
    const $topBtn = $('.scroll-to-top');

    $('#content').on('scroll', function () {
        if ($('#content').scrollTop() > 300) {
            $topBtn.fadeIn();
        } else {
            $topBtn.fadeOut();
        }
    });
});

function scrollToTop() {
    $('#content').animate({ scrollTop: 0 }, 500); // 500ms 동안 부드럽게 스크롤
}