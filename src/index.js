module.exports = function zeros(expression) {
  // your solution

     let reg = /\d{1,3}/g;
     let arrayOfNums = (expression.match(reg));
     reg = /(!){1,2}/g;
     let factorials = expression.match(reg),
         result = '1';

     for(let i=0; i<arrayOfNums.length; i++){
         let numToMulti = fuctorialCounter(arrayOfNums[i], factorials[i]);
         result = multiply(result, numToMulti);
     }

     return nullCalculator(result);
}


function fuctorialCounter(number, factorial) {
    number = Number(number);
    let returnNumber = '1';
    if(factorial === "!"){
        for(let i=1;i<=number; i++){
            let iToMulti = i.toString();
            returnNumber = multiply(returnNumber,iToMulti);
        }
        return returnNumber;
    }else{
        if(number % 2 === 0){
            for(let i=2;i<=number; i=i+2){
                var iToMulti = i.toString();
                returnNumber = multiply(returnNumber,iToMulti);
            }
            return returnNumber;
        }else{
            for(let i=1;i<=number; i=i+2){
                var iToMulti = i.toString();
                returnNumber = multiply(returnNumber,iToMulti);
            }
            return returnNumber;
        }
    }
}

function nullCalculator(stringNum) {
    stringNum = stringNum.split('').reverse();
    let nullCounter = 0;

    for(let i=0; i<stringNum.length; i++){
        if(Number(stringNum[i])===0){
            nullCounter++;
        }else{
            return nullCounter;
        }
    }
}

 function multiply(first, second) {
     // your solution

     let firstParsedNumber = first.split("").reverse(),
         secondParsedNumber = second.toString().split("").reverse(),
         ResultOfMultiply = [];

     for (let firstNumIteration = 0; firstNumIteration < firstParsedNumber.length; firstNumIteration++) {
         for (let secondNumIteration = 0; secondNumIteration < secondParsedNumber.length; secondNumIteration++) {
             let arrayPos = firstNumIteration + secondNumIteration;

             ResultOfMultiply[arrayPos] = firstParsedNumber[firstNumIteration] * secondParsedNumber[secondNumIteration] + (ResultOfMultiply[arrayPos] === undefined ? 0 : ResultOfMultiply[arrayPos]);

             if (ResultOfMultiply[arrayPos] > 9) {
                 ResultOfMultiply[arrayPos + 1] = Math.floor(ResultOfMultiply[arrayPos] / 10) + (ResultOfMultiply[arrayPos + 1] === undefined ? 0 : ResultOfMultiply[arrayPos + 1] );
                 ResultOfMultiply[arrayPos] -= Math.floor(ResultOfMultiply[arrayPos] / 10) * 10;
             }
         }

     }

     return ResultOfMultiply.reverse().join("");

 };