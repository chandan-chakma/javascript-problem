// problem 1
/* ১. [ ফাংশন নেম দিতে হবে anaToVori ]: একটা ফাংশন এ প্যারামিটার হিসেবে নিবে আনা (ana)। তারপর সেটাকে ভরি তে কনভার্ট করে কত মান হয় সেই সংখ্যা রিটার্ন করবে। শুধু সংখ্যাটা রিটার্ন করবে। */

function anaToVori(ana) {
    if (typeof ana != "number") {
        return 'please type a number';
    }
    const vori = ana / 16;
    return vori;
}
const convertVori = anaToVori(1);
console.log(convertVori);
