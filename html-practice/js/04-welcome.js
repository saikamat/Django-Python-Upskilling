var hour = new Date().getHours();

var morningImage = "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW9ybmluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60";
var eveningImage = "https://images.unsplash.com/photo-1554315025-0f10196df289?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZXZlbmluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60";
var nightImage = "https://images.unsplash.com/photo-1488866022504-f2584929ca5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmlnaHR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60";

console.log(hour);

if (hour < 12){
    // console.log('Morning');
    document.getElementById('time-message').innerHTML='Morning';
    document.body.style.backgroundColor='#ffe49c';
    document.getElementById('time-image').src=morningImage;
    document.getElementById('time-image').style.border="solid 3px black";
}
else if(12 < hour < 21){
    // console.log('Evening');
    document.getElementById('time-message').innerHTML='Evening';
    document.body.style.backgroundColor='lightblue';
    document.getElementById('time-image').src=eveningImage;
    document.getElementById('time-image').style.border="solid 3px black";
}
else{
    // console.log('Night');
    document.getElementById('time-message').innerHTML='Night';
    document.body.style.backgroundColor='black';
    document.body.style.color='white';
    document.getElementById('time-image').src=nightImage;
    document.getElementById('time-image').style.border="solid 3px white";
}