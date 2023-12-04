let STARSNUM = 100;
let SPEED = 1;

let windowW = window.screen.width;
let windowH = window.screen.height;
let sky = '#sky';

for (let i=0; i<STARSNUM; i++) {
    let size = Math.floor((Math.random()*5)+2),
        animDur = Math.floor((Math.random()*10)+4) / (SPEED/2),
        posX = Math.floor((Math.random()*windowW)+1),
        posY = Math.floor((Math.random()*windowH)+1);
    
        let randomAnimDuration = [
        '-webkit-animation-duration: ' + animDur + 's;',
        '-moz-animation-duration: ' + animDur + 's;',
        '-ms-animation-duration: ' + animDur + 's;',
        '-o-animation-duration: ' + animDur + 's;',
        'animation-duration: ' + animDur + 's;'
    ].join('');
    
    let style = 'width: ' + size + 'px; height: ' + size + 'px; left: ' + posX + 'px; top: ' + posY + 'px;' + randomAnimDuration;
    
    sky.replace('<div class="star" style="' + style + '"></div>');
}