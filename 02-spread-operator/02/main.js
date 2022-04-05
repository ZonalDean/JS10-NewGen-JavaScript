const arr = [1, 2, 3, 4 , 5];

const cloneArray = arr => {
    let copyArr = [...arr];
    copyArr[2] = copyArr[2]**2
    return copyArr
}

console.log(cloneArray(arr))