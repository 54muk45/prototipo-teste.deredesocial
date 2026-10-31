import { renderNavbar } from "../components/navbar.js";
import { renderFooter } from "../components/footer.js";
import { listarVagas } from "../services/vagas.js";
import { renderLista } from "../utils/render.js";

document.addEventListener("DOMContentLoaded", () => {
  renderNavbar();
  renderFooter();

  renderLista(
    "vagasRecentes",
    listarVagas().slice(0, 3),
    vaga => `
      <div class="col-md-4">
        <article class="job-card">
          <span class="job-tag">${vaga.area}</span>
          <h3 class="h5 fw-bold mt-3">${vaga.titulo}</h3>
          <p class="mb-2">${vaga.empresa}</p>
          <p class="text-muted small mb-0">
            <i class="bi bi-geo-alt me-1"></i>${vaga.localizacao}
            · ${vaga.tipo}
          </p>
        </article>
      </div>
    `
  );
});
