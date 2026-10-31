import { salvarUsuario, usuarioPorEmail } from "../services/auth.js";

const form = document.getElementById("formCadastro");

if (form) {
  form.addEventListener("submit", event => {
    event.preventDefault();

    const dados = Object.fromEntries(new FormData(form).entries());

    if (usuarioPorEmail(dados.email)) {
      alert("Já existe um cadastro com este e-mail.");
      return;
    }

    salvarUsuario(dados);
    alert("Cadastro realizado com sucesso!");
    window.location.href = "login.html";
  });
}
