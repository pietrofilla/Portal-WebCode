document.addEventListener("DOMContentLoaded", () => {

    const botaoMudarTexto = document.getElementById("mudar-texto");
    const botaoConsole = document.getElementById("console");
    const botaoAlerta = document.getElementById("alerta");
    const textoParaAlterar = document.getElementById("texto");

    botaoMudarTexto.addEventListener("click", () => {
        textoParaAlterar.innerText = "🎉 Sensacional! O texto foi modificado com sucesso utilizando JavaScript dinâmico!";
        textoParaAlterar.style.color = "#27ae60";
        textoParaAlterar.style.borderColor = "#27ae60";
    });

    botaoConsole.addEventListener("click", () => {
        console.log("--- Log do Portal WebCode ---");
        console.info("O usuário interagiu com o laboratório de JavaScript às: " + new Date().toLocaleTimeString());
        console.log("Status da página: Integração HTML/CSS/JS funcionando com sucesso!");
    });

    botaoAlerta.addEventListener("click", () => {
        alert("Olá, Estudante! \n\nParabéns por testar os recursos visuais e interativos do Portal WebCode. Continue estudando!");
        window.location.href="https://www.youtube.com/";
    });

});
