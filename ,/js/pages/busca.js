
import { listarUsuarios } from "../services/auth.js";

document.addEventListener("DOMContentLoaded", () => {
  const campoBusca = document.getElementById("q");
  const filtroArea = document.getElementById("filtroArea");
  const filtroLocal = document.getElementById("filtroLocal");
  const resultados = document.getElementById("resultados");
  const contador = document.getElementById("contador");

  // Compara textos sem diferenciar maiúsculas,
  // minúsculas ou acentos.
  function normalizar(texto = "") {
    return String(texto)
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim();
  }

  // Impede que textos cadastrados sejam interpretados
  // como código HTML.
  function escaparHTML(texto = "") {
    return String(texto).replace(/[&<>"']/g, caractere => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[caractere]);
  }

  function linkSeguro(url = "") {
    try {
      const endereco = new URL(url);

      if (endereco.protocol === "https:" ||
          endereco.protocol === "http:") {
        return endereco.href;
      }
    } catch {
      // Link vazio ou inválido.
    }

    return "";
  }

  function renderizarPessoas() {
    // Somente perfis de iniciantes aparecem
    // neste diretório de talentos.
    const pessoas = listarUsuarios().filter(usuario =>
      usuario.tipo === "iniciante"
    );

    const termo = normalizar(campoBusca.value);
    const area = normalizar(filtroArea.value);
    const local = normalizar(filtroLocal.value);

    const filtradas = pessoas.filter(pessoa => {
      const textoPesquisavel = normalizar([
        pessoa.nome,
        pessoa.area,
        pessoa.habilidades,
        pessoa.bio,
        pessoa.localizacao
      ].join(" "));

      return (
        (!termo || textoPesquisavel.includes(termo)) &&
        (!area || normalizar(pessoa.area) === area) &&
        (!local || normalizar(pessoa.localizacao).includes(local))
      );
    });

    contador.textContent =
      `${filtradas.length} pessoa(s) encontrada(s)`;

    if (filtradas.length === 0) {
      resultados.innerHTML = `
        <div class="col-12">
          <div class="card border-0 shadow-sm p-4 text-center">
            <i class="bi bi-search fs-1 text-success"></i>
            <h3 class="h5 mt-3">Nenhuma pessoa encontrada</h3>
            <p class="text-muted mb-0">
              Tente outro nome, habilidade ou localização.
            </p>
          </div>
        </div>
      `;
      return;
    }

    resultados.innerHTML = filtradas.map(pessoa => {
      const nome = escaparHTML(pessoa.nome || "Pessoa cadastrada");
      const areaPessoa = escaparHTML(pessoa.area || "Área não informada");
      const localPessoa = escaparHTML(
        pessoa.localizacao || "Localização não informada"
      );
      const bio = escaparHTML(pessoa.bio || "Perfil em construção.");

      const habilidades = String(pessoa.habilidades || "")
        .split(",")
        .map(item => item.trim())
        .filter(Boolean)
        .map(item =>
          `<span class="job-tag">${escaparHTML(item)}</span>`
        )
        .join(" ");

      const linkedin = linkSeguro(pessoa.linkedin);
      const github = linkSeguro(pessoa.github);

      const links = [
        linkedin
          ? `<a class="btn btn-outline-brand btn-sm rounded-pill"
                href="${escaparHTML(linkedin)}"
                target="_blank" rel="noopener noreferrer">
                LinkedIn
             </a>`
          : "",
        github
          ? `<a class="btn btn-outline-brand btn-sm rounded-pill"
                href="${escaparHTML(github)}"
                target="_blank" rel="noopener noreferrer">
                Portfólio / GitHub
             </a>`
          : ""
      ].filter(Boolean).join(" ");

      return `
        <div class="col-md-6 col-lg-4">
          <article class="card h-100 border-0 shadow-sm p-4">
            <div class="d-flex align-items-center gap-3 mb-3">
              <div class="avatar">${escaparHTML(
                (pessoa.nome || "?").trim().charAt(0).toUpperCase()
              )}</div>

              <div>
                <h3 class="h5 fw-bold mb-1">${nome}</h3>
                <span class="job-tag">${areaPessoa}</span>
              </div>
            </div>

            <p class="text-muted small mb-2">
              <i class="bi bi-geo-alt"></i> ${localPessoa}
            </p>

            <p>${bio}</p>

            <div class="d-flex flex-wrap gap-2 mb-4">
              ${habilidades || '<span class="text-muted small">Habilidades não informadas</span>'}
            </div>

            <div class="d-flex flex-wrap gap-2 mt-auto">
              ${links || '<span class="text-muted small">Sem links públicos informados.</span>'}
            </div>
          </article>
        </div>
      `;
    }).join("");
  }

  // Atualiza os resultados quando os campos mudam.
  campoBusca.addEventListener("input", renderizarPessoas);
  filtroArea.addEventListener("change", renderizarPessoas);
  filtroLocal.addEventListener("input", renderizarPessoas);

  // Mostra os perfis logo ao abrir a página.
  renderizarPessoas();
});
