// vincula com o formulário
const frm = document.querySelector('form')

// vincula com as respostas
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')

frm.addEventListener('submit', e => {
  e.preventDefault()

  // Recebe o valor digitado no formulário
  const vel_permitida = Number(frm.inPermitida.value)
  const vel_condutor = Number(frm.inCondutor.value)

  // calcula a velocidate até 20% Maior que a velocidade perMitida
  let vel_ate_20 = Number(vel_permitida * 0.2) + vel_permitida
  resp1.innerText = `20% de 60 = ${vel_ate_20.toFixed(2)}`

  let velocidade = Number(0)
  let multa = ''

  if (vel_condutor <= vel_permitida) {
    velocidade = vel_condutor
    multa = 'Sem Multa'
  } else if (vel_condutor <= vel_ate_20) {
    velocidade = vel_condutor
    multa = 'Multa Leve'
  } else {
    velocidade = vel_condutor
    multa = 'Multa Grave'
  }

  resp1.innerText = `Você está a ${velocidade.toFixed(2)}km/h "${multa}".`
})
