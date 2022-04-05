const removeRandom = (...args) => {
    // taken from Firefox MDN.
        // Forgot how it works? Search in StackOverflow
        min = Math.ceil(0);
        max = Math.floor(args.length);
        random = Math.floor(Math.random() * (max - min + 1)) + min;

    // console.log(random)
    args.splice(random,1)
    return args
}

console.log(removeRandom(1,2,3,4,5,6,7,8,9,10,11,12,13,15,16,18))