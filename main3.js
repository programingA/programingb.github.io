//메뉴얼 관련 상수
const manual = document.querySelector('.manual');
const manualTextBox = document.querySelector('.manualTextBox');
const lineText1 = document.querySelector('.lineText1');
const lineText2 = document.querySelector('.lineText2');
const textImg1 = document.querySelector('.textImg1');
const textImg2 = document.querySelector('.textImg2');
const textImg3 = document.querySelector('.textImg3');
//on off 변수
let onf = 0;
//메뉴얼 확대
function sizeUp(){
    if (onf === 0) {
        onf++;
        console.log("시작버튼");
        manual.style.cssText = 'animation: manualAni 1s; animation-fill-mode: forwards; background-color: rgb(250, 247, 66); cursor: default;';
        manualTextBox.style.cssText = 'animation: manualTextBoxAni 2s; animation-fill-mode: forwards; display: block;';
        lineText1.style.cssText = 'animation: lineTextAni 3s;';
        lineText2.style.cssText = 'animation: lineTextAni 3s;';
        textImg1.style.cssText = 'animation: manualImgAni 2s;';
        textImg2.style.cssText = 'animation: manualImgAni 3s;';
        textImg3.style.cssText = 'animation: manualImgAni 4s;';
    }
}
//메뉴얼 축소
function sizeDown(){
    if (onf === 1) {
        onf--;
        console.log("종료버튼");
        manual.style.cssText = 'animation: manualAniBack 1s; animation-fill-mode: none; ';
        manualTextBox.style.cssText = 'animation-fill-mode: none;';
    }
}
