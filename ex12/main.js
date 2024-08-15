//João Pedro da Cunha Machado
const food = prompt("Escolha uma opção do menu:\n1) Pizza\n2) Hambúrguer\n3) Sushi")
switch (food) {
    case "1":
        alert("Você escolheu pizza! Confira nosso cardápio.")
        break
    case "2":
        alert("Você escolheu hambúrguer! Delícia!")
        break
    case "3":
        alert("Você escolheu sushi! Que tal um combinado?")
        break
    default:
        alert("Escolha inválida! Por favor, insira um número de 1 a 3.")
        break
}