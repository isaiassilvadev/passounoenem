let dados = [];
fetch('https://gist.githubusercontent.com/Zis2x/17fce2616f402b6b8fa3fdb94f76b4a8/raw/657ba033ce1f2c27f5e73b6e8fec81193efa3f9a/notas_faculdades.json')
  .then(response => response.json())
  .then(json => {
    dados = json;
    console.log(dados);
  });

//Objetos
const infoFaculdadesSisu = {
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

const form = document.querySelector('.form-grid');


function mostrarResultado(usuario) {
    const divTodasChances = document.querySelector('#todasChances');
  divTodasChances.innerHTML = "";

  const melhoresPublicas = usuario.resultados.filter(univ => univ.tipo === "Pública").sort((a, b) => a.diff - b.diff).slice(0, 3);

 
  melhoresPublicas.forEach(facul => {
    const cardFacul = document.createElement('div');
    cardFacul.classList.add('card-facul');

    const pFacul = document.createElement('p');
      const pNota = document.createElement('p');
      const spanDiff = document.createElement('span');
    
    pFacul.textContent = facul.faculdade;
    pNota.textContent = `Nota de corte: ${facul.notaCorte}`;
    spanDiff.textContent = `Faltam: ${facul.diff}`;

     cardFacul.appendChild(pFacul); 
     cardFacul.appendChild(pNota);
     cardFacul.appendChild(spanDiff);
     divTodasChances.appendChild(cardFacul);
  });

}


form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nota = Number(document.querySelector('#nota-enem').value);

    const curso = document.querySelector('#seuCurso').value.toLowerCase();

    const estado = document.querySelector('#estado').value.toUpperCase();

    const usuario = {
      estado: estado,
      curso: curso,
      nota: nota,
      resultados: []
    }

    dados.forEach(item => {
      const faculInfo = infoFaculdadesSisu[item.faculdade.toUpperCase()];

      if(!faculInfo) return;

      const cursoMatch = item.curso.toLowerCase().includes(usuario.curso);
      const estadoMatch = faculInfo.estado.toUpperCase() === usuario.estado;

      if(cursoMatch && estadoMatch){
        usuario.resultados.push({
          faculdade: item.faculdade,
          estado: faculInfo.estado,
          tipo: faculInfo.tipo,
          curso: item.curso,
          notaCorte: item.nota,
          diff: usuario.nota >= item.nota ? usuario.nota - item.nota : item.nota - usuario.nota
        });
      }
    })

    console.log(usuario.resultados)

    mostrarResultado(usuario);

    let contNota = document.querySelector('#nota-usuario');

   contNota.textContent = nota;
  });
