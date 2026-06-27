<!-- Seção Contato -->
<section id="contato">

    <h2>Contato</h2>

    <form id="formContato">

        <!-- Nome -->
        <label for="nome">Nome:</label><br>
        <input
            type="text"
            id="nome"
            name="nome"
            value="Priscila Batista da Silva"
            readonly
        ><br><br>

        <!-- E-mail -->
        <label for="email">E-mail:</label><br>
        <input
            type="email"
            id="email"
            name="email"
            value="priscilabatista92@outlook.com"
            readonly
        ><br><br>

        <!-- Mensagem -->
        <label for="mensagem">Mensagem:</label><br>
        <textarea
            id="mensagem"
            name="mensagem"
            rows="6"
            cols="40"
            placeholder="Digite sua mensagem..."
            required
        ></textarea><br><br>

        <!-- Botão -->
        <button type="submit">Enviar</button>

    </form>

</section>

<!-- JavaScript -->
<script>
const formulario = document.getElementById("formContato");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    const validarEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nome === "" || email === "" || mensagem === "") {
        alert("Preencha todos os campos!");
        return;
    }

    if (!validarEmail.test(email)) {
        alert("Digite um e-mail válido!");
        return;
    }

    alert("Mensagem enviada com sucesso!");

    // Limpa apenas o campo de mensagem
    document.getElementById("mensagem").value = "";

});
</script>

