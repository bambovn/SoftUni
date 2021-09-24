function solve() {
    const button = document.getElementById('searchBtn')
    button.addEventListener('click', search)

    function search() {

        const input = document.getElementById('searchField')
        let inputText = input.value.toLocaleLowerCase()

        let tableElements = Array.from(document.querySelectorAll('tbody tr'))


        tableElements.forEach((el) => {
            let text = el.textContent.toLocaleLowerCase()
            if (text.includes(inputText)) {
                el.classList.add('select')
            } else {
                el.classList.remove('select')
            }
        })
    }
}