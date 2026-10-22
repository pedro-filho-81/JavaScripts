console.log('Programa Anos de Copa do Mundo. Digite 0 para Sair.')

console.log('----------------------------------')

do {
  const ano = parseInt(
    prompt('Programa Anos de Copa do Mundo.\nDigite 0 para Sair\nAno:')
  )

  if (ano == 0) {
    break
  } else if (ano == 1942 || ano == 1946) {
    console.log(`Não houve copa no ano de ${ano}(Segunda Guerra Mundial)`)
  } else if (ano >= 1930 && ano % 4 == 2) {
    console.log(`Sim! ${ano} é ano de Copa do Mundo.`)
  } else {
    console.log(`Não... ${ano} não é ano de Copa do Mundo. `)
  }
} while (true)
