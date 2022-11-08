
function tipCalculate(){
    var billAmount = document.getElementById('validationCustomUsername').value;
    var peopleCount = document.getElementById('people-count').value;
    var tipPercentage = document.getElementById('tip-percentage').value;

    console.log("bill: €"+billAmount);
    console.log("peopleCount: "+peopleCount);
    console.log("tip: "+tipPercentage+"%");
    
    var tipPerHead = (billAmount * (1+(tipPercentage/100)))/peopleCount;
    console.log("tip per head: €"+tipPerHead); 
    // return tipPerHead;
    document.getElementById('tip-calculation-message').innerHTML="Final Tip per person is: "
    document.getElementById('tip-calculation-output').innerHTML="€ "+ tipPerHead;

}
