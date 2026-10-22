console.log('Programa para Calcular Parcelas.\nDigite 0 para Sair.')

// cria um loop infinito
while (true) {
  // recebe o valor total das compras informado pelo usuário
  let valor = Number(prompt('Digite o valor a pagar R$: '))
  // exibi o valor total das compras
  console.log(`Valor das compras ${valor.toFixed(2)}`)

  // se valor informado igual a zero 0
  if (valor == 0) {
    // imprima
    console.log('Fim do programa>')
    break // e saia do programa
  } // end if

  // recebe o número de parcelas no máximo 12 parcelas
  let parcelas = Number(prompt('Nº. de Parcelas (máximo 12x)'))
  // se as parcelas maior que 12
  if (parcelas > 12) {
    // exibe mensagem
    console.log('Parcelas: no máximo até 12 vezes.')
    // parcelas recebe 12
    parcelas = 12
  }

  // recebe o o valor das parcelas
  let vl_parcelas = Math.floor(valor / parcelas)
  // resto recebe o resto das parcelas
  let resto = valor % vl_parcelas
  // valor final é o valor das parxelas mais o resto
  let valor_final = vl_parcelas + resto
  // loop for para exibir o valor de cada parcela
  for (let i = 1; i < parcelas; i++) {
    // imprime os valores das parcelas
    console.log(`${i}ª parcela R$ ${vl_parcelas.toFixed(2)}`)
  } // end for

  // imprime as parcelas
  console.log(`${parcelas}ª parcela R$ ${valor_final.toFixed(2)}`)
} // end while
