function logar(){
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let form = document.getElementById("formulario")
    const aviso0 = document.getElementById("aviso0")
    const aviso1 = document.getElementById("aviso1")
    
    form.addEventListener('submit', e =>{
        let submitForm = true;

        if(email=="teste@gmail.com"){
            submitForm = true
        }else{
            submitForm=false
            aviso0.innerText="Email incorreto"
        }
        if(senha=="123456"){
            submitForm = true
        }else{
            submitForm=false
            aviso1.innerText="Senha incorreta"
        }

        if(!submitForm){
            e.preventDefault();
        }
        
    })
}