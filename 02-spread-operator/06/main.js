const cloneArray = (...args) => {
    let arrCopy = [...args];
    return arrCopy
}

arrOrginal = [1, 2, 3, 4, 5, 6, 7, 8]

console.log(cloneArray(arrOrginal))
console.log(arrOrginal === cloneArray(arrOrginal)) // check if copy or still ref