export const vagas = [
  {
    id: 1,
    empresa: "McDonald's",
    titulo: "Limpador de Veículos",
    setor: "limpeza",
    local: "Charleston, SC",
    estado: "South Carolina",
    mapQuery: "Charleston, South Carolina, USA",
    imagens: ["/cidades/charleston/charleston.jpg"],
    salario: "$15.50",
    periodo: "/hora",
    tipo: "Período integral",
    descricao: "Responsável pela limpeza e manutenção de veículos da frota seguindo os padrões da empresa.",
    requisitos: [
      "Não exige experiência prévia",
      "Disponibilidade para turnos",
      "Capacidade física para trabalho manual",
      "Documentação em ordem"
    ],
    beneficios: [
      "Patrocínio Green Card EB-3",
      "Treinamento completo",
      "Plano de saúde",
      "Vale refeição"
    ],
    vagasDisponiveis: 3
    
  },
  {
    id: 2,
    empresa: "Tyson Foods",
    titulo: "Operador de Linha de Produção",
    setor: "producao",
    local: "Stoughton, WI",
    estado: "Wisconsin",
    mapQuery: "Stoughton, Wisconsin, USA",
    imagens: ["/cidades/stoughton/stoughton.png"],
    salario: "$17.00",
    periodo: "/hora",
    tipo: "Período integral",
    descricao: "Atuação na linha de produção de alimentos seguindo rigorosas normas de segurança e higiene.",
    requisitos: [
      "Disponibilidade para turnos rotativos",
      "Resistência física",
      "Atenção a normas de higiene",
      "Não exige experiência"
    ],
    beneficios: [
      "Patrocínio Green Card EB-3",
      "Hora extra remunerada",
      "Plano de saúde",
      "Seguro de vida"
    ],
    vagasDisponiveis: 5
  },
  {
    id: 3,
    empresa: "Sysco",
    titulo: "Auxiliar de Cozinha Industrial",
    setor: "alimentacao",
    local: "Houston, TX",
    estado: "Texas",
    mapQuery: "Houston, Texas, USA",
    imagens: ["/cidades/houston/houston.jpg"],
    salario: "$16.25",
    periodo: "/hora",
    tipo: "Período integral",
    descricao: "Apoio em cozinha industrial de grande porte, preparo e organização de alimentos.",
    requisitos: [
      "Noções básicas de cozinha",
      "Disponibilidade de horário",
      "Trabalho em equipe",
      "Inglês básico desejável"
    ],
    beneficios: [
      "Patrocínio Green Card EB-3",
      "Refeição durante o turno",
      "Plano odontológico",
      "Transporte"
    ],
    vagasDisponiveis: 2
  },
  {
    id: 4,
    empresa: "Amazon",
    titulo: "Operador de Armazém",
    setor: "logistica",
    local: "Orlando, FL",
    estado: "Florida",
    mapQuery: "Orlando, Florida, USA",
    imagens: ["/cidades/orlando/orlando.jpg"],
    salario: "$18.00",
    periodo: "/hora",
    tipo: "Período integral",
    descricao: "Separação, embalagem e organização de produtos no centro de distribuição.",
    requisitos: [
      "Disposição física",
      "Atenção aos detalhes",
      "Capacidade de seguir processos",
      "Não exige experiência"
    ],
    beneficios: [
      "Patrocínio Green Card EB-3",
      "Plano de saúde completo",
      "Bonificações por desempenho",
      "Ambiente climatizado"
    ],
    vagasDisponiveis: 8
  }
]

export const filtros = [
  { id: "all", label: "Todas" },
  { id: "limpeza", label: "Limpeza" },
  { id: "producao", label: "Produção" },
  { id: "alimentacao", label: "Alimentação" },
  { id: "logistica", label: "Logística" }
]

export const custosVida = {
  "Charleston, SC": {
    moradia: 1200,
    alimentacao: 450,
    transporte: 150,
    saude: 200,
    outros: 300,
    imagem: "🌴"
  },
  "Stoughton, WI": {
    moradia: 950,
    alimentacao: 400,
    transporte: 130,
    saude: 180,
    outros: 250,
    imagem: "🏔️"
  },
  "Houston, TX": {
    moradia: 1100,
    alimentacao: 420,
    transporte: 160,
    saude: 190,
    outros: 280,
    imagem: "🤠"
  },
  "Orlando, FL": {
    moradia: 1350,
    alimentacao: 430,
    transporte: 140,
    saude: 195,
    outros: 290,
    imagem: "☀️"
  },

  "Denver, CO": {
    moradia: 1400,
    alimentacao: 460,
    transporte: 170,
    saude: 210,
    outros: 310,
    imagem: "⛰️"
  }
}

