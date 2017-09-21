let dec=0;
let aux=0;
function trocaDecimal(numeroRomano){
let i="I",v="V",x="X",l="L",c="C", resultado;
let romanos={
  "I":1,
  "V":5,
  "X":10,
  "L":50,
  "C":100
}

    let romanoSplit = numeroRomano.split('');
    console.log(romanoSplit);
    for(let j=0; j<romanoSplit.length;j++){
      console.log(romanos[romanoSplit[j]]);
      if(romanoSplit[j]==romanos["I"]){

        if(aux<romanos[romanoSplit[j]] && aux!=0){
          dec-=aux;
          dec+=romanos[romanoSplit[j]]-aux;
        }else{
          dec+=romanos[romanoSplit[j]];
          aux=romanos[romanoSplit[j]];
        }
      }else if(romanoSplit[j]==romanos["V"]){
        if(aux<romanos[romanoSplit[j]] && aux!=0){
          dec-=aux;
          dec+=romanos[romanoSplit[j]]-aux;
        }else{
          dec+=romanos[romanoSplit[j]];
          aux=romanos[romanoSplit[j]];
        }
      }else if(romanoSplit[j]==romanos["X"]){
        if(aux<romanos[romanoSplit[j]] && aux!=0){
          dec-=aux;
          dec+=romanos[romanoSplit[j]]-aux;
        }else{
          dec+=romanos[romanoSplit[j]];
          aux=romanos[romanoSplit[j]];
        }
      }
      // }else if(romanoSplit[j]==romanos["L"]){
      //   if(aux<romanos[romanoSplit[j]] && aux!=0){
      //     dec-=aux;
      //     dec+=romanos[romanoSplit[j]]-aux;
      //   }else{
      //     dec+=romanos[romanoSplit[j]];
      //     aux=romanos[romanoSplit[j]];
      //   }
      // }else if(romanoSplit[j]==romanos["C"]){
      //   if(aux<romanos[romanoSplit[j]] && aux!=0){
      //     dec-=aux;
      //     dec+=romanos[romanoSplit[j]]-aux;
      //   }else{
      //     dec+=romanos[romanoSplit[j]];
      //     aux=romanos[romanoSplit[j]];
      //   }


    }
      console.log(dec);

}
trocaDecimal("XIV");
