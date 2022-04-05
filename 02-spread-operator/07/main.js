const cloneObject = (...args) => {
    let objCopy = { ...args };
    return objCopy
}

objOrginal = {
    0: 1,
    1: 2,
    2: 3,
    3: 4,
    4: 5,
    5: 6,
    6: 7,
    7: 8
}

console.log(cloneObject(objOrginal))
console.log(objOrginal === cloneObject(objOrginal)) // check if copy or still ref