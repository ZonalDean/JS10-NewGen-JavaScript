const multi = (...arg) => {
    let result = 0;
    for (n of arg) {
        if (result === 0) {
            result += Number(n)
        } else {
            result *= n
        }
    }
    return result
}

console.log(multi(1, 2, 3, 4, 5))