let form = document.getElementById('formulario');

let dados = [];

form.addEventListener('submit', function (e) {

    e.preventDefault();

    let valido = true;

    let usuario = document.getElementById('usuario').value;
    let senha = document.getElementById('senha').value;


    if (usuario.trim() === '') { //Verificar se está vazio//
        feedback.textContent = 'O nome é obrigatório!';
    } else {
        feedback.textContent = '' //Enviar o formulario//

        document.getElementById('invalid-feedback').textContent = '';

        if (!usuario.includes(" ")) {

            document.getElementById('invalid-feedback').textContent = 'Usuário inválido';
            valido = false;
        }

        if (senha === '4321') {


        } else {
            alert("Senha incorreta!");
            valido = false;
        }




        form.reset();


    })