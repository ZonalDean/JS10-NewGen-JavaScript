const names = [
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'Jack', lastName: 'Dann' },
    { firstName: 'Joe', lastName: 'Dunne' }
  ];

for (item of names) {
    let {firstName:a, lastName:b} = item;
    console.log(`${a} ${b}`)
}