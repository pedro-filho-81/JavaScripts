// vincula o js com o formulário
const frm = document.querySelector('form')

// vincula o JS com as tags de respostas
const respErros = document.querySelector('#outErros')
const respChances = document.querySelector('#outChances')
const respDicas = document.querySelector('#outDicas')

// gera número aleatório
let alea = Math.floor(Math.random() * 100) + 1

// Nº de chances para acertar
const CHANCES = 6 // Nº DE CHANCES

// array para colocar nº de erros
let erros = []

// cRIA O ADDEVENTLISTENER
frm.addEventListener('submit', e => {
  // RECEBE O VALOR DIGITADO PELO USUÁRIO
  // recebe o valor do formulário Html
  let num = Number(frm.inValor.value)

  // se num igual a alea
  if (num == alea) {
    // exibir parabéns
    respDicas.innerText = `Parabéns! O Nº ${num} jogado é igual Nº ${alea} sorteado.`

    // trocar status dos botões
    // desabilita o botão submit
    frm.btnSubmit.disabled = true
    // habilita o botão btnNovo pelo nome da classe
    frm.btnNovo.className = '.exibe'
  } // end if externo
  // se não externo
  else {
    // se número já existe no array erros (já apostou)
    if (erros.includes(num)) {
      alert(`Você já apostou nesse número: ${num} Tente outro.`)
    } // end if interno
    // se não apostou
    else {
      // adicione o número no array erros
      erros.push(num)
      // cria a constante número de erros
      // e recebe o tamanho do vetor
      const numErros = erros.length

      // calcula o nº de chances
      const numChances = CHANCES - numErros

      //exibe o nº de erros, elementos do vetor e nº de chances
      respErros.innerText = `${numErros} (${erros.join(', ')})`
      // exibr o número de chances para jogar
      respChances.innerText = `${numChances}`

      // se número de chances igual a zero 0
      if (numChances == 0) {
        alert('Suas chances acabaram...')
        frm.btnSubmit.disabled = true
        frm.btnNovo.className = '.exibe'
        respDicas.innerText = `Game Ouver!! Número Sorteado: ${alea}`
      } else {
        // usar operador ternário para mensagem das dicas
        const dica = num < alea ? 'maior' : 'menor'
        respDicas.innerText = `Dica: Tente um número ${dica} que ${num}`
      } // end else
    } // end else interno
  } // end else externo

  frm.inValor.value = ''
  frm.inValor.focus()

  e.preventDefault()
}) // end addEventListener

// ao clicar no botão jogar novamente
frm.btnNovo.addEventListener('click', () => {
  location.reload() // recarega a página
})
