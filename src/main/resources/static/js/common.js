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

function copyAddress() {
    const text = document.getElementById("address-text").textContent;
    navigator.clipboard.writeText(text).then(() => {
        alert("주소가 복사되었습니다!");
    }).catch(err => {
        alert("복사에 실패했습니다.");
        console.error(err);
    });
}