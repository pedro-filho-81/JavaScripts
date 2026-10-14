// vincula com o formulário
const frm = document.querySelector('form')

// vincula com as respostas
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')

frm.addEventListener('submit', e => {
  e.preventDefault()

  // Recebe o valor digitado no formulário
  const num = Number(frm.inNumero.value)
  let resposta = ''
  // loop for para contar de 1 até 10
  for (let i = 1; i <= 10; i++) {
    resposta += num + ' x ' + i + ' = ' + num * i + '\n'
  }
  resp1.innerText = `Tabuada de ${num}`
  resp2.innerText = resposta
})
