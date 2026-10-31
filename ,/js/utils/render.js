export function renderLista(containerId, itens, template, emptyMessage = "Nenhum item encontrado.") {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (!itens.length) {
    container.innerHTML = `<div class="empty-state">${emptyMessage}</div>`;
    return;
  }

  container.innerHTML = itens.map(template).join("");
}
