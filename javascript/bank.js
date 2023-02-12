// step:- 1 --> add event lsitener to hte deposit button
const depositBtn = document.getElementById('deposit-btn').addEventListener('click', function(){
    // stet:-2 get the deposit amount from the deposit input field.
    // for input field use value to the value inside the input field.
    const depositInputFild = document.getElementById('deposit-input');
    const newdepositAmountstring = depositInputFild.value;
    const newdepositAmountnumber = parseFloat(newdepositAmountstring);


//    step:-3 get the current deposit total.
// for non input (element other then input, textarea) use innetText to gate the text.
    const currentDeposit = document.getElementById('current-deposit');
    const prevuscurrentValueString = currentDeposit.innerText;
    const prevuscurrentValueNumber =parseFloat(prevuscurrentValueString);
    // step:-4 add numbet to the deposit
    const currentDepositValue = prevuscurrentValueNumber + newdepositAmountnumber;
    const deposit =  currentDeposit.innerText = currentDepositValue;

    // step:-5 get blance total
    const myCurrentBlance = document.getElementById('myCurrent-blance');
    const myCurrentBlancestring = myCurrentBlance.innerText;
    const myCurrentBlancesnumber = parseFloat(myCurrentBlancestring);
    // step:-6 calculate total blance
    const totalbalanceSum =  myCurrentBlancesnumber + newdepositAmountnumber;
    const newTotalBlance = myCurrentBlance.innerText = totalbalanceSum;

    // step:- 7 clear the deposit field
    depositInputFild.value ='';
});
