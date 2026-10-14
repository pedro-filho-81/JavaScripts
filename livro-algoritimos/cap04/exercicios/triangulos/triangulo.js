// vincula com o formulário
const frm = document.querySelector('form')

// vincula com as respostas
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')

frm.addEventListener('submit', e => {
  e.preventDefault()

  // Recebe o valor digitado no formulário
  const ladoA = Number(frm.inLadoA.value)
  const ladoB = Number(frm.inLadoB.value)
  const ladoC = Number(frm.inLadoC.value)

  // condições para ser um triângulo
  // cada lado tem que ser menor que
  // a soma dos outros dois lados
  if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
    resp1.innerText = `Pelos lados pode ser um triângulo`
  }

  // variáveis
  let tipo = '' // tipo de triângulo
  let mensagem = '' // mensagev do tipo

  // todos os lados iguais
  if (ladoA == ladoB && ladoB == ladoC) {
    mensagem = 'Todos os lados iguais é do '
    tipo = 'Equilátero'
    // dois lados iguais
  } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
    mensagem = 'Dois lados iguais é do '
    tipo = 'Isóceles'
    // todos os lados diferentes
  } else {
    mensagem = 'Todos os lados diferentes é do '
    tipo = 'Escaleno'
  }

  // exibe o tipo de Triângulo
  resp2.innerText = `${mensagem} Tipo: "${tipo}"`
})
