// vincula com o formulário
const frm = document.querySelector('form')

// vincula com o h2 para resposta
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')

// CRIA AS VARIÁVEIS PARA AS RESPOSTAS
// string que vai exibir a resposta
let resposta = ''
// inicializa o contador
let numContas = 0
// inicializa o acumulador dos valores
let valorTotal = 0 // recebe a soma dos valores

frm.addEventListener('submit', e => {
  // recebe a descrição do documento (aluguel, OI, Vivo, etc)
  const descricao = frm.inDescricao.value // dexcrição
  // recebe o valor de cada documento
  const valor = Number(frm.inValor.value)

  //  inicializa o contador com pós decremento
  numContas++
  // soma os valores das contas
  valorTotal += valor

  // cria o modelo da resposta
  resposta = resposta + descricao + ' - R$:' + valor.toFixed(2) + '\n'

  // exibe a descrição e o valor do documento
  resp1.innerText = `${resposta}--------------------`
  // exibe o número da conta e a soma dos valores
  // das contas cadastradas com duas casas decimais
  resp2.innerText = `${numContas} Conta(s) - Total:${valorTotal.toFixed(2)}`

  // limpa o campo descrição
  frm.inDescricao.value = ''
  // limpa o campo valor
  frm.inValor.value = ''

  // coloca o focus no campo descrição
  frm.inDescricao.focus()

  e.preventDefault()
})
