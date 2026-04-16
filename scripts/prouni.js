let dadosProuni = [];

fetch('https://gist.githubusercontent.com/Zis2x/17fce2616f402b6b8fa3fdb94f76b4a8/raw/471b402f942e0faeffca6fceda3118c8bb08ccfa/notas_faculdades.json')
  .then(res => res.text())
  .then(texto => {
    const limpo = texto.replace(/\u00A0/g, " ");//Remove NBSP
    dadosProuni = JSON.parse(limpo);
    console.log(dadosProuni);
  });

  dadosProuni.forEach((item, index) => {
      if (!item.curso) {
         console.log("Erro no item:",index, item);         
      }
  });


const infoFaculdadesProuni = {
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

const uniNacionais = {
  AC: ["ANHANGUERA", "ESTACIO"],
  AL: ["ANHANGUERA", "ESTACIO"],
  AP: ["ANHANGUERA", "ESTACIO"],
  AM: ["ANHANGUERA", "ESTACIO"],
  BA: ["ANHANGUERA", "ESTACIO", "UNINASSAU", "UNIP", "PUC"],
  CE: ["ANHANGUERA", "ESTACIO", "UNINASSAU"],
  DF: ["ANHANGUERA", "ESTACIO", "UNIP", "PUC"],
  ES: ["ANHANGUERA", "ESTACIO"],
  GO: ["ANHANGUERA", "ESTACIO", "UNIP"],
  MA: ["ANHANGUERA", "ESTACIO"],
  MT: ["ANHANGUERA", "ESTACIO"],
  MS: ["ANHANGUERA", "ESTACIO"],
  MG: ["ANHANGUERA", "ESTACIO", "PUC", "UNIP"],
  PA: ["ANHANGUERA", "ESTACIO"],
  PB: ["ANHANGUERA", "ESTACIO", "UNINASSAU"],
  PR: ["ANHANGUERA", "ESTACIO", "UNINTER", "PUC"],
  PE: ["ANHANGUERA", "ESTACIO", "UNINASSAU"],
  PI: ["ANHANGUERA", "ESTACIO"],
  RJ: ["ANHANGUERA", "ESTACIO", "PUC", "FGV"],
  RN: ["ANHANGUERA", "ESTACIO"],
  RS: ["ANHANGUERA", "ESTACIO", "PUC"],
  RO: ["ANHANGUERA", "ESTACIO"],
  RR: ["ANHANGUERA", "ESTACIO"],
  SC: ["ANHANGUERA", "ESTACIO", "UNINTER", "PUC"],
  SE: ["ANHANGUERA", "ESTACIO"],
  SP: ["ANHANGUERA", "ESTACIO", "PUC", "FGV", "UNIP", "CRUZEIRO"]
};

const formPro = document.querySelector('form');


function verificadorBolsa(renda) {
  if (renda <= 1.5) {
    return "Integral (100%)"
  }
  if (renda <= 3) {
    return "Parcila (50%)"
  }
}

function mostrarResultadoProuni(usuario) {
    const divTodasChancesPro = document.querySelector('#todasChances');
    divTodasChancesPro.innerHTML = "";
    

  const melhoresPrivadas = usuario.resultados.filter(univ => univ.tipo === "Privada").sort((a, b) => {
    if (a.diff >= 0 && b.diff < 0) {
     return -1
    }
    if (a.diff < 0 && b.diff >= 0) {
     return 1
    }
    return b.diff - a.diff;
  }).slice(0, 3);

 
  melhoresPrivadas.forEach(facul => {
    const cardFaculPro = document.createElement('div');
    cardFaculPro.classList.add('card-facul');

    const pFaculPro = document.createElement('p');
    const pNotaPro = document.createElement('p');
    const spanDiffPro = document.createElement('span');
    const spanChancePro = document.createElement('span');
    
    pFaculPro.textContent = facul.faculdade;

    if (facul.diff < 0) {
      spanDiffPro.textContent = `Faltam: ${Math.abs(facul.diff)} pontos`;
    } else if (facul.diff === 0) {
      spanDiffPro.textContent = `No limite`;
    } else if (facul.diff > 0) {
      spanDiffPro.textContent = `Você passou com: ${Math.abs(facul.diff)} pontos a mais`;
    }
    pNotaPro.textContent = `Nota de corte: ${facul.notaCorte}`;

     const nivelAluno = classificarChanceBolsa(facul.diff);

    cardFaculPro.classList.add(`chance-${nivelAluno}`);

    if (facul.diff >= 20) {
      spanChancePro.textContent = `Passa com folga`
    } else if(facul.diff >= 10 && facul.diff <= 20){
      spanChancePro.textContent = `Você passou`
    } else if(facul.diff >= 0 && facul.diff <= 10){
      spanChancePro.textContent = `Na risca`
    } else if(facul.diff < 0) {
      spanChancePro.textContent = `Precisa melhorar`
    }

     cardFaculPro.appendChild(pFaculPro); 
     cardFaculPro.appendChild(pNotaPro);
     cardFaculPro.appendChild(spanDiffPro);
     cardFaculPro.appendChild(spanChancePro);

     divTodasChancesPro.appendChild(cardFaculPro);
  
  });

}

function faculBarata(estado, curso, nota) {
  const uf = estado.toUpperCase().trim();

  const cursoBusca = curso.toLowerCase().trim();

  const faculdadesNoEstado = uniNacionais[uf];

  if (!faculdadesNoEstado) {
    return  
  }

  const faculDetalhes = faculdadesNoEstado.map( nomeFacul => {
    const infoJsonFac = dadosProuni.find(item => { 
      return item.faculdade.toLowerCase() == nomeFacul.toLowerCase() && item.curso.toLowerCase() === cursoBusca && item.estado === uf;
   });

    if (infoJsonFac) {
      const diferencaNotas = nota - infoJsonFac.nota;

      return {
        estado: uf,
        nome: infoJsonFac.faculdade,
        notaCorte:  infoJsonFac.nota,
        diff: diferencaNotas
      };
    }
    return null;
 }).filter(item => item !== null);

 console.log(faculDetalhes);
 

 return faculDetalhes;
}

function classificarChanceBolsa(diff) {
  if (diff >= 0) return "alta";
  if (diff >= -30) return "possivel";
  if (diff >= -60) return "quase";
  if (diff >= -100) return "baixa";
  if (diff < -100) return "muito-baixa";
}

function normalizarTexto(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[-]/g, "")
}

