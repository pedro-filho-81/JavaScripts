// vincula com o formulário
const frm = document.querySelector('form')

// vincula com o h2 para resposta
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')

frm.addEventListener('submit', e => {
  // recebe os valores dos campos do formulário
  const produto = frm.inProduto.value
  const preco = parseFloat(frm.inPreco.value)

  // calcula o valor a pagar
  const promocao = preco / 2 // 50% do preço
  const vl_pagar = preco * 2 + promocao

  // exibir os resultado
  resp1.innerText = `${produto} - Promoção: Leve 3 por apenas R$ ${vl_pagar.toFixed(
    2
  )}`
  resp2.innerText = `O 3ª produto custa apenas R$ ${promocao.toFixed(2)}`

  e.preventDefault()
})
