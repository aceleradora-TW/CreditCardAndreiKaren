function main(numCartao){
     valida(numCartao);
     if(soma(numCartao)){
       console.log("CARTAO VALIDADO!");
     }else{
       console.log("CARTAO INVALIDO");
     }
}
function valida(numCartao){
  var length = numCartao.length;

  if(numCartao.slice(0,1)==4 && (length==16 || length==13) ){
    console.log("VISA DEU BOM");
  }else if((numCartao.slice(0,2)==34  || numCartao.slice(0,2)==37) && (length==15)){
    console.log("AMEX DEU BOM");
  }else if((numCartao.slice(0,2)>=51  && numCartao.slice(0,2)<=55) && (length==16)){
    console.log("Master Card DEU BOM");
  }else if(numCartao.slice(0,4)==6011  && length==16){
    console.log("Discover DEU BOM");
  }else{
    console.log("Cartao Invalido!");
  }
}
function soma(numCartao){
var length = numCartao.length;
var soma=0;

  let arrayNovo = numCartao.split('');
  arrayNovo.reverse();


  for(let i=0;i<length;i++){
    if(i%2==0){
      arrayNovo[i] = arrayNovo[i]*2;
      if(arrayNovo[i]>9){
        arrayNovo[i]=arrayNovo[i]-9;
      }
    }
    soma= parseInt(arrayNovo[i])+soma;

  }

  if(soma%10==0){
    return true;
  }else{
    return false;
  }
}
main('6011041234567893');
