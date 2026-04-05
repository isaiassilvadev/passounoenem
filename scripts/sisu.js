let dados = [];
fetch('https://gist.githubusercontent.com/Zis2x/17fce2616f402b6b8fa3fdb94f76b4a8/raw/657ba033ce1f2c27f5e73b6e8fec81193efa3f9a/notas_faculdades.json')
  .then(response => response.json())
  .then(json => {
    dados = json;
    console.log(dados);
  });

const form = document.querySelector('.form-grid');

function filtrarResultados(nota, curso, estado) {
  const alta = [];
  const media = [];
  const baixa = [];

  dados.forEach((item) => {
    const cursoMatch = item.curso.toLowerCase().includes(cursoDigitado);

    if (cursoMatch) {
      const diff = notaUsuario - item.nota;

      if (diff >= 20) {
        alta.push(item);
      } else if (diff >= -30) {
        media.push(item);
      } else {
        baixa.push(item);
      }
    }
  });
  renderResultados(alta, media , baixa);
}

function renderResultados(alta, media , baixa){
  const altaDiv = document.querySelector('#alta');
  const mediaDiv = document.querySelector('#media');
  const baixaDiv = document.querySelector('#baixa');

  altaDiv.innerHTML = gerarCards(alta);
  mediaDiv.innerHTML = gerarCards(media);
  baixaDiv.innerHTML = gerarCards(baixa);
}

function gerarCards(lista){

  if(lista.length === 0){
    return '<p>Nenhum resultado encontrado.</p>';

    return lista.map(item => `<div class="card">
      <h3>${item.curso}</h3>
      <p>Estado: ${item.faculdade}</p>
      <p>Nota de corte: ${item.nota}</p>
    </div>`).join("");
  }
}

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nota = Number(document.querySelector('#nota-enem').value);

    const cursoDigitado = document.querySelector('#seuCurso').value.toLowerCase();

    filtrarResultados(nota, cursoDigitado, estado);
  });