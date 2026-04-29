let form = document.getElementById('formulario');

let dados = [];

form.addEventListener('submit', function (e) {

    e.preventDefault();

    let valido = true;

    let usuario = document.getElementById('usuario').value;
    let senha = document.getElementById('senha').value;

    if (usuario.trim() === '') {   //campo vazio
        alert("Campo de usuário vazio!");
        valido = false;
    }

    if (usuario.trim() === 'Marquinhos04') { //Verificar o nome//

    } else {
        alert("Usuário incorreto!"); //aviso//
        valido = false;
    }

    if (senha.trim() === '') {
        alert("Campo de senha vazio!!")
        valido = false;
    }

    if (senha.trim() === '4321') { //verificar se a senha é a correta//


    } else {
        alert("Senha incorreta!"); //aviso//
        valido = false;
    }

    if (valido) {


        let usuarioObj = {
            usuario: usuario,
            senha: senha
        };

        dados.push(usuarioObj);
        console.table(dados);
        alert('Formulário enviado com sucesso!');
        window.location.href = "inicial.html";

        form.reset();
    }

})