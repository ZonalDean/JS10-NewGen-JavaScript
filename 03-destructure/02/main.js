let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    'Raindrops on roses',
    'whiskers on kittens',
    'Bright copper kettles',
    'warm woolen mittens',
  ];
  console.log(raindrops); // * Raindrops on roses
  console.log(whiskers); // ** whiskers on kittens
  console.log(aFewOfMyFavoriteThings); // *** {Bright copper kettles', 'warm woolen mittens'}

  // when deconstruct if ...args then will construct an array. Like when taking ...args into a function