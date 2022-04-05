const users = [
    { user: "Name1" },
    { user: "Name2", age: 2 },
    { user: "Name2" },
    { user: "Name3", age: 4 }
  ];

for (item of users) {
    let {user:user, age = 'unknown'} = item
    console.log(`${user} ${age}`)
}