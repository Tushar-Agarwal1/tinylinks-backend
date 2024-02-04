
const createShortUrl = (c) => {
    const s = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"


    console.log(c);

    let hash = "";

    while (c > 0) {
        const remainder = c % 62;
        hash = s.charAt(remainder) + hash;
        c = Math.floor(c / 62);
    }
    console.log(hash);

    generateRandomBase62String(7 - hash.length)
    function generateRandomBase62String(diff) {

        const base = s.length;



        for (let i = 0; i < diff; i++) {
            const randomIndex = Math.floor(Math.random() * base);
            hash += s.charAt(randomIndex);
        }

    }
    c = c + 1;
    return hash;

};
module.exports = createShortUrl;    