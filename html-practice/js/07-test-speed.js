// var clicked;

window.onload = reappearBlock();

function reappearBlock(){
    changePositionandShape();
    document.getElementById('random-shape').style.display='block';
    start = Date.now();
    // console.log('start = '+start+' ms')
}

function disappearBlock(){
    document.getElementById('random-shape').style.display='none';
    var clicked = Date.now();
    // console.log('clicked = '+clicked+' ms');
    var reactionTime = (clicked - start)/1000;
    document.getElementById('click-speed').innerHTML = reactionTime;
    // console.log('reaction time = '+reactionTime+ 's')
    var randomDelay = (Math.random()*3*1000);
    setTimeout(reappearBlock, randomDelay);
}

function changePositionandShape(){
    // console.log('changePositionandShape()')
    var randomTop = Math.random()*400;
    var randomLeft = Math.random()*1000;
    document.getElementById('random-shape').style.top = randomTop+'px';
    document.getElementById('random-shape').style.left = randomLeft+'px';
    // document.getElementById('random-shape').id = 'circle'
}