let nome="Goku"
let vitórias=9;
let derrotas=0;
let media=vitórias-derrotas;
//
function saldoRank(){
    switch (true) {
        case media<10 : return `Ferro`;
        break;
        case media>10 && media<=20:return `Bronze`;
        break;
        case media>20 && media<=50: return `Prata`;
        break;
        case media>50 && media<=80:return `Ouro`;
        break;
        case media>80 && media<=90: return `Diamante`;
        break;
        case media>90 && media<=100 :return `Lendário`;
        break;
        case media>100: return `Imortal`;
    }   
}
console.log("O Héroi "+ nome+ " tem saldo de: " + media + " e está no ranking: "+saldoRank());
