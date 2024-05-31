var input = document.querySelector('input[type=password]')
var eyeopen = document.querySelector('.fa-eye')
var eyeclose = document.querySelector('.fa-eye-slash')
eyeopen.onclick = function(){
    eyeopen.classList.add("hidden2");
    eyeclose.classList.remove("hidden2");
    input.setAttribute("type","text");
}
eyeclose.onclick = function(){
    eyeclose.classList.add("hidden2");
    eyeopen.classList.remove("hidden2");
    input.setAttribute("type","password");
}

const accountApi = 'http://localhost:3000/account';
const btnLogin = document.querySelector('.btn-login')
btnLogin.addEventListener('click', e => { 
    var form = document.querySelector('.form_login')
    var inputs = document.querySelectorAll('.form_login input');
    var errors = document.querySelectorAll('.error');
    console.log(inputs);
    for(var i =0; i< inputs.length; i++){
        var val = inputs[i].value;
        if(inputs[i].getAttribute("type") == 'email'){
            if(inputs[i].value == ''){
                errors[i].innerText= 'Email';
            }
        }else if(inputs[i].getAttribute("type") == 'password'){
            if(inputs[i].value == ''){
                errors[i].innerText= 'Password';
            }
        }
        
        
    }
    
    inputs[0].oninput = function(){
            errors[0].innerText= '';
        
    }
    inputs[1].oninput = function(){
        errors[1].innerText= '';
    
    }
    const username = inputs[0].value;
    const password = inputs[1].value;
    fetch(accountApi)
        .then(function(res){
            return res.json();
        })
        .then(accounts =>{
            const users = accounts;
            const validUser = users.find(user => user.username === username && user.password === password);
            console.log(validUser)
            if (validUser) {
                alert('Đăng nhập thành công!');
                
              } else {
                alert('Đăng nhập thất bại.');
               
              }
        }) 
        .catch(err => console.log('error'))
        
})

