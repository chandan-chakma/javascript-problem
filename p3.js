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