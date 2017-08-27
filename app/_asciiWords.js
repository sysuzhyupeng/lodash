var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

/**
 * 使用正则来分割字符串的ASCII字符
 */
function asciiWords(string) {
    return string.match(reAsciiWord) || [];
}

module.exports = asciiWords;