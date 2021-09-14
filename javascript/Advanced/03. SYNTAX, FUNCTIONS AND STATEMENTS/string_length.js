/**
 * 
 * @param {string} first_word 
 * @param {string} second_word 
 * @param {string} third_word 
 */

function StringLength(first_word, second_word, third_word) {

    let sum_strings_length = first_word.length + second_word.length + third_word.length
    let word_averidge = Math.floor(sum_strings_length / 3)

    console.log(sum_strings_length)
    console.log(word_averidge)

}

StringLength('chocolate', 'ice cream', 'cake')
StringLength('pasta', '5', '22.3')
