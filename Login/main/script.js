function logar(){
    
    const form = document.getElementById("formulario")
    const aviso0 = document.getElementById("aviso0")
    
    form.addEventListener('submit', e =>{
        let submitForm = true;
        let email = document.getElementById("email").value;
        let senha = document.getElementById("senha").value;
        //dps tem que vê com os caba la como que bota sql kkkkk
        if(email!=="teste@gmail.com"){
            submitForm=false
        }if(senha!=="123456"){
            submitForm=false
        }
        if(!submitForm){
            e.preventDefault();
            aviso0.innerText="Email ou senha incorretos"
        }
    })
    
}
function tema(){
    const botao = document.getElementById('switcher');

    botao.addEventListener('click', () => {
        let bg = document.body.classList.value
        let rng =Math.floor(Math.random()*10)+1;

        switch (rng) {
            case 1:
                document.body.className = "tema-secreto";
                break;
        
            default:
                switch (bg){
                case "tema-claro":
                    document.body.className = "tema-escuro";
                break

                case "tema-escuro":
                    document.body.className = "tema-claro";
                break

                default:
                document.body.className = "tema-escuro";
                break;}
            break;
        }
    
    })
}