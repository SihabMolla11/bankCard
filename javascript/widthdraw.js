// step:-1 withdraw section
const withdrawBtn = document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawInputFild = document.getElementById('withdraw-input');
    const withdrawAmmountString = withdrawInputFild.value;
    const newWithdrawAmountNumber = parseFloat(withdrawAmmountString);
    // console.log(typeof newWithdrawAmountNumber)

     // step:-7 clear input filde
     withdrawInputFild.value = '';

    if(isNaN(newWithdrawAmountNumber)){
        alert('please provide a number')
        return;
    }

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const withdrawTotalElementString = withdrawTotalElement.innerText;
    const withdrawTotalElementnumber = parseFloat(withdrawTotalElementString);
    // console.log(withdrawTotalElementnumber);


    const blanceTotalElement = document.getElementById('myCurrent-blance');
    const blanceTotalElementString = blanceTotalElement.innerText;
    const newTotalBlanceString = parseFloat(blanceTotalElementString);

    if(newTotalBlanceString < withdrawTotalElementnumber){
        alert('Baper Bank a Eto taka ni');
        return;
    }

    const withdreaTotal = newWithdrawAmountNumber + withdrawTotalElementnumber;
    const setWithdrawTotal = withdrawTotalElement.innerText = withdreaTotal;

    const previseBlanceTotal = newTotalBlanceString - newWithdrawAmountNumber;
    blanceTotalElement.innerText = previseBlanceTotal;





 });