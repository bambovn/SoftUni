function playingCards(face, suit) {

    const faces = ['2', '3', '4', '5', '6'
        , '7', '8', '9', '10'
        , 'J', 'Q', 'K', 'A']

    const suits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663',
    }

    if (faces.includes(face) == false) {
        throw new Error('Invalid suit' + face)
    }

    if (Object.keys(suits).includes(suit) == false) {
        throw new Error('Invalid suit' + suit)
    }


    return {
        face,
        suit: suits[suit],
        toString() {
            return this.face + this.suit
        }
    }
}



console.log(playingCards('A', 'S').toString())   // A♠
console.log(playingCards('10', 'H').toString())  // 10♥
console.log(playingCards('1', 'C').toString())   // Error
console.log(playingCards('1', 'Y').toString())   // Error