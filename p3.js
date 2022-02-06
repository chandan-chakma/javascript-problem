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