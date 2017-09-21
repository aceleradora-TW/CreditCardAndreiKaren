function main(numCartao){
let card;
var reverse;
    cartaoSplitado = numCartao.split('');
    // reverse = arrayNovo.reverse();
     valida(cartaoSplitado);
     if(soma(cartaoSplitado)){
       console.log("CARTAO VALIDADO!");
     }else{
       console.log("CARTAO INVALIDO");
     }


}
function valida(numCartao){
  var length = numCartao.length;
  if(numCartao[0]==4 && length==16 || length==13){
      card = "Visa";
      console.log("DEU BOM", card);
  }else if(numCartao[0]==5 && (numCartao[1]>=1 && numCartao[1]<=5) && length==16){
    card="MasterCard";
    console.log("DEU BOM", card);

  }else if(numCartao[0]==6 && numCartao[1]==0 && numCartao[2]==1 && numCartao[3]==1 && length==16){
    card="Discover";
    console.log("DEU BOM", card);
  }else if(numCartao[0]==3 && (numCartao[1]==4 || numCartao[1]==7) && length==15){
    card="AMEX";
    console.log("DEU BOM", card);

  }else{
    console.log("Cartão inválido");
  }
}
function soma(numCartao){
var length = numCartao.length;
var soma=0;
  for(let i=0;i<length;i++){
    if(i%2==0){
      numCartao[i] = numCartao[i]*2;
      if(numCartao[i]>9){
        numCartao[i]=numCartao[i]-9;
      }
    }
    soma= parseInt(numCartao[i])+soma;

  }

  if(soma%10==0){
    return true;
  }else{
    return false;
  }
}
// function dobraNum(numCartao){
//   let somat=0;
//   let soma=0;
//   let soma1=0;
//   let soma2=0;
//     for(var i=numCartao.length-1;i>=0;i--){
//         if(i%2==0){
//           opcao = numCartao[i]*2
//           // console.log(opcao);
//           if(opcao<=9){
//             soma += opcao; //CERTO
//             // console.log(soma);
//           }else{
//             soma1 += parseInt(opcao.toString().charAt(0)) + parseInt(opcao.toString().charAt(1));
//             // console.log(opcao.toString().charAt(0));
//             // console.log(soma);
//           }
//
//           // console.log(soma);
//         }else{
//           soma2+=parseInt(numCartao[i]);
//           // console.log(soma1);
//         }
//     }
//     somat = soma1 + soma2 + soma;
//     console.log(somat);
// }
main('4408041234567893');










// function somaNumeros(num1, num2){
//   var resultado;
//   resultado = num1 + num2;
//   console.log(resultado);
// }
//
// somaNumeros(1,2);

// function volumePiramide(base, altura){
//   var volume;
//   volume = (base*base*altura)/3;
//   console.log(volume + "m2");
// }
// volumePiramide(3,2);

// function divideNumeros(num1, num2){
//   var resultado;
//   resultado = num1/num2;
//   console.log(resultado);
// }
// divideNumeros(7,3);

// function metadeDobro(numero){
//   var resultadoDobro, resultadoMetade;
//   resultadoDobro = numero * 2;
//   resultadoMetade = numero / 2;
//   console.log(resultadoMetade, resultadoDobro);
// }
// metadeDobro(47);

// function pessoa(nome, idade){
//   var idadeFinal;
//   idadeFinal = idade+30;
//   console.log(nome, idadeFinal);
//
// }

// pessoa("Peter", 15);
// function media(nota1, nota2, nota3){
//   var media;
//   media= (nota1+nota2+nota3)/3;
//   console.log(media);
//
// }
// media(10, 5, 0);

// function calculos(num1, num2){
//   var soma, sub1, sub2, prod, div, quo, resto;
//
//   soma=num1+num2;
//   sub1=num1-num2;
//   sub2=num2-num1;
//   prod=num1*num2;
//   div=num1/num2;
//   quo=parseInt(num1/num2);
//   resto=num1%num2;
//   console.log(soma+"\n"+sub1+"\n"+sub2+"\n"+prod+"\n"+div+"\n"+quo+"\n"+resto);
// }
//
// calculos(9,2);

// function dayOne(lista){
//   let r, l;
//   for(let i = 0; i <= lista.lenght; i++){
//     if(i == "r"){//se R
//       //if i-1 R
//       //if i-1 L
//     }else{//se L
//
//     }
//   }
// }
