const mergeObjects = (...objs) => {
    let result = {};
    for (obj of objs) {
        Object.assign(result,...objs)
    }
    return result
}

obj1 = {
    name: 'dean',
    number: '0836915080'
}

obj2 = {
    name: 'john',
    address: '444 M.3'
}
