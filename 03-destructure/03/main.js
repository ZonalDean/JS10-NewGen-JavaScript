let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
let { numPlanets, yearNeptuneDiscovered } = facts;
console.log(numPlanets); // * 8
console.log(yearNeptuneDiscovered); // ** 1864
// when key = deconstruct then will only select the value like obj.key = value != key: value