module.exports = function toReadable (number) {
  let num=['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let tt=['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let dec=['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  
  let result=[];
  if(number==0){
    return 'zero';
  }else{
    if(number>=100){
      let h=(number-(number%100))/100;
      result.push(num[h-1]+" hundred");
      number=(number%100);
    }
    if(number>=20 &&number<100 || number==10){
      let d=(number-(number%10))/10;
      result.push(dec[d-1]);
      number=(number%10);
    }
    if(number>10 && number<20){
      let tenTOtwenty=(number-10);
      result.push(tt[tenTOtwenty-1]);
    }
    if(number<10){
      result.push(num[number-1]);
    }
    return result.join(' ').trim()
  }
} 
