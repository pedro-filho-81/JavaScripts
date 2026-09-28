// vincula com o formulário
const frm = document.querySelector('form')

// vincula com o h2 para resposta
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')

frm.addEventListener('submit', e => {
  // recebe os valores dos campos do formulário
  let peso = Number(frm.inPeso.value)
  let consumo = Number(frm.inConsumo.value)

  // peso vezes mill equivale a x quilos
  peso *= 1000 // peos em Kg
  // quanto dura a ração consumindo x grama por dia
  const duracao = peso / consumo
  //  quanto sobra da ração consumindo x gr por dia
  const sobra = peso % consumo
  // calcula o valor a pagar
  // const vl_pagar = (tempo_uso * vl_minutos) / 15

  // exibir os resultado
  resp1.innerText = `Duração: ${Math.floor(duracao)} dias`
  resp2.innerText = `Sobra: ${sobra}gr`

  e.preventDefault()
})
