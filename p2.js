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