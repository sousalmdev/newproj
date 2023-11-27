let nome="Goku"
let vitórias=200;
let derrotas=6;
let media=vitórias-derrotas;

function saldoRank(){
    
    if(media<10){
        return `Ferro`

}else if(media>10 && media<=20) {
    return `Bronze`

} else if(media>20 && media<=50) {
    return `Prata`

} else if(media>50 && media<=80) {
    return `Ouro`

} else if(media>80 && media<=90) {
    return `Diamante`

} else if(media>90 && media<=100) {
    return `Lendário`

} else if(media>100) {
    return `Imortal`

}
};
console.log("O Héroi "+ nome+ " tem saldo de:" + media + " e está no ranking:" + saldoRank());