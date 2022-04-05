let salaries = {
    John: 100,
    Pete: 300,
    Mary: 250
  };

const topSalary = obj => {
    if (Object.keys(obj).length === 0) {return null}
    else {
        let {...n} = obj
        

            // below is for max value, but doesn't return key
        const values = Object.values(n)
        const max = Math.max(...values)
        return max
    }
}

console.log(topSalary(salaries))
console.log(salaries)