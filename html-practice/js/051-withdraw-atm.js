var initialAmount = 10000;

function withdraw(){
    // console.log(document.getElementById('withdrawal-amount').value);
    var requestedWithdrawalAmount = document.getElementById('withdrawal-amount').value
    var remainingAmount = initialAmount - requestedWithdrawalAmount;
    // console.log(requestedWithdrawalAmount);
    document.getElementById('requested-withdrawal-amount').innerHTML=requestedWithdrawalAmount;
    document.getElementById('remaining-amount').innerHTML=remainingAmount;
}