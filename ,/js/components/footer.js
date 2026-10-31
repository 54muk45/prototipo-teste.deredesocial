export function renderFooter() {
  const target = document.querySelector("#footer");
  if (!target) return;

  target.innerHTML = `
    <footer class="footer py-4 mt-5">
      <div class="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
        <div class="text-muted small">
          © ${new Date().getFullYear()} ConectaTalentos. Todos os direitos reservados.
        </div>
        <div>
          <a class="footer-link" href="#">Termos</a>
          <a class="footer-link" href="#">Privacidade</a>
          <a class="footer-link" href="#">Contato</a>
        </div>
      </div>
    </footer>
  `;
}
