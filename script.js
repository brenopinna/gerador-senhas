const input = document.getElementById('tamanho-senha')
const botao = document.querySelector('button')
const pSenha = document.querySelector('p')

botao.addEventListener('click', () => {
    let qtdCaracteres = input.value
    let inputTratado = validaInput(qtdCaracteres)
    if(inputTratado){
        let senha = geraSenha(inputTratado)
        pSenha.style.display = 'block'
        pSenha.innerHTML = senha
    }else{
        input.value = ''
        input.focus()
        alert('INPUT INVÁLIDO!')
    }
})

function validaInput(input){
    if(input && !isNaN(input)){
        if(input > 0){
            let inputTratado = '';
            let lenInput = input.length
            for(let i = 0; i < lenInput; i++){
                if(input[i] != ' '){
                    inputTratado += input[i]
                }
            }
            return inputTratado
        }else{
            return false
        }
    }else{
        return false
    }
}

function geraSenha(lenSenha){
    const caracteres = [1,2,3,4,5,6,7,8,9,0,'!','@','#','$','%','&', 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    let senha = '';
    for(let i = 0; i < lenSenha; i++){
        let randomIndex = parseInt(Math.random() * caracteres.length);
        senha += caracteres[randomIndex];
    }
    return senha
}