const respostas = [
  'Pergunte novamente mais tarde.',
  'Sim, definitivamente!',
  'Minha resposta é não.',
  'Você pode contar com isso.',
  'Melhor não te dizer agora.',
  'A meu ver, sim.',
  'Minhas fontes dizem não.',
  'Provavelmente.',
  'Não é possível prever agora.',
  'Perspectiva boa.',
  'As perspectivas não são tão boas.',
  'Sim.',
  'Concentre-se e pergunte novamente.',
  'Sinais apontam que sim.',
  'Pergunte novamente mais tarde.',
  'Sim, definitivamente!',
  'Minha resposta é não.',
  'Você pode contar com isso.',
  'Melhor não te dizer agora.',
  'A meu ver, sim.',
  'Minhas fontes dizem não.',
  'Provavelmente.',
  'Não é possível prever agora.',
  'Perspectiva boa.',
  'As perspectivas não são tão boas.',
  'Sim.',
  'Concentre-se e pergunte novamente.',
  'Sinais apontam que sim.'
]
const resposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const perguntar = document.querySelector("#perguntar")

function fazerPergunta() {

  if(inputPergunta.value == ""){
    alert("Digite sua pergunta")
    return
  }

  perguntar.setAttribute("disabled", true)

  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas) 
  const pergunta = `<div> ${inputPergunta.value} </div>`

  resposta.innerHTML = pergunta + respostas[numeroAleatorio]
  resposta.style.opacity = 1

  setTimeout(function(){
    resposta.style.opacity = 0;
    perguntar.removeAttribute("disabled")
  }, 4000)
}