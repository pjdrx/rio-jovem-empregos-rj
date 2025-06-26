
export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  area: string;
  description: string;
  requirements: string[];
  benefits: string[];
  postedDate: string;
  applicationDeadline: string;
}

export const jobs: Job[] = [
  {
    id: 1,
    title: "Jovem Aprendiz - Assistente Administrativo",
    company: "Petrobras",
    location: "Centro - Rio de Janeiro",
    salary: "R$ 1.200 + benefícios",
    type: "Presencial",
    area: "Administrativa",
    description: "Oportunidade para jovem aprendiz atuar na área administrativa, realizando atividades de apoio aos processos internos, organização de documentos e atendimento telefônico.",
    requirements: [
      "Idade entre 14 e 24 anos",
      "Ensino médio completo ou cursando",
      "Conhecimentos básicos de informática",
      "Boa comunicação e organização"
    ],
    benefits: [
      "Vale transporte",
      "Vale alimentação",
      "Plano de saúde",
      "Curso profissionalizante"
    ],
    postedDate: "Há 2 dias",
    applicationDeadline: "30/07/2024"
  },
  {
    id: 2,
    title: "Aprendiz em Vendas",
    company: "Lojas Americanas",
    location: "Barra da Tijuca - Rio de Janeiro",
    salary: "R$ 1.100 + comissões",
    type: "Presencial",
    area: "Vendas",
    description: "Vaga para jovem aprendiz na área de vendas, com foco em atendimento ao cliente, organização do estoque e apoio às atividades comerciais.",
    requirements: [
      "Idade entre 16 e 22 anos",
      "Ensino médio em andamento",
      "Perfil comunicativo e proativo",
      "Disponibilidade para fins de semana"
    ],
    benefits: [
      "Vale transporte",
      "Desconto funcionário",
      "Treinamento contínuo",
      "Oportunidade de crescimento"
    ],
    postedDate: "Há 1 dia",
    applicationDeadline: "25/07/2024"
  },
  {
    id: 3,
    title: "Jovem Aprendiz - Atendimento ao Cliente",
    company: "Banco do Brasil",
    location: "Copacabana - Rio de Janeiro",
    salary: "R$ 1.300 + benefícios",
    type: "Presencial",
    area: "Atendimento",
    description: "Oportunidade para atuar no atendimento ao cliente, realizando atividades de suporte, organização e apoio aos processos bancários.",
    requirements: [
      "Idade entre 15 e 23 anos",
      "Ensino médio completo ou cursando",
      "Boa apresentação pessoal",
      "Facilidade com números"
    ],
    benefits: [
      "Vale transporte",
      "Vale refeição",
      "Plano de saúde",
      "Previdência privada"
    ],
    postedDate: "Há 3 dias",
    applicationDeadline: "15/08/2024"
  },
  {
    id: 4,
    title: "Aprendiz em Logística",
    company: "Magazine Luiza",
    location: "Zona Norte - Rio de Janeiro",
    salary: "R$ 1.150 + benefícios",
    type: "Presencial",
    area: "Logística",
    description: "Vaga para jovem aprendiz na área de logística, auxiliando na organização do estoque, separação de pedidos e controle de entrada e saída de produtos.",
    requirements: [
      "Idade entre 16 e 24 anos",
      "Ensino médio em andamento",
      "Disponibilidade de horário",
      "Facilidade para trabalhar em equipe"
    ],
    benefits: [
      "Vale transporte",
      "Vale alimentação",
      "Desconto funcionário",
      "Curso técnico"
    ],
    postedDate: "Há 4 dias",
    applicationDeadline: "10/08/2024"
  },
  {
    id: 5,
    title: "Jovem Aprendiz - Recursos Humanos",
    company: "Vale",
    location: "Centro - Rio de Janeiro",
    salary: "R$ 1.400 + benefícios",
    type: "Híbrido",
    area: "Recursos Humanos",
    description: "Oportunidade para atuar na área de Recursos Humanos, apoiando processos de recrutamento, organização de documentos e atividades administrativas do setor.",
    requirements: [
      "Idade entre 17 e 24 anos",
      "Ensino médio completo",
      "Conhecimento em pacote Office",
      "Interesse na área de RH"
    ],
    benefits: [
      "Vale transporte",
      "Vale refeição",
      "Plano de saúde e odontológico",
      "Curso profissionalizante"
    ],
    postedDate: "Há 5 dias",
    applicationDeadline: "20/08/2024"
  },
  {
    id: 6,
    title: "Aprendiz em Marketing Digital",
    company: "Globo",
    location: "Barra da Tijuca - Rio de Janeiro",
    salary: "R$ 1.350 + benefícios",
    type: "Híbrido",
    area: "Marketing",
    description: "Vaga para jovem aprendiz interessado em marketing digital, atuando com criação de conteúdo, gestão de redes sociais e apoio em campanhas digitais.",
    requirements: [
      "Idade entre 18 e 24 anos",
      "Ensino médio completo",
      "Conhecimento em redes sociais",
      "Criatividade e proatividade"
    ],
    benefits: [
      "Vale transporte",
      "Vale refeição",
      "Plano de saúde",
      "Gympass"
    ],
    postedDate: "Há 1 semana",
    applicationDeadline: "05/08/2024"
  }
];
