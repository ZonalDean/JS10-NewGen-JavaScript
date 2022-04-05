const printer = (fName, sName, ...args) => {
    let result = `${fName} ${sName} has ${args.length} hobbies`
    return console.log(result)
}



printer('Dean', 'Chang', 'Games', 'Sking')