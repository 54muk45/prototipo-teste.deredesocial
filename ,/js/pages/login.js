import { usuarioPorEmail } from "../services/auth.js";

const form = document.getElementById("formLogin");

if (form) {
  form.addEventListener("submit", event => {
    event.preventDefault();

    const dados = Object.fromEntries(new FormData(form).entries());
    const usuario = usuarioPorEmail(dados.email);

    if (!usuario || usuario.senha !== dados.senha) {
      alert("E-mail ou senha inválidos.");
      return;
    }

    localStorage.setItem("conectaTalentosUsuarioAtual", JSON.stringify(usuario));
    alert(`Bem-vindo(a), ${usuario.nome || usuario.empresa || "usuário"}!`);
    window.location.href = "../../index.html";
  });
}
