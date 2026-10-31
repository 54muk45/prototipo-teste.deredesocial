const vagas = [
  {
    id: 1,
    titulo: "Estágio em Desenvolvimento Web",
    empresa: "Tech Solutions",
    area: "Tecnologia",
    localizacao: "Fortaleza - CE",
    tipo: "Estágio"
  },
  {
    id: 2,
    titulo: "Designer Júnior",
    empresa: "Studio Criativo",
    area: "Design",
    localizacao: "Remoto",
    tipo: "Freelance"
  },
  {
    id: 3,
    titulo: "Assistente de Marketing",
    empresa: "Nova Comunicação",
    area: "Marketing",
    localizacao: "Fortaleza - CE",
    tipo: "Efetivo"
  },
  {
    id: 4,
    titulo: "Desenvolvedor Front-end",
    empresa: "Inova Digital",
    area: "Tecnologia",
    localizacao: "Remoto",
    tipo: "Júnior"
  }
];

export function listarVagas() {
  return vagas;
}

export function buscarVaga(id) {
  return vagas.find(vaga => vaga.id === Number(id));
}