formPro.addEventListener('submit', (e) => {
  e.preventDefault();

  const renda = Number(document.querySelector('#renda').value);

const tipoBolsa = verificadorBolsa(renda);

const spanElegivel = document.querySelector('#resElegivel');

spanElegivel.textContent = tipoBolsa;

   const notaUso = Number(document.querySelector('#nota-enem').value);

    const cursoUso = document.querySelector('#seuCurso').value.toLowerCase();

    const estadoUso = document.querySelector('#estado').value.toUpperCase();

    const usuarioPro = {
      estado: estadoUso,
      curso: cursoUso,
      nota: notaUso,
      resultados: []
    }

    dadosProuni.forEach(item => {
      
        const faculInfos = item.faculdade.toUpperCase();
        
        

        if (!faculInfos) return;
      
        const cursoMatchUso = 
        normalizarTexto(item.curso).includes(normalizarTexto(usuarioPro.curso));
        const estadoMatchUso = item.estado === usuarioPro.estado;
      
        if (cursoMatchUso && estadoMatchUso) {
      
          const jaExistePro = usuarioPro.resultados.some(
            r => r.faculdade === item.faculdade && r.curso === item.curso
          );
      
          if (!jaExistePro) {
            usuarioPro.resultados.push({
              faculdade: item.faculdade,
              estado: item.estado,
              tipo: item.tipo,
              curso: item.curso,
              notaCorte: item.nota,
              diff: usuarioPro.nota - item.nota
            });
          }
        }
  })
    console.log(usuarioPro.resultados)
    console.log(usuarioPro)

    mostrarResultadoProuni(usuarioPro);

    faculBarata(estadoUso, cursoUso,notaUso)

    let contNotaUso = document.querySelector('#nota-usuario');

    contNotaUso.textContent = notaUso;

});