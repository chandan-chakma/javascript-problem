// problem 2
function pandaCost(singraQuantity, samosoQuantity, jilapiQuantity) {
    if (singraQuantity <= 0 && samosoQuantity <= 0 && jilapiQuantity <= 0) {
        return 'please type a possitive number'
    }
    const perSingraPrice = 7;
    const perSamosaPrice = 10;
    const perJilapiPrice = 15;

    const totalSingraPrice = perSingraPrice * singraQuantity;
    const totalSamosaPrice = perSamosaPrice * samosoQuantity;
    const totalJilapiPrice = perJilapiPrice * jilapiQuantity;

    totalPrice = totalSingraPrice + totalSamosaPrice + totalJilapiPrice;

    return totalPrice;
}
const totalCost = pandaCost(10, 2, 5);
console.log(totalCost);