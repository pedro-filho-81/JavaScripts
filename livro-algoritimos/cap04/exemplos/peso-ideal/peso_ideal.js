// vincula js com form
const frm = document.querySelector('form')

// vincula com respostas
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')

// recebe os valores preenchidos nos campos do formulário
frm.addEventListener('submit', e => {
  // recebe os valores digitados pelo usuário
  // no formulário
  const nome = frm.inNome.value
  const sexoM = frm.inMasculino.checked
  // const sexoF = frm.inFeminino.value
  const altura = Number(frm.inAltura.value)

  // calcular peso ideal
  const homem = 22 * altura ** 2 // do homem
  const mulher = 21 * altura ** 2 // da mulher

  // USANDO O OPERADOR TERNÁRIO
  // se o sexo for masculino o cálculo homem SERÁ FEITO
  // se o sexo for feminino o cálculo mulhes SERÁ FEITO
  const peso = sexoM // se masculino for verdade
    ? // USANDO O OPERADOR TERNÁRIO (EXPRESSÃO ? SE VERDADEIRO : SE FALSO)
      // exibe este se o sexo for masculino
      (resp1.innerText = `${nome.toUpperCase()}. 
    Seu peso ideal é ${homem.toFixed(2)}Kg`)
    : // exibe este se o sexo for feminino
      (resp2.innerText = `${nome.toUpperCase()}. 
    Seu peso ideal é ${mulher.toFixed(2)}Kg`)

  /*
  // USANDO A INSTRUÇÃO IF ELSE
  // exibir, se sexo masculino
  if (sexoM) {
    // se verdade
    // exibir essa resposta
    resp1.innerText = `${nome.toUpperCase()}. 
    Seu peso ideal é ${homen.toFixed(2)}Kg`
    // se não
  } else {
    // exibir essa resposta
    resp2.innerText = `${nome.toUpperCase()}. 
    Seu peso ideal é ${mulher.toFixed(2)}Kg`
  }
*/

  e.preventDefault()
})

// Limpa os campos preenchidos pelo usuário no formulário
frm.addEventListener('reset', () => {
  // lImPA TODOS OS CAmPOS DO FORmULÁRIO
  nome = ''
  sexoM = ''
  sexoF = ''
  altura = ''
  resp1.innerText = ''
  resp2.innerText = ''
})
