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
