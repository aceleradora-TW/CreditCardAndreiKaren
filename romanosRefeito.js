let resultado=0, anterior=0;// VARIAVEIS DECIMAL(RESULTADO) E ANTERIOR(ULTIMO NUMERO SOMADO)

romanos={//CRIANDO OBJ COM OS NUMEROS ROMANOS
  'I':1,
  'V':5,
  'X':10,
  'L':50,
  'C':100,
  'M':1000
}

numeroRomano='CXXV'//SETANDO NUMEOR A SER TRADUZIDO
numeroRomano=numeroRomano.split('');//SEPARANDO AS LETRAS NA STRING E COLOCANDO EM UM ARRAY
numeroRomano.forEach(traduz);//CHAMANDO A FUNÇÃO TRADUZ PARA CADA ITEN DO ARRAY

console.log(resultado);//IMPRIMI RESULTADO


function traduz(element, index, array) {// FUNÇÃO TRADUZ QUE PEGA UM ELEMENTO DO ARRAY
  let num=romanos[element];//NUM RECEBENDO O NUMERO CORRESPONDENDO DO ELEMENTO DO ARRAY(EX: se for "I" traz 1)

  if(anterior!=0 && anterior<num){//SE O ANTERIOR N TIVER ZERADO E FOR MENOR DOQ O NUMERO DO ELEMENTO

    resultado-=anterior;//RESULTADO RETIRA A ULTIMA SOMA FEITA
    num=num-anterior;// NUM RECEBE RESULTADO DA SUBTRAÇAO DO ULTIMO NUMERO COM O NOVO
    resultado+=num;//E ACRESCENTA NO RESULTADO

  }else{ // SOMA NORMAL

    resultado+=num;//RESULTADO ACRESCENTA O NOVO NUMERO
    anterior=num;//ANTERIOR RECEBE O NUMERO Q FOI ACRESCENTADO

  }
}
