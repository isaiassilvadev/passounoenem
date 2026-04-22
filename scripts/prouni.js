let dadosProuni = [];

fetch('https://gist.githubusercontent.com/Zis2x/17fce2616f402b6b8fa3fdb94f76b4a8/raw/471b402f942e0faeffca6fceda3118c8bb08ccfa/notas_faculdades.json')
  .then(res => res.text())
  .then(texto => {
    const limpo = texto.replace(/\u00A0/g, " ");//Remove NBSP
    dadosProuni = JSON.parse(limpo);
  });

  dadosProuni.forEach((item, index) => {
      if (!item.curso) {
         console.log("Erro no item:",index, item);         
      }
  });


const cursosPro = [
  // TI
  { id: "Ciencia dacomputacao", nome: "Computacao", categoria: "ti", area: "tecnologia" },
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

const modal = document.querySelector('#radar');
const overlay = document.querySelector('#overlay');

function selecaoInfo() {
  const listaCursosPro = document.getElementById("lista-cursos")
  const listaEstadosPro = document.getElementById("lista-estados")

cursosPro.forEach(curso => {
  const optionPro = document.createElement('option')

  optionPro.value = curso.id;


  optionPro.textContent = curso.nome;

  listaCursosPro.appendChild(optionPro)
})

//Pegar estados
const estadosPro = Object.values(infoFaculdades).map(f => f.estado);

//Remover duplicados e ordenar com método sort()
const estadosUnicosPro = [...new Set(estadosPro)].sort();

//Adicionar no datalist
estadosUnicosPro.forEach(estado => {
  const optionPro = document.createElement('option')

  optionPro.value = estado;

  listaEstadosPro.appendChild(optionPro)
 })
}


function verificadorBolsa(renda) {
  const salarioMin = 1621

  if (renda <= salarioMin) {
    return "Integral (100%)"
  }
  if (renda > salarioMin &&renda <= (3 * salarioMin)) {
    return "Parcial (50%)"
  } else {
    return "Não elegível para bolsa"
  }

}

function mostrarResultadoProuni(usuario) {
    const divTodasChancesPro = document.querySelector('#todasChances');
    divTodasChancesPro.replaceChildren([], divTodasChancesPro.firstChild); // Limpa os resultados anteriores
    

  const melhoresPrivadas = usuario.resultados.filter(univ => univ.tipo === "privada").sort((a, b) => {
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
    cardFaculPro.classList.add('cardFacul');
     const cardFacTopoPro = document.createElement('div');
    cardFacTopoPro.classList.add('cardTopo');
    const cardFacMeioPro = document.createElement('div');
    cardFacMeioPro.classList.add('cardMeio');

    const nmFaculPro = document.createElement('h3');
    const pNotaPro = document.createElement('p');
    const spanDiffPro = document.createElement('span');
    const spanChancePro = document.createElement('span');
    spanChancePro.classList.add('status');
    const barra = document.createElement('div');
    barra.classList.add('barra-progresso');
    
    nmFaculPro.textContent = facul.faculdade;


    if (facul.diff < 0) {
      spanDiffPro.textContent = `Faltam: ${Math.abs(facul.diff)} pontos`;
    } else if (facul.diff === 0) {
      spanDiffPro.textContent = `No limite`;
    } else if (facul.diff > 0) {
      spanDiffPro.textContent = `Você passou com: ${Math.abs(facul.diff)} pontos a mais`;
    }
    pNotaPro.textContent = `Nota de corte: ${facul.notaCorte}`;

     const nivelAluno = classificarChanceBolsa(facul.diff);

     if (nivelAluno === 'alta'){
      spanChancePro.classList.add('sucesso');
    }
    
    if (nivelAluno === 'possivel' || nivelAluno === 'quase'){
      spanChancePro.classList.add('medio');
    }

    if (nivelAluno === 'baixa' || nivelAluno === 'muito-baixa'){
      spanChancePro.classList.add('perigo');
    }

    cardFaculPro.classList.add(`chance-${nivelAluno}`);

    barra.style.width = barraProgresso(facul.diff);

    if (facul.diff >= 20) {
      spanChancePro.textContent = `Passa com folga`
    } else if(facul.diff >= 10 && facul.diff <= 20){
      spanChancePro.textContent = `Você passou`
    } else if(facul.diff >= 0 && facul.diff <= 10){
      spanChancePro.textContent = `Na risca`
    } else if(facul.diff < 0) {
      spanChancePro.textContent = `Precisa melhorar`
    }

     cardFacTopoPro.appendChild(nmFaculPro);
     cardFacTopoPro.appendChild(pNotaPro);
    
    cardFacMeioPro.appendChild(spanDiffPro);
    cardFacMeioPro.appendChild(spanChancePro);
    cardFacMeioPro.appendChild(barra);

     cardFaculPro.appendChild(cardFacTopoPro); 
     cardFaculPro.appendChild(cardFacMeioPro);

     divTodasChancesPro.appendChild(cardFaculPro);
  
  });

}

function classificarChanceBolsa(diff) {
  if (diff >= 0) return "alta";
  if (diff >= -30) return "possivel";
  if (diff >= -60) return "quase";
  if (diff >= -100) return "baixa";
  if (diff < -100) return "muito-baixa";
}

function barraProgresso(fdiff) {
  const porcentagem = Math.max(0, Math.min(100, 50 + fdiff)); // Exemplo: 50% + diferença, ajustado para ficar entre 0% e 100%

  return porcentagem +'%';
}

function pegarNomeCurso(idCurso) {

  const cursoEncontrado = cursosPro.find(curso => curso.id === idCurso);

  return cursoEncontrado ? cursoEncontrado.nome : null;
}

const BtnVerificarEleg = document.querySelector('#verificar');

document.addEventListener('DOMContentLoaded', selecaoInfo);

BtnVerificarEleg.addEventListener('click', function() {
    const renda = Number(document.querySelector('#renda').value);

  const tipoBolsa = verificadorBolsa(renda);

  const spanElegivel = document.querySelector('#resElegivel');

  spanElegivel.textContent = tipoBolsa;

    // Remove classes antigas e adiciona a nova baseada no resultado
    spanEleg.classList.remove('resultado-sucesso', 'resultado-aviso');

    if (eleitoCotaPPB.includes("Elegível") || eleitoCotaPPB.includes("Integral")) {
        spanEleg.classList.add('resultado-sucesso');
    } else {
        spanEleg.classList.add('resultado-aviso');
                         }
});

formPro.addEventListener('submit', (e) => {
  e.preventDefault();

  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');

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
        item.curso.includes(usuarioPro.curso);

        const estadoMatchUso = item.estado.toUpperCase() === usuarioPro.estado;
      
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

    mostrarResultadoProuni(usuarioPro);

    let contNotaUso = document.querySelector('#nota-usuario');

    let contCursoUso = document.querySelector('#curso-usuario');

    contCursoUso.textContent = pegarNomeCurso(cursoUso);

    contNotaUso.textContent = notaUso;

});

const btnFecharModal = document.querySelector('#fechar');

btnFecharModal.addEventListener('click', () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
})
