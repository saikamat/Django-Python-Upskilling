var colour=0xef5140;

function dec2Hex(dec) {
    return Math.abs(dec).toString(16);
}

function increment(){
    colour=colour+50;
    // alert(dec2Hex(num))
    // document.getElementById('value').innerHTML=num;
    // document.body.style.backgroundColor=dec2Hex(colour);
    // document.body.style.backgroundColor="#ef5140";
    // alert(#+(dec2Hex(num)))
    // console.log('#'+dec2Hex(colour));
    document.body.style.backgroundColor='#'+dec2Hex(colour);
}

function decrement(){
    colour=colour-50;
    // alert(dec2Hex(num))
    // document.getElementById('value').innerHTML=num;
    // document.body.style.backgroundColor=dec2Hex(colour);
    document.body.style.backgroundColor='#'+dec2Hex(colour);
} 