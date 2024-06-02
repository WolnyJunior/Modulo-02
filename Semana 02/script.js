document.getElementById("meu-formulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o recarregamento da página

    // Captura os valores dos campos
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("texto").value;
    const endereco = document.getElementById("endereco").value;

    // Exibe os valores no console
    console.log("Nome:", nome);
    console.log("Email:", email);
    console.log("Mensagem:", mensagem);
    console.log("Endereco:", endereco);

    // Atualiza o conteúdo dos spans com os valores capturados
    document.getElementById("resultadoNome").innerText = `Nome: ${nome}`;
    document.getElementById("resultadoEmail").innerText = `Email: ${email}`;
    document.getElementById("resultadoMsg").innerText = `Mensagem: ${mensagem}`;
    document.getElementById("resultadoEndereco").innerText = `Endereco: ${endereco}`;
});