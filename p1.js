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
