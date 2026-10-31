function basePath() {
  const path = window.location.pathname;
  return path.includes("/pages/") ? "../../" : "";
}

export function renderNavbar() {
  const target = document.querySelector("#navbar");
  if (!target) return;

  const base = basePath();

  target.innerHTML = `
    <nav class="navbar navbar-expand-lg bg-white shadow-sm fixed-top">
      <div class="container">
        <a class="navbar-brand fw-bold text-brand" href="${base}index.html">
          <i class="bi bi-people-fill"></i> ConectaTalentos
        </a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="menu">
          <ul class="navbar-nav ms-auto align-items-lg-center">
            <li class="nav-item">
              <a class="nav-link" href="${base}index.html">Início</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="${base}pages/vagas/vagas.html">Vagas</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="${base}pages/eventos/eventos.html">Eventos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="${base}pages/busca/busca.html">Busca</a>
            </li>
            <li class="nav-item ms-lg-3">
              <a class="btn btn-outline-brand rounded-pill px-4" href="${base}pages/auth/login.html">Entrar</a>
            </li>
            <li class="nav-item ms-lg-2 mt-2 mt-lg-0">
              <a class="btn btn-brand rounded-pill px-4" href="${base}pages/auth/cadastro.html">Criar conta</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `;
}
