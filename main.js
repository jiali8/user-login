// User login website

//eventlisteners 
document.getElementById('loginbtn').addEventListener('click',loginFunction)

//event functions 
function loginFunction () {
    
    //get input value (what character to looks for)
    let name = document.getElementById('username').value;
    name = name.toLowerCase();
    let pass = document.getElementById('password').value;


    //test input variable and update the page 
    if (name == 'jiali' && pass== 'mypassword') {
        //report sucessful login
        alert('Sign In Successful');

    } else if (name == 'jiali' && pass != 'mypassword') {
        //report password unsucessful
        alert('Password Invalid');

    } else if (name != 'jiali' && pass == 'mypassword') {
        //report username unsucessful
        alert('Username Invalid');

    } else {
        //report sign in unsucessful
        alert('Sign In Unsucessful');

    }

    
}