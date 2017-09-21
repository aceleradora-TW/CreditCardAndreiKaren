function traduz(element, index, array) {
  let num=romanos[element];
  if(anterior!=0 && anterior<num){
    decimal-=anterior;
    num=num-anterior;
    decimal+=num;
  }else{
    decimal+=num;
    anterior=num;
  }
}
/////////////////////////////////////////////////////////////////////
romanos={
  'I':1,
  'V':5,
  'X':10,
  'L':50,
  'C':100,
  'M':1000
}
let decimal=0, anterior=0;
numeroRomano='CXXV'
numeroRomano=numeroRomano.split('');
numeroRomano.forEach(traduz);
console.log(decimal);
// logs:
// a[0] = 2
// a[1] = 5
// a[3] = 9
