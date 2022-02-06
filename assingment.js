// problem 1
// ১. [ ফাংশন নেম দিতে হবে anaToVori ]: একটা ফাংশন এ প্যারামিটার হিসেবে নিবে আনা (ana)। তারপর সেটাকে ভরি তে কনভার্ট করে কত মান হয় সেই সংখ্যা রিটার্ন করবে। শুধু সংখ্যাটা রিটার্ন করবে। 

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
/*২. [ ফাংশন নেম দিতে হবে pandaCost]: তিনটা প্যারামিটার লাগবে। ভিডিও ভালো করে দেখবে। 

১ টি সিঙ্গারা এর দাম – ৭ টাকা

১ টি সমুচা এর দাম – ১০ টাকা 

১ টি জিলাপি এর দাম – ১৫ টাকা 

এখন সে যদি বিভিন্ন সংখ্যার সিঙ্গারা, সমুচা, আর জিলাপি এর অর্ডার দেয় তাহলে টোটাল কত টাকা খরচ হবে হলো সেই সংখ্যা রিটার্ন করতে হবে। */

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
/*৩. [ ফাংশন নেম দিতে হবে picnicBudget]: প্যারামিটার হিসাবে নিবে কয়জন পিকিনিক এ যাবে সেই সংখ্যা। 

যদি ১০০ বা তার কম যায় তাহলে প্রত্যেক এর জন্য খরচ হবে ৫০০০ টাকা করে। 

যদি ১০০ এর বেশি কিন্তু ২০০ এর কম বা সমান যায় তাহলে প্রথম ১০০ জন এর প্রতি জন এর জন্য ৫০০০ টাকা করে দিতে হবে। আর ১০০ এর বেশি (অর্থাৎ ১০১ নম্বর থেকে) যতজন আছে তাদের প্রত্যেক ওই জন্য ৪০০০ টাকা করে দিতে হবে। 

আর যদি ২০০ এর বেশি যায় তাহলে প্রথম ১০০ জন এর প্রতি জন এর জন্য ৫০০০ টাকা করে দিতে হবে। আর ১০০ এর বেশি যতজন আছে তাদের প্রত্যেকের জন্য ৪০০০ টাকা করে দিতে হবে। এর ২০০ এর বেশি (অর্থাৎ ২০১ নম্বর থেকে) যতজন আছে তাদের প্রত্যেক এর জন্য ৩০০০ টাকা করে দিতে হবে।  



এখন আমি একটা প্যারামিটার দিবো। সেটা যেকোন সংখ্যা হতে পারে। সেই সংখ্যা অনুসারে তুমি ফাংশন থেকে রিটার্ন দিবে কতটাকা পিকনিক এর বাজেট হতে হবে। ইনপুট প্যারামিটার সংখ্যাটা ১০০ এর কম হতে পারে। ১০০ থেকে ২০০ এর মধ্যে হতে পারে। আবার ২০০ এর বেশিও হতে পারে। তাই সব কেইস ভালো করে টেস্ট করে নিবে। */

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
/*৪. [ ফাংশন নেম দিতে হবে oddFriend]: বিস্তারিত ভিডিওতে দেখো। */

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


