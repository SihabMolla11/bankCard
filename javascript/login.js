// step:-1 ---> check event handler submit button is worked
const submitBtn = document.getElementById("Submit-btn").addEventListener('click', function(){
// step:-2 ---> get the email address inside the email input fild

    // please remember to use .valeu to get input value
    const userEmail = document.getElementById('user-email')
    const emailFild = userEmail.value;


    // step:-3 ---> get The password
    const userPassword = document.getElementById('user-password')
    const passwordFild = userPassword.value;

    // DANGER : DON'T USE VERIFY EMAIL PASSWORD ON THE CLIENT SIDE
    // step:-4 ---> VARIFY EMAIL AND PASSWORD
    if(emailFild === 'sihabmolla10@gmail.com' && passwordFild === '111...222'){
        window.location.href = 'bank.html';
    }
    else{
        alert('please check email and password incorrect password')
    }
});