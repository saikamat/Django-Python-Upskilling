const correctPinSet = ['4132', '2314', '1230', '0321'];

function verifyPin(){
    // console.log('withdraw!')
    var userInputPin = document.getElementById("input-pin").value;
    if (correctPinSet.includes(userInputPin)){
        // console.log('correctPin');
        document.getElementById('pin-status-message').innerHTML="Correct Pin";
        document.getElementById('pin-status-message').style.color="green";
        document.getElementById('output-message').innerHTML="Accessing your account...";
        location.replace("../../html/js-interactive/051-withdraw-atm.html")
    }
    else{
        // console.log('incorrectPin');
        document.getElementById('pin-status-message').innerHTML="Incorrect Pin";
        document.getElementById('pin-status-message').style.color="red";
    }
}

function refresh(){
    location.reload(true);
}