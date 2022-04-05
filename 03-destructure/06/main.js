function getUserData({ firstName, favoriteColor = 'green' }) {
    return `Your name is ${firstName} and you like ${favoriteColor}`;
  }
  
  console.log(getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' })); 
  // * Your name is Alejandro and you like purple
  console.log(getUserData({ firstName: 'Melissa' })); 
  // ** Your name is Alejandro and you like green <- becasue green is the default
  console.log(getUserData({})); 
  // *** Your name is undefined and you like green <- becasue name is litterally undefined which is a string