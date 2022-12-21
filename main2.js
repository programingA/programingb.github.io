//칩 관련 상수
const $dragChiped1 = $('.chip1');
const $dragChiped2 = $('.chip2');
const $dragChiped3 = $('.chip3');
const dragChip1 = document.querySelector('.chip1');
const dragChip2 = document.querySelector('.chip2');
const dragChip3 = document.querySelector('.chip3');
const chipMotion = document.querySelector('.chipMotion');
const dragZone1 = document.querySelector('.dragZone1');
const dragZone2 = document.querySelector('.dragZone2');
const dragZone3 = document.querySelector('.dragZone3');
//drag and drop 실행
dragChipSystem1();
dragChipSystem2();
dragChipSystem3();
//첫번째 칩 동작 함수
function dragChipSystem1() {
    dragChip1.addEventListener("drag", () => {
        dragChip1.style.opacity = '0';
    });

    dragChip1.addEventListener("dragstart", () => {
        $dragChiped1.toggleClass('changed');
        chipMotion.style.opacity = '0';
        dragZone1.style.display = 'block';
    });
    dragChip1.addEventListener("dragend", () => {
        dragChip1.style.opacity = '1';
        $dragChiped1.toggleClass('changed');
        chipMotion.style.opacity = '0.7';
        dragZone1.style.display = 'none';
    });
    dragZone1.addEventListener("dragover", (e) => {
        e.preventDefault();
    });
    dragZone1.addEventListener("drop", (e) => {
        e.preventDefault();
        inSite1();
    });
}
//두번째 칩 동작 함수
function dragChipSystem2() {
    dragChip2.addEventListener("drag", () => {
        dragChip2.style.opacity = '0';
    });
    dragChip2.addEventListener("dragstart", () => {
        $dragChiped2.toggleClass('changed');
        chipMotion.style.opacity = '0';
        dragZone2.style.display = 'block';
    });
    dragChip2.addEventListener("dragend", () => {
        dragChip2.style.opacity = '1';
        $dragChiped2.toggleClass('changed');
        chipMotion.style.opacity = '0.7';
        dragZone2.style.display = 'none';
    });
    dragZone2.addEventListener("dragover", (e) => {
        e.preventDefault();
    });
    dragZone2.addEventListener("drop", (e) => {
        e.preventDefault();
        alert("아직 구현되지 않은 칩입니다.");
    });
}
//세번째 칩 동작 함수
function dragChipSystem3() {
    dragChip3.addEventListener("drag", () => {
        dragChip3.style.opacity = '0';
    });
    dragChip3.addEventListener("dragstart", () => {
        $dragChiped3.toggleClass('changed');
        chipMotion.style.opacity = '0';
        dragZone3.style.display = 'block';
    });
    dragChip3.addEventListener("dragend", () => {
        dragChip3.style.opacity = '1';
        $dragChiped3.toggleClass('changed');
        chipMotion.style.opacity = '0.7';
        dragZone3.style.display = 'none';
    });
    dragZone3.addEventListener("dragover", (e) => {
        e.preventDefault();
    });
    dragZone3.addEventListener("drop", (e) => {
        e.preventDefault();
        alert("아직 구현되지 않은 칩입니다.");
    });
}
//칩1 드롭했을때 동작 함수
inSite1 = async () => {
    await wait(1000);
    location.replace('https://programinga.github.io/');
};
//비동기 실행을 위해서 만든 함수
function wait(ms) {
    return new Promise(res => setTimeout(res, ms))
}