person = {
    firstName: 'Dean',
    lastName: 'Huber',
    age: 7
}

const messageCheckAge = obj => {
    let {firstName, lastName, age} = {...obj}
    if (age < 18) return 'go away you too young'
    return `Welcome ${firstName} ${lastName}!`
}

console.log(messageCheckAge(person))