// ARRAY METHOD
// var animal = "lion"
// var animal = ["sheep", "goat", "dog", "cat"];

// animal.push(animal);

// alert(animal.pop())

// var animals = ["sheep", "goat", "dog", "cat"];

// animals.forEach(function (animal){
//     alert(`${animal} can also speak?`);
// });

// var animals = ["sheep", "goat", "dog", "cat"];

// animals.forEach((animal) => alert(`${animal} can also speak?`));


// let users = [
//     {id: 1, name: "John"},
//     {id: 2, name: "Peter"},
//     {id: 3, name: "Mary"}
// ];
// let user = users.find(item => item.id == 3);
// alert(user.name); // John

// let users = [
//     {id: 1, name: "John",  age: 18},
//     {id: 2, name: "Peter", age: 44},
//     {id: 3, name: "Mary",  age: 78},
// ];
// let underAge = users.filter(function (user){
//     return user.age < 30;
// });
// alert(underAge.name); 
// alert(users);

// let users = [
//     { id: 1, name: "John",  age: 18 },
//     { id: 2, name: "Peter", age: 44 },
//     { id: 3, name: "Mary",  age: 78 },
// ];

// let someUsers = users.filter((item) => item.id < 3);

//     alert(someUsers[0].name);

// let arr = ["Bilbo", "Gandalf", "Nazgul", "Mart"]

// let lengths = arr.map(item => item .length);

// alert(lengths);

let arr2 = [5, 7, 6, 4]

let calculate = arr2.map(item => item * 6);

console.log(calculate);

// let names = 'Bilbo, Gandalf, Nazgul, Mart',;

// let arr = names.split(', ');

// arr.forEach((name) => {
//     alert(`A message to ${name}.`);
// })

// let arr2 = ['Bilbo', 'Gandalf', 'Nazgul', 'Mart'];
// // let str = arr2.join(',');
// // let combine = arr2.join('')
// alert(str);
// alert(combine);

