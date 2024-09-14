//Variáveis para armazenar o nome e a quantidade de XP do herói
let nome = "Naruto"
let xp = 2787
let nivel = "" 
let pontosNextNivel

// Estrutura de decisão para determinar o nível com base na quantidade de XP usando if
if (xp <= 1000) {
    nivel = "Ferro"
    pontosNextNivel = 1000 - xp

} else if (xp > 1000 && xp < 2001) {
    nivel = "Bronze"
    pontosNextNivel = 2000 - xp

} else if (xp > 2000 && xp < 5001) {
    nivel = "Prata"
    pontosNextNivel = 5000 - xp

} else if (xp > 5000 && xp < 7001) {
    nivel = "Ouro"
    pontosNextNivel = 7000 - xp

} else if (xp > 7000 && xp < 8001) {
    nivel = "Platina"

} else if (xp > 8000 && xp < 9001) {
    nivel = "Ascendente"
    pontosNextNivel = 8000 - xp

} else if (xp > 9000 && xp < 10001) {
    nivel = "Imortal"
    pontosNextNivel = 9000 - xp

} else if (xp >= 10001) {
    nivel = "Radiante"

}

//Exibindo o resultado
console.log("O Herói de nome " + nome + " está no nível " + nivel + " com " + xp + " ponto(s) de experiência. Faltam " + pontosNextNivel + " pontos para atingir o próximo nível.")
