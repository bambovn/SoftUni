/**
 * 
 * @param {String} result 
 */
function givenDelimiter(list, delimiter) {
    let result = list.join()
    console.log(result.replace(/,/g, delimiter))

}

givenDelimiter(['One',
    'Two',
    'Three',
    'Four',
    'Five'],
    '-'
)
givenDelimiter(['How about no?',
    'I',
    'will',
    'not',
    'do',
    'it!'],
    '_'
)