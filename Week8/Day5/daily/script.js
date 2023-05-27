function isAnagram(str1, str2) {
    str1 = removeWhitespace(str1).toLowerCase();
    str2 = removeWhitespace(str2).toLowerCase();

    return sortString(str1) === sortString(str2);
}

function removeWhitespace(str) {
    let charArray = str.split('');
    charArray = charArray.filter(function(char) {
        return char.trim() !== '';
    });

    return charArray.join('');
}

function sortString(str) {
    let charArray = str.split('');
    charArray.sort();
    return charArray.join('');
}

console.log(isAnagram("Python", "JavaScript")); //false
console.log(isAnagram("School master", "The classroom")); //true