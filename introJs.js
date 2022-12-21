document.getElementById("btn").onclick = () => {
    introFont.style.display = 'none';
    btn.style.cssText = 'display: none';
    circle.style.cssText = 'animation: aniOne 1s ease-in alternate; animation-iteration-count: 2;';
    circle2.style.cssText = 'animation: aniTwo 2s; animation-delay: 2s; animation-fill-mode: forwards;';
    setTimeout(typing, 4100);
}

const typingAni = document.querySelector("#typingAni");
const letters = [
  "<!DOCTYPE html> \n <html lang=\"en\"> \n <head> \n <meta charset=\"UTF-8\"> \n <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"> \n <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"> \n <title>Document</title> \n </head> \n <body> \n \n </body> \n\n </html>"
];
const speed = 50;
let i = 0;

const changeLineBreak = (letter) => {
  return letter.map(typingAni => typingAni === "\n" ? "<br>" : typingAni);
}

const typing = async () => {
  typingAni.style.display ="inline";
  const letter = changeLineBreak(letters[i].split(""));

  while (letter.length) {
    await wait(speed);
    typingAni.innerHTML += letter.shift(); 
  }
  await wait(800);

  typingAni.style.display = "none";
  await wait(1000);
  lodingImg.style.display = "inline"
  lodingBar.style.display = "block"
  await wait(10000);
  location.replace('/mainPage/main.html');
  //location.replace('https://programinga.github.io/');
}

function wait(ms) {
  return new Promise(res => setTimeout(res, ms))
}
