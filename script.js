let form = document.getElementById('formulario');

let dados = [];

form.addEventListener('submit', function (e) {

    e.preventDefault();


        let valido = true;

        let nome = document.getElementById('nome').value;
        let senha = document.getElementById('senha').value;
        const feedback = document.getElementById('invalid-feedback');

       
        i f (nomeInput.value.trim() === '') {
         feedback.textContent = 'O nome é obrigatório!';
        } else {
         feedback.textContent = ''
        alert('Formulário enviado com sucesso!');

        document.getElementById('invalid-feedback').textContent = '';

    if (!nome.includes(" ")) {

        document.getElementById('erroNome').textContent = 'Nome inválido,deve conter o nome completo';
        valido = false;
    }


        form.reset();
    

})