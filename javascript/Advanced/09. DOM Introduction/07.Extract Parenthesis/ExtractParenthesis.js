function extract(content) {

    text = document.getElementById(content).textContent;

    const pattern = /\((.+?)\)/g;
    let result = ''
    let match = pattern.exec(text);
    while (match != null) {
        result += match[1]
        result += '; '
        let match = pattern.exec(text);

    }

    return result


}