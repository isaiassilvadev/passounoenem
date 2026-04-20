let dados = [];

fetch('https://gist.githubusercontent.com/Zis2x/17fce2616f402b6b8fa3fdb94f76b4a8/raw/471b402f942e0faeffca6fceda3118c8bb08ccfa/notas_faculdades.json')
  .then(res => res.text())
  .then(texto => {
    const limpoTexto = texto.replace(/\u00A0/g, " ");//Remove NBSP
    dados = JSON.parse(limpoTexto);
  });

//Objetos
const cursosSisu = [
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

const form = document.querySelector('.form-grid');

const modalSisu = document.querySelector('#radar');
const overlaySisu = document.querySelector('#overlay');

function selecaoInfoSisu() {
  const listaCursosSisu = document.getElementById("lista-cursos")
  const listaEstadosSisu = document.getElementById("lista-estados")

cursosSisu.forEach(curso => {
  const optionSisu = document.createElement('option')

  optionSisu.value = curso.id;


  optionSisu.textContent = curso.nome;

  listaCursosSisu.appendChild(optionSisu)
})

//Pegar estados
const estadosSisu = Object.values(infoFaculdades).map(f => f.estado);

//Remover duplicados e ordenar com método sort()
const estadosUnicosSisu = [...new Set(estadosSisu)].sort();

//Adicionar no datalist
estadosUnicosSisu.forEach(estado => {
  const optionSisu = document.createElement('option')

  optionSisu.value = estado;

  listaEstadosSisu.appendChild(optionSisu)
 })
}

function verificadorCotaPPB(renda, respEst) {
  const salarioMinimo = 1621; // Valor do salário mínimo em 2026
  const estudouEscolaPub = respEst.toLowerCase();

  if (renda <= salarioMinimo && estudouEscolaPub === "sim") {
    return "Elegível para cota de baixa renda (PPB)";
  } else {
    return "Não elegível para cota de baixa renda (PPB)";
  }
}


function mostrarResultado(usuario) {
    const divTodasChances = document.querySelector('#todasChances');
  divTodasChances.innerHTML = "";

  const melhoresPublicas = usuario.resultados.filter(univ => univ.tipo === "pública").sort((a, b) => {
    if (a.diff >= 0 && b.diff < 0) {
     return -1
    }
    if (a.diff < 0 && b.diff >= 0) {
     return 1
    }
    return b.diff - a.diff;
  }).slice(0, 3);

 
  melhoresPublicas.forEach(facul => {
    const cardFacul = document.createElement('div');
    cardFacul.classList.add('cardFacul');
    const cardFacTopo = document.createElement('div');
    cardFacTopo.classList.add('cardTopo');
    const cardFacMeio = document.createElement('div');
    cardFacMeio.classList.add('cardMeio');

    const nmFacul = document.createElement('h3');
    const pNota = document.createElement('p');
    const spanDiff = document.createElement('span');
    spanDiff.classList.add('status');
    const spanChance = document.createElement('span');
    
    nmFacul.textContent = facul.faculdade;

    if (facul.diff < 0) {
      spanDiff.textContent = `Faltam: ${Math.abs(facul.diff)} pontos`;
    } else if (facul.diff === 0) {
      spanDiff.textContent = `No limite`;
    } else if (facul.diff > 0) {
      spanDiff.textContent = `Você passou com: ${Math.abs(facul.diff)} pontos a mais`;
    }
    pNota.textContent = `Nota de corte: ${facul.notaCorte}`;

     const nivel = classificarChance(facul.diff);

    cardFacul.classList.add(`chance-${nivel}`);

    if (nivel === 'alta'){
      spanChance.classList.add('sucesso');
    }
    
    if (nivel === 'possivel' || nivel === 'quase'){
      spanChance.classList.add('medio');
    }

    if (nivel === 'baixa' || nivel === 'muito-baixa'){
      spanChance.classList.add('perigo');
    }

    if (facul.diff >= 20) {
      spanChance.textContent = `Passa com folga`
    } else if(facul.diff >= 10 && facul.diff <= 20){
      spanChance.textContent = `Você passou`
    } else if(facul.diff >= 0 && facul.diff <= 10){
      spanChance.textContent = `Na risca`
    } else if(facul.diff < 0) {
      spanChance.textContent = `Precisa melhorar`
    }

    cardFacTopo.appendChild(nmFacul);
    cardFacTopo.appendChild(pNota);

    cardFacMeio.appendChild(spanDiff);
    cardFacMeio.appendChild(spanChance);

     cardFacul.appendChild(cardFacTopo); 
     cardFacul.appendChild(cardFacMeio);

    divTodasChances.appendChild(cardFacul);
  });

}

function classificarChance(diff) {
  if (diff >= 0) return "alta";
  if (diff >= -30) return "possivel";
  if (diff >= -60) return "quase";
  if (diff >= -100) return "baixa";
  if (diff < -100) return "muito-baixa";
}

function pegarNomeCursoDig(idCurso) {

  const cursoEnct = cursosSisu.find(curso => curso.id === idCurso);

  return cursoEnct ? cursoEnct.nome : null;
}

const BtnVerificarCota = document.querySelector('#verificar');

document.addEventListener('DOMContentLoaded', selecaoInfoSisu);

BtnVerificarCota.addEventListener('click', function() {
    const estudouEmEscPub = document.querySelector('#escPub').value

    const rendaUso = Number(document.querySelector('#renda').value);

    const eleitoCotaPPB = verificadorCotaPPB(rendaUso, estudouEmEscPub);

    const spanEleg = document.querySelector('#resElegivel');

    spanEleg.textContent = eleitoCotaPPB;
});


form.addEventListener('submit', function(event) {
    event.preventDefault();

    modalSisu.classList.remove('hidden');
    overlaySisu.classList.remove('hidden');

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
        const faculInfo = item.faculdade.toUpperCase();

        if (!faculInfo) return;
      
        const cursoMatch = 
        item.curso.includes(usuario.curso);

        const estadoMatch = item.estado.toUpperCase() === usuario.estado;
      
        if (cursoMatch && estadoMatch) {
      
          const jaExiste = usuario.resultados.some(
            r => r.faculdade === item.faculdade && r.curso === item.curso
          );
      
          if (!jaExiste) {
            usuario.resultados.push({
              faculdade: item.faculdade,
              estado: item.estado,
              tipo: item.tipo,
              curso: item.curso,
              notaCorte: item.nota,
              diff: usuario.nota - item.nota
            });
          }
        }
  });
    console.log(usuario.resultados)

    mostrarResultado(usuario);

    let contNota = document.querySelector('#nota-usuario');

    let campoCursoUso = document.querySelector('#curso-usuario');

    campoCursoUso.textContent = pegarNomeCursoDig(curso);

   contNota.textContent = nota;
  });

  const btnFecharModalSisu = document.querySelector('#fechar');

btnFecharModalSisu.addEventListener('click', () => {
  modalSisu.classList.add('hidden');
  overlaySisu.classList.add('hidden');
})