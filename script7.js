// function coinStar(amount){
//     if (amount >= 1){
//         var amountString = amount.toString();
//         var newAmount = amountString.split('.');
//         var newAmountFinal = newAmount[1];
//         var newAmountFinalFinal = parseInt(newAmountFinal);
//         // return newAmountFinalFinal;
//         var quarters = (parseInt(newAmount[0]) * 4);
//     } else {
//         var newAmountFinalFinal = amount;
//         var quarters = 0;
//     }
//     var quartersNow = quarters + ((newAmountFinalFinal - (newAmountFinalFinal % 25))/25);
//     var ten = newAmountFinalFinal % 25;
//     var dimes = ten + ((ten - (ten % 10))/10);
//     var five = ten % 10;
//     var nickels = five + ((five - (five % 5))/5);
//     var pennies = five % 5;
//     return {'pennies': pennies, 'nickels': nickels, 'dimes': dimes, 'quarters': quartersNow};
// }

console.log(coinStar(.46));

function coinStar(x){
    var y = 100 * x;
    let quarters = Math.floor(y/25);
    var remainder = y % 25;
    let dimes = Math.floor(remainder/10);
    var remainder = remainder % 10;
    let nickels = Math.floor(remainder/5);
    var remainder = remainder % 5;
    let pennies = remainder;
    return {'pennies': pennies, 'nickels': nickels, 'dimes': dimes, 'quarters': quarters};
}
