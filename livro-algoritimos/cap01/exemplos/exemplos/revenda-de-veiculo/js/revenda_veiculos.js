// vincula com o formulário  html
const frm = document.querySelector('form')
// vincula com a id inmodelo do input form Html
const resp1 = document.querySelector('#outResp1')
// vincula com a id inResp2 do h3 form Html
const resp2 = document.querySelector('#outResp2')
// vincula com o id inResp3 do h3 Html
const resp3 = document.querySelector('#outResp3')

// cria o "ouvinte" do evento,
// acionado quando o botão submit for clicado
frm.addEventListener('submit', e => {
  //obtém o conteúdo do campo modelo
  const modelo = frm.inmodelo.value
  // obtém o conteúdo do campo preco
  const preco = frm.inPreco.value

  // exibe o resultado da promoção do carro
  resp1.innerText = `Promoção: ${modelo}`
  resp2.innerText = `Entrada de R$ ${(preco / 2).toFixed(2)}`
  resp3.innerText = `+ 12 de R$ ${(preco / 2 / 12).toFixed(2)}`

  // previne o envio do formulário
  e.preventDefault()
})
