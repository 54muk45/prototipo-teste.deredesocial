import { renderNavbar } from "../components/navbar.js";
import { renderFooter } from "../components/footer.js";
import { listarVagas } from "../services/vagas.js";
import { renderLista } from "../utils/render.js";

document.addEventListener("DOMContentLoaded", () => {
  renderNavbar();
  renderFooter();

  const vagas = listarVagas();
  renderLista(
    "listaVagas",
    vagas,
    vaga => `
      <div class="col-md-6">
        <article class="job-card">
          <span class="job-tag">${vaga.area}</span>
          <h2 class="h5 fw-bold mt-3">${vaga.titulo}</h2>
          <p class="mb-1">${vaga.empresa}</p>
          <p class="text-muted small">${vaga.localizacao} · ${vaga.tipo}</p>
          <a href="vaga.html?id=${vaga.id}" class="btn btn-outline-brand rounded-pill">Ver vaga</a>
        </article>
      </div>
    `
  );
});
