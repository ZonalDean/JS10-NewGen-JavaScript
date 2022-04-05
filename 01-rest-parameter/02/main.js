const filterOutOdds = (...args) => {
    let arr = []
    for (integer of args) {
        if (integer % 2 === 1) {
            arr.push(integer)
        }
    } 
    return result = Object.assign({}, [...arr])
}

console.log(filterOutOdds(1,2,3,4,5,6,7))