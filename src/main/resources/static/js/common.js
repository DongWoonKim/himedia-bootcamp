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

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            alert("주소가 복사되었습니다!");
        }).catch(err => {
            console.log("복사 실패: " + err);
        });
    } else {
        // fallback for unsupported browsers
        const textarea = document.createElement("textarea");
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand('copy');
            alert("주소가 복사되었습니다!");
        } catch (err) {
            console.log("복사 실패 (fallback): " + err);
        }
        document.body.removeChild(textarea);
    }
}