const validator = (valorDeVariable) => {
    console.log(valorDeVariable)
    console.log(typeof(valorDeVariable));
    let lastFourDigits = valorDeVariable[12]+valorDeVariable[13]+valorDeVariable[14]+valorDeVariable[15];
    let maskedNumbers = '############';
    let finalMasking = maskedNumbers + lastFourDigits;
    console.log(finalMasking);
    return finalMasking;
};



/*
function isValid (){
let reverseCard = Array.from(numberTc).reverse();
let suma=0;
for (let i=0; i<reverseCard.length; i++){
if (i%2===0) {
    reverseCard[i]=reverseCard[i]*2;
    if (reverseCard[i]>=10){
        reverseCard[i]=reverseCard[i]-9;
    }
}
suma += parseInt(reverseCard[i]);
return suma;
}
};
*/

export default validator;
