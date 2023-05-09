
const sentence = (str) => {
    const result = {};
        str.split('').forEach((letter) => {
        result [letter] = result [letter] ? ++result[letter] : 1;
    }) ;

        return result;
}


console.log(sentence("When we wHere Young By Adele"));