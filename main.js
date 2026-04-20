const dadosFac = [];

/*fetch('https://gist.githubusercontent.com/Zis2x/17fce2616f402b6b8fa3fdb94f76b4a8/raw/471b402f942e0faeffca6fceda3118c8bb08ccfa/notas_faculdades.json')
  .then(res => res.text())
  .then(texto => {
    const limpoTxt = texto.replace(/\u00A0/g, " ");//Remove NBSP
    dadosFac = JSON.parse(limpoTxt);
  });
*/

//Objetos
const infoFaculdades = {
   "USP": { nome: "Universidade de São Paulo", estado: "SP", cidade: "São Paulo", tipo: "Pública" },
  "UFRJ": { nome: "Universidade Federal do Rio de Janeiro", estado: "RJ", cidade: "Rio de Janeiro", tipo: "Pública" },
  "UFMG": { nome: "Universidade Federal de Minas Gerais", estado: "MG", cidade: "Belo Horizonte", tipo: "Pública" },
  "UNIFESP": { nome: "Universidade Federal de São Paulo", estado: "SP", cidade: "São Paulo", tipo: "Pública" },
  "UnB": { nome: "Universidade de Brasília", estado: "DF", cidade: "Brasília", tipo: "Pública" },
  "UFRGS": { nome: "Universidade Federal do Rio Grande do Sul", estado: "RS", cidade: "Porto Alegre", tipo: "Pública" },
  "UFSC": { nome: "Universidade Federal de Santa Catarina", estado: "SC", cidade: "Florianópolis", tipo: "Pública" },
  "UFSCar": { nome: "Universidade Federal de São Carlos", estado: "SP", cidade: "São Carlos", tipo: "Pública" },
  "UFPE": { nome: "Universidade Federal de Pernambuco", estado: "PE", cidade: "Recife", tipo: "Pública" },
  "UFC": { nome: "Universidade Federal do Ceará", estado: "CE", cidade: "Fortaleza", tipo: "Pública" },
   "UFPR": { nome: "Universidade Federal do Paraná", estado: "PR", cidade: "Curitiba", tipo: "Pública" },
  "UFBA": { nome: "Universidade Federal da Bahia", estado: "BA", cidade: "Salvador", tipo: "Pública" },
  "UFG": { nome: "Universidade Federal de Goiás", estado: "GO", cidade: "Goiânia", tipo: "Pública" },
  "UFRN": { nome: "Universidade Federal do Rio Grande do Norte", estado: "RN", cidade: "Natal", tipo: "Pública" },
  "UFES": { nome: "Universidade Federal do Espírito Santo", estado: "ES", cidade: "Vitória", tipo: "Pública" },
  "UFV": { nome: "Universidade Federal de Viçosa", estado: "MG", cidade: "Viçosa", tipo: "Pública" },
  "UFMS": { nome: "Universidade Federal de Mato Grosso do Sul", estado: "MS", cidade: "Campo Grande", tipo: "Pública" },
  "UFF": { nome: "Universidade Federal Fluminense", estado: "RJ", cidade: "Niterói", tipo: "Pública" },
  "UFPA": { nome: "Universidade Federal do Pará", estado: "PA", cidade: "Belém", tipo: "Pública" },
  "UFPel": { nome: "Universidade Federal de Pelotas", estado: "RS", cidade: "Pelotas", tipo: "Pública" },

    "UAM": { nome: "Anhembi Morumbi", estado: "SP", cidade: "São Paulo", tipo: "Privada" },
  "MACK": { nome: "Universidade Presbiteriana Mackenzie", estado: "SP", cidade: "São Paulo", tipo: "Privada" },
  "FIAP": { nome: "FIAP", estado: "SP", cidade: "São Paulo", tipo: "Privada" },
  "MAUA": { nome: "Instituto Mauá de Tecnologia", estado: "SP", cidade: "São Caetano do Sul", tipo: "Privada" },
  "INSPER": { nome: "Insper", estado: "SP", cidade: "São Paulo", tipo: "Privada" },
  "ESPM": { nome: "ESPM", estado: "SP", cidade: "São Paulo", tipo: "Privada" },
  "SAO_JUDAS": { nome: "Universidade São Judas Tadeu", estado: "SP", cidade: "São Paulo", tipo: "Privada" },
  "UNISA": { nome: "Universidade Santo Amaro", estado: "SP", cidade: "São Paulo", tipo: "Privada" },
  "FACAMP": { nome: "Faculdade de Campinas", estado: "SP", cidade: "Campinas", tipo: "Privada" },
  "UNINOVE": { nome: "Universidade Nove de Julho", estado: "SP", cidade: "São Paulo", tipo: "Privada" },
   "UNISINOS": { nome: "Universidade do Vale do Rio dos Sinos", estado: "RS", cidade: "São Leopoldo", tipo: "Privada" },
  "SENAC-SP": { nome: "Senac São Paulo", estado: "SP", cidade: "São Paulo", tipo: "Privada" },
  "METODISTA": { nome: "Universidade Metodista de São Paulo", estado: "SP", cidade: "São Bernardo do Campo", tipo: "Privada" },
  "UNIVAP": { nome: "Universidade do Vale do Paraíba", estado: "SP", cidade: "São José dos Campos", tipo: "Privada" },
  "UNA": { nome: "Centro Universitário Una", estado: "MG", cidade: "Belo Horizonte", tipo: "Privada" },
  "POSITIVO": { nome: "Universidade Positivo", estado: "PR", cidade: "Curitiba", tipo: "Privada" },
  "UNIVALI": { nome: "Universidade do Vale do Itajaí", estado: "SC", cidade: "Itajaí", tipo: "Privada" },
  "UNIFACS": { nome: "Universidade Salvador (UNIFACS)", estado: "BA", cidade: "Salvador", tipo: "Privada" },
  "UNIME": { nome: "UNIME", estado: "BA", cidade: "Lauro de Freitas", tipo: "Privada" }
}

const faculdadesNacionais = {
  "PUC": { nome: "Pontifícia Universidade Católica", abrangencia: "Multi-estado", tipo: "Privada" },
  "ANHANGUERA": { nome: "Anhanguera", abrangencia: "Nacional", tipo: "Privada" },
  "ESTACIO": { nome: "Estácio", abrangencia: "Nacional", tipo: "Privada" },
  "UNIP": { nome: "Universidade Paulista", abrangencia: "Nacional", tipo: "Privada" },
  "CRUZEIRO": { nome: "Cruzeiro do Sul", abrangencia: "Nacional", tipo: "Privada" },
  "UNINTER": { nome: "Uninter", abrangencia: "Nacional", tipo: "Privada" },
  "UNINASSAU": { nome: "Uninassau", abrangencia: "Nacional", tipo: "Privada" },
  "FGV": { nome: "Fundação Getulio Vargas", abrangencia: "Multi-estado", tipo: "Privada" }
};

const cursos = [
  // TI
  { id: "computacao", nome: "Ciência da Computação", categoria: "ti", area: "tecnologia" },
  { id: "ads", nome: "ADS (Análise e Desenvolvimento de Sistemas)", categoria: "ti", area: "tecnologia" },
  { id: "software", nome: "Engenharia de Software", categoria: "ti", area: "tecnologia" },
  { id: "sistemas", nome: "Sistemas de Informação", categoria: "ti", area: "tecnologia" },

  // Exatas e Engenharias
  { id: "civil", nome: "Engenharia Civil", categoria: "engenharias", area: "exatas" },
  { id: "mecanica", nome: "Engenharia Mecânica", categoria: "engenharias", area: "exatas" },
  { id: "eletrica", nome: "Engenharia Elétrica", categoria: "engenharias", area: "exatas" },
  { id: "producao", nome: "Engenharia de Produção", categoria: "engenharias", area: "exatas" },
  { id: "mecatronica", nome: "Engenharia de Automação e Controle (Mecatrônica)", categoria: "engenharias", area: "exatas" },
  { id: "arquitetura", nome: "Arquitetura e Urbanismo", categoria: "engenharias", area: "exatas" },

  // Saúde
  { id: "medicina", nome: "Medicina", categoria: "saude", area: "saude" },
  { id: "enfermagem", nome: "Enfermagem", categoria: "saude", area: "saude" },
  { id: "psicologia", nome: "Psicologia", categoria: "saude", area: "saude" },
  { id: "odonto", nome: "Odontologia", categoria: "saude", area: "saude" },
  { id: "fisio", nome: "Fisioterapia", categoria: "saude", area: "saude" },
  { id: "biomedicina", nome: "Biomedicina", categoria: "saude", area: "saude" },
  { id: "farmacia", nome: "Farmácia", categoria: "saude", area: "saude" },
  { id: "estetica", nome: "Estética e Cosmética", categoria: "saude", area: "saude" },

  // Humanas e Negócios
  { id: "direito", nome: "Direito", categoria: "humanas", area: "humanas" },
  { id: "adm", nome: "Administração", categoria: "humanas", area: "humanas" },
  { id: "pedagogia", nome: "Pedagogia", categoria: "humanas", area: "humanas" },
  { id: "contabil", nome: "Contabilidade", categoria: "humanas", area: "humanas" },
  { id: "economia", nome: "Economia", categoria: "humanas", area: "humanas" },
  { id: "historia", nome: "História", categoria: "humanas", area: "humanas" },
  { id: "filosofia", nome: "Filosofia", categoria: "humanas", area: "humanas" },
  { id: "sociologia", nome: "Sociologia", categoria: "humanas", area: "humanas" },
  { id: "geografia", nome: "Geografia", categoria: "humanas", area: "humanas" },

  // Ciências
  { id: "biologia", nome: "Biologia", categoria: "saude", area: "ciencias" },
  { id: "quimica", nome: "Química", categoria: "exatas", area: "ciencias" },

  // Design e Criativo
  { id: "design_grafico", nome: "Design Gráfico", categoria: "design", area: "criativo" },
  { id: "design_interiores", nome: "Design de Interiores", categoria: "design", area: "criativo" },
  { id: "design_produto", nome: "Design de Produto", categoria: "design", area: "criativo" },
  { id: "uiux", nome: "Design UI/UX", categoria: "design", area: "tecnologia" },
  { id: "motion", nome: "Motion Graphics", categoria: "design", area: "criativo" },

  // Extras
  { id: "pesca", nome: "Engenharia de Pesca", categoria: "extras", area: "exatas" },
  { id: "ed_fisica", nome: "Educação Física", categoria: "extras", area: "saude" },
  { id: "fisica", nome: "Física", categoria: "extras", area: "exatas" },
  { id: "matematica", nome: "Matemática", categoria: "extras", area: "exatas" },
  { id: "eng_computacao", nome: "Engenharia da Computação", categoria: "extras", area: "tecnologia" }
];



//Alterar Tema
const btnTema = document.getElementById('toggleTema')

btnTema.addEventListener('click', () => {
  document.body.classList.toggle('claro');

  localStorage.setItem('tema', document.body.classList.contains('claro') ? 'claro' : '');
});

const temaSalvo = localStorage.getItem('tema');

if(temaSalvo === 'claro') {
  document.body.classList.add('claro');
}