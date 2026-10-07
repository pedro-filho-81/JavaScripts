// vincula com o formulário
const frm = document.querySelector('form')

// vincula com o h2 para resposta
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')

// acionado quando o botão for clicado
frm.addEventListener('submit', e => {
  // recebe os valores dos campos do formulário
  const horasNoBrasil = Number(frm.inTime.value)

  // calcula as horas na frança
  let horaFrabca = horasNoBrasil + 5

  if (horaFrabca > 24) {
    horaFrabca -= 24
  }

  resp1.innerHTML = `Horas: ${horaFrabca.toFixed(2)}h/min no Brasil.`
  // resp2.innerHTML = `${pais}`

  e.preventDefault()
})
