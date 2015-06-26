function FormValidation(){
    var name = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm_password").value;

    if(name == "" || name==null || name.length<=4){
        document.getElementById('erorr-name').innerHTML="Please enter a username";
        return false;
    }

    
    if(password.length<=5)
    {
        document.getElementById('erorr-pass').innerHTML="Password must be at least 6 characters long!";
        return false;
    }

    if (!password.match(/[0-9]/g))
    {
        document.getElementById('erorr-pass').innerHTML="Password required!";
        return false;
    }


    if(!password.match(/[A-Z]/g))
    {
        document.getElementById('erorr-pass').innerHTML="Type at least one [C]apital letter!";
        return false;
    }


    if(password !== confirmPassword)
    {
        document.getElementById('erorr-cpass').innerHTML="The password must be the same!";
        return false;
    }

    

    if(email === '' ||email.indexOf('@') === -1 || email.indexOf('.') === -1)
    {
        document.getElementById('erorr-email').innerHTML="Enter a valid email!";
        return false;
    }
    
}