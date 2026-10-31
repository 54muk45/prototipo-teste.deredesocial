import { salvarUsuario, usuarioPorEmail } from "../services/auth.js";

const form = document.getElementById("formCadastroIniciante");

if (form) {
  form.addEventListener("submit", event => {
    event.preventDefault();

    const dados = Object.fromEntries(new FormData(form).entries());

    if (dados.senha !== dados.confirmarSenha) {
      alert("As senhas não coincidem.");
      return;
    }

    if (usuarioPorEmail(dados.email)) {
      alert("Já existe um cadastro com este e-mail.");
      return;
    }

    salvarUsuario({
      ...dados,
      tipo: "iniciante"
    });

    alert("Perfil de iniciante criado com sucesso!");
    window.location.href = "login.html";
  });
}
