$(document).ready(() => {
    // 자동 슬라이드
    setInterval(() => slide(1), 1500);

    const $prevBtn = $('.slider-1 .side-btns > div:first-child');
    const $nextBtn = $('.slider-1 .side-btns > div:last-child');

    // 클릭 또는 터치 시 슬라이드 이동
    $prevBtn.on('click touchstart', () => slide(-1));
    $nextBtn.on('click touchstart', () => slide(1));
});

function slide(move){
    // 현재 div이면서 active클래스를 가진 요소를 가져와라..
    let $cur = $('.slider-1 .slides > div.active');
    let $next = null;
    // 현재 페이지 점
    let $curDot = $('.pages > div.active');
    let $nextDot = null;

    if(move === -1) { // 이전 div요소
        $next = $cur.prev();
        $nextDot = $curDot.prev();

        if($next.length === 0) {
            $next = $('.slider-1 .slides > div:last-child');
            $nextDot = $('.pages > div:last-child');
        }

    } else if(move === 1) { // 다음 div요소
        // 다음 요소 접근
        $next = $cur.next();
        $nextDot = $curDot.next();
        // 마지막 요소에서 다음으로 접근하려 할 때
        if($next.length === 0) {
            $next = $('.slider-1 .slides > div:first-child');
            $nextDot = $('.pages > div:first-child');
        }
    }

    $cur.removeClass('active');
    $next.addClass('active');
    $curDot.removeClass('active');
    $nextDot.addClass('active');
}