var signinEmail = document.getElementById('signinEmail');
var signinPassword = document.getElementById('signinPassword');
var link = document.querySelector('#welcome');
var demo= document.getElementById("demo")
var welcomeUserLog= document.getElementById("welcomeUserLog")



function checkAll(){
    var logInCheck={
     passwordLog : signinPassword.value,
     emailLog : signinEmail.value,
}

    for( var i =0 ; i < logArr.length ; i++){
        if( logArr[i].password.toLowerCase() == logInCheck.passwordLog.toLowerCase() && logArr[i].email.toLowerCase() == logInCheck.emailLog.toLowerCase() ){
            welcomeUserLog = localStorage.setItem('userName', logArr[i].name)
            
            return true 
        }            
    }
}

console.log(myfun())
function myfun(){
    demo.innerHTML = localStorage.getItem('userName')
}

function logIn(){
    if(isEmpty() == true){
        document.getElementById('incorrect').innerHTML ="All inputs is required"
    }else if( incorrectInput() == true ){
        document.getElementById('incorrect').innerHTML ="incorrect email or password"
    }else if(checkAll() == true){
        link.href='pages/welcome.html';
        myfun()
    } else{
        document.getElementById('incorrect').innerHTML ="incorrect"
    }
    
}




function isEmpty(){
    if(signinEmail.value==('') || signinPassword.value==(''))
    return  true
}

function incorrectInput(){
    for( var i =0 ; i<logArr.length ; i++){
    if(logArr[i].email.toLowerCase() != signinEmail.value.toLowerCase() && logArr[i].password.toLowerCase() != signinPassword.value.toLowerCase() )
    return  true
}
}
function logout() {
    localStorage.removeItem('sessionUsername')
}