function criarConta(event) {
    event.preventDefault(); 

    const nome = document.getElementById('Name').value;
    const senha = document.getElementById('Senha').value;
    const email = document.getElementById('email').value;

   
    if (nome === '' || senha === '' || email === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

   
    const usuarioExistente = localStorage.getItem('usuario');
    if (usuarioExistente) {
        const usuario = JSON.parse(usuarioExistente);
        if (usuario.email === email) {
            alert('Este email já está cadastrado. Por favor, use outro email.');
            return;
        }
    }


    const novoUsuario = {
        nome: nome,
        senha: senha,
        email: email
    };

    localStorage.setItem('usuario', JSON.stringify(novoUsuario));
    window.location.href = 'sucess.html'; 
}