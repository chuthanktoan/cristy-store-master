var accountApi = 'http://localhost:3000/account';
const btnRegister = document.querySelector('.btn-register')
function createAccount(data){
    var options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
    }
    
    fetch(accountApi, options)
        .then(function(res){
            return res.json();
        })
}
btnRegister.onclick = function(e){
    var form = document.querySelector('.form_login')
    var inputs = document.querySelectorAll('.form_login input');
    var errors = document.querySelectorAll('.error');
    console.log(inputs);
    for(var i =0; i< inputs.length; i++){
        
        if(inputs[i].getAttribute("type") == 'text'){
            if(inputs[i].value == ''){
                errors[i].innerText= 'Name';
            }
        }else if(inputs[i].getAttribute("id") == 'password'){
            if(inputs[i].value == ''){
                errors[i].innerText= 'Password';
            }
        }else if(inputs[i].getAttribute("id") == 're-password'){
            if(inputs[i].value == ''){
                errors[i].innerText= 'Re-Password';

            }}
            else if(inputs[i].getAttribute("type") == 'email'){
                if(inputs[i].value == ''){
                    errors[i].innerText= 'Email';
                }
            }
        
        
    }
    inputs[0].oninput = function(){
        errors[0].innerText= '';
    
    }
    inputs[1].oninput = function(){
        errors[1].innerText= '';

    }
    inputs[2].oninput = function(){
        errors[2].innerText= '';

    }
    inputs[3].oninput = function(){
        errors[3].innerText= '';

    }
    const email = inputs[1].value;
    const username = inputs[0].value;
    const password = inputs[2].value;
    
    var formData = {
        username: username,
        password: password
    }
    createAccount(formData)
}

