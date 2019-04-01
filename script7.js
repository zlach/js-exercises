function coinStar(amount){
    if (amount >= 1){
        let amountString = amount.toString();
        let newAmount = amountString.split('.');
        let newAmountFinal = newAmount[1];
        let newAmountFinalFinal = parseInt(newAmountFinal);
        // return newAmountFinalFinal;
        let quarters = (parseInt(newAmount[0]) * 4);
    } else {
        let newAmountFinalFinal = amount;
        let quarters = 0;
    }
    let quartersNow = quarters + ((newAmountFinalFinal - (newAmountFinalFinal % 25))/25);
    let ten = newAmountFinalFinal % 25;
    let dimes = ten + ((ten - (ten % 10))/10);
    let five = ten % 10;
    let nickels = five + ((five - (five % 5))/5);
    let pennies = five % 5;
    return {'pennies': pennies, 'nickels': nickels, 'dimes': dimes, 'quarters': quartersNow};
}

console.log(coinStar(4.93));