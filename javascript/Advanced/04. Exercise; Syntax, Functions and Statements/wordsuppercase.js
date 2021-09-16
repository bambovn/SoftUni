/**
 * 
 * @param {String} user_input 
 */

function converter(user_input) {
    let upperCase = user_input.toUpperCase();
    let regex = /[^\W]+/g;
    let words = upperCase.match(regex);
    console.log(words.join(', '))
}

converter('Hi, how are you?')