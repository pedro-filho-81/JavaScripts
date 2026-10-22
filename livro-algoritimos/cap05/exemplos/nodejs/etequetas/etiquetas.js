console.log('Programa de Etiquetas. Digite 0 para Sair.')

console.log('----------------------------------')

// cria um loop infinito
while (true) {
  // solicita a descrição do produto
  // ou digite zero para sair do programa
  let produto = prompt('Descreva o produto:\nDigite 0 para Sair.')

  // se produto igual a zero 0
  if (produto == 0) {
    // imprima
    console.log('Fim do programa>')
    break // e saia do programa
  } // end if

  // se o produto for maior que zero
  const qtd_etiquetas = Number(
    prompt(
      // informa a quantidade de etiquetas
      'Quantidade de etiquetas para impressão: '
    ) // end prompt
  ) // end parseInt
  console.log(`Você pediu ${qtd_etiquetas} etiquetas.`)
  // faça o loop for enquanto a var i for menor que a quantidade de etiquetas
  for (let i = 1; i <= qtd_etiquetas / 2; i++) {
    // imprima
    console.log(`${i} = ${produto} - ${produto}`)
  } // end for

  if (qtd_etiquetas % 2 == 1) {
    console.log(`${produto}`)
  } // end if
} // end while
