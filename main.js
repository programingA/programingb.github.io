//웹 사이트 조절 상수
const $consoleXY = $('.console');
const $controllerLeft = $('.controllerLeft');
const $controllerRight = $('.controllerRight');
const $leftSideBar = $('.leftSideBar');
const $rightSideBar = $('.rightSideBar');
//웹 사이트 버튼 상수
const $powerBtn = $('.powerButton');
const $chipMotion = $('.chipMotion');
const $screenSystem = $('.screenSystem');
const $chipCase = $('.chipCase');
const $chipCaseFont = $('.chipCaseFont');
//드레그 존
const $dragZone1 = $('.dragZone1');
const $dragZone2 = $('.dragZone2');
const $dragZone3 = $('.dragZone3');

//반응형 사이트 크기조절 함수
$(document).ready(function () { 
    $chipCase.slideUp(0);
    var consoleX = $consoleXY.offset().left;
    var consoleY = $consoleXY.offset().top;
    var windowWidth = $(window).width();

    powerBtnOnOff(consoleY);
    windowOtion1(consoleY, consoleX, $chipMotion, $powerBtn, $controllerLeft, $controllerRight, $leftSideBar, $rightSideBar, $chipMotion, $dragZone1, $dragZone2, $dragZone3);
    windowOtion2(windowWidth, consoleY, consoleX, $controllerLeft, $controllerRight, $leftSideBar, $rightSideBar, $chipMotion, $dragZone1, $dragZone2, $dragZone3);
})

$(window).resize(function () {
    var consoleX = $consoleXY.offset().left;
    var consoleY = $consoleXY.offset().top;
    var windowWidth = $(window).width();

    windowOtion1(consoleY, consoleX, $chipMotion, $powerBtn, $controllerLeft, $controllerRight, $leftSideBar, $rightSideBar, $chipMotion, $dragZone1, $dragZone2, $dragZone3);
    windowOtion2(windowWidth, consoleY, consoleX, $controllerLeft, $controllerRight, $leftSideBar, $rightSideBar, $chipMotion, $dragZone1, $dragZone2, $dragZone3);
});
//사이트 조절 옵션 1,2
function windowOtion1(consoleY, consoleX, $chipMotion, $powerBtn, $controllerLeft, $controllerRight, $leftSideBar, $rightSideBar, $chipMotion, $dragZone1, $dragZone2, $dragZone3) {
    $chipMotion.css({
        top: consoleY - 130,
        left: consoleX + 292
    })
    $powerBtn.css({
        top: consoleY - 8,
        left: consoleX + 30
    })
    $controllerLeft.css({
        top: consoleY + 178,
        left: consoleX - 60
    })
    $controllerRight.css({
        top: consoleY + 178,
        left: consoleX + 746
    })
    $leftSideBar.css({
        top: consoleY - 5,
        left: consoleX - 115
    })
    $rightSideBar.css({
        top: consoleY - 5,
        left: consoleX + 700
    })
    $dragZone1.css({
        top: consoleY - 220,
        left: consoleX + 100
    })
    $dragZone2.css({
        top: consoleY - 220,
        left: consoleX + 100
    })
    $dragZone3.css({
        top: consoleY - 220,
        left: consoleX + 100
    })
}
function windowOtion2(windowWidth, consoleY, consoleX, $controllerLeft, $controllerRight, $leftSideBar, $rightSideBar, $chipMotion, $dragZone1, $dragZone2, $dragZone3) {
    if (windowWidth < 1184) {
        $controllerLeft.css({
            top: consoleY + 128,
            left: consoleX - 50
        })
        $controllerRight.css({
            top: consoleY + 128,
            left: consoleX + 556
        })
        $leftSideBar.css({
            top: consoleY - 2,
            left: consoleX - 89
        })
        $rightSideBar.css({
            top: consoleY - 2,
            left: consoleX + 515
        })
        $chipMotion.css({
            display: 'none'
        })
        $dragZone1.css({
            top: consoleY - 120,
            left: consoleX + 130
        })
        $dragZone2.css({
            top: consoleY - 120,
            left: consoleX + 130
        })
        $dragZone3.css({
            top: consoleY - 120,
            left: consoleX + 130
        })
    }
}
//버튼 동작 함수
function powerBtnOnOff(consoleY) {
    var onOff = 0;

    function infiniteChipAni() {
        $chipMotion.animate({
            top: consoleY - 30
        }, 1500)
        $chipMotion.animate({
            top: consoleY - 130
        }, 0, infiniteChipAni)
    }

    $powerBtn.click(function () {
        //꺼진 상태
        if (onOff == 0) {
            $screenSystem.css({
                display: 'block',
                animation: 'switchOn 1s'
            })
            $chipCaseFont.css({
                display: 'block'
            })
            $chipMotion.css({
                display: 'block'
            })
            $chipCase.slideToggle(1000);
            infiniteChipAni();
            var windowWidth = $(window).width();
            if (windowWidth < 1184) {
                $chipMotion.css({
                    display: 'none'
                })
            }
            onOff = 1;
        }
        //켜진 상태
        else {
            $screenSystem.css({
                display: 'none'
            })
            $chipCaseFont.css({
                display: 'none'
            })
            $chipMotion.css({
                display: 'none'
            })
            $chipCase.slideToggle(1000);
            onOff = 0;
        }
    })
}
