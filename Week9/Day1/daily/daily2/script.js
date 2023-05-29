function checkIfAllTrue(...parameters) {
    return parameters.every(Boolean)
}

console.log(checkIfAllTrue(true, true, true));

console.log(checkIfAllTrue(true, false, true));

console.log(checkIfAllTrue(5, 4, 3, 2, 1, 0));