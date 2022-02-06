// problem 1
function anaToVori(ana) {
    if (typeof ana != "number") {
        return 'please type a number';
    }
    const vori = ana / 16;
    return vori;
}
const convertVori = anaToVori(1);
console.log(convertVori);

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

// problem 3
function picnicBudget(goPicnic) {
    if (typeof goPicnic != 'number') {
        return 'please type a numver';
    }
    if (goPicnic < 0) {
        return 'please type a possitive number'
    }
    if (goPicnic <= 100) {
        let budgetOfFirst100 = goPicnic * 5000;
        let totalBudget = budgetOfFirst100;
        return totalBudget;
    }
    else if (goPicnic <= 200) {
        let budgetOfFirst100 = 100 * 5000;
        let budgetOfSecond100 = (goPicnic - 100) * 4000;
        let totalBudget = budgetOfFirst100 + budgetOfSecond100;
        return totalBudget;
    }
    else if (goPicnic > 200) {
        let budgetOfFirst100 = 100 * 5000;
        let budgetOfSecond100 = 100 * 4000;
        let budgetOfThird100 = (goPicnic - 200) * 3000;
        let totalBudget = budgetOfFirst100 + budgetOfSecond100 + budgetOfThird100;
        return totalBudget;
    }

}
const totalCost = picnicBudget(201);
console.log(totalCost);

// problem 4
friends = ['rahi', 'karim', 'sallu', 'akash', 'salim']
function oddFriend(friends) {
    if (typeof friends == "Object") {
        return 'please write an array'
    }
    for (const friend of friends) {
        if (friend.length % 2 != 0) {
            return friend;
        }
    }
}
const friendOdd = oddFriend(friends);
console.log(friendOdd);


