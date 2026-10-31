const STORAGE_KEY = "conectaTalentosUsuarios";

export function salvarUsuario(usuario) {
  const usuarios = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  usuarios.push({
    ...usuario,
    id: Date.now(),
    criadoEm: new Date().toISOString()
  });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(usuarios));
}

export function listarUsuarios() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
}

export function usuarioPorEmail(email) {
  return listarUsuarios().find(usuario => usuario.email === email);
}
