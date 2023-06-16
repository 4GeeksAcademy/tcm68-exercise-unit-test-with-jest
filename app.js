// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
  };
  
  const fromDollarToYen = function(dollarAmount) {
    // Convert the given dollarAmount to Japanese Yen
    let yenAmount = dollarAmount * (oneEuroIs["JPY"] / oneEuroIs["USD"]);
  
    // Return the equivalent amount in Japanese Yen
    return yenAmount;
  };
  
  const fromYenToPound = function(yenAmount) {
    // Convert the given yenAmount to British Pound
    let poundAmount = yenAmount * (oneEuroIs["GBP"] / oneEuroIs["JPY"]);
  
    // Return the equivalent amount in British Pound
    return poundAmount;
  };


// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3), fromEuroToDollar(1), fromDollarToYen(1), fromYenToPound(1))




// we include fromEuroToDollar here as well because it needs to be exported
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }
