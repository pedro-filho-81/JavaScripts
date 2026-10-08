// vincula com o formulário
const frm = document.querySelector('form')

// vincula com as respostas
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')

frm.addEventListener('submit', e => {
  e.preventDefault()

  // Recebe o valor digitado no formulário
  const vl_moeda = Number(frm.inMoedas.value)

  let troco = 0
  let tempo = 0

  if (vl_moeda >= 3.0) {
    tempo = 120
    troco = vl_moeda - 3.0
  } else if (vl_moeda >= 1.75) {
    tempo = 60
    troco = vl_moeda - 1.75
  } else if (vl_moeda >= 1) {
    tempo = 30
    troco = vl_moeda - 1.0
  }

  resp1.innerText = `Tempo ${tempo} min`
  resp2.innerText = `Troco R$ ${troco.toFixed(2)}`
})
