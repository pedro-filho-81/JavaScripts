// vincula com o formulário html
const frm = document.querySelector('form')
// vincula com os id das tags h3 Html de respostas
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')

// evento quando o botão submit é clicado
frm.addEventListener('submit', e => {
  // recebe a string do campo descrição
  const descricao = frm.inDesc.value
  // recebe o valor do campo preço
  const preco = Number(frm.inPreco.value)

  // resposta tipo texto no resp1
  //   envia a descrição do produto
  resp1.innerText = `Promoção: ${descricao}`
  //   calcula o valor retirando os sentavos
  // formata no estilo moeda
  const valor = Math.floor(preco * 2).toFixed(2)
  //   exibe o valor
  resp2.innerText = `Leve 2 por apenas R$ ${valor}`

  e.preventDefault()
})
