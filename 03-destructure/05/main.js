let planetFacts = {
    numPlanets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
  };
  let { numPlanets, ...discoveryYears } = planetFacts;
  console.log(discoveryYears); // * {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}
  // when taking ...args will result in array ALWAYS 