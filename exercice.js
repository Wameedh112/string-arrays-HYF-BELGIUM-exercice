// 1. Strings!

// Consider the following string:

// let myString = "hello,this,is,a,difficult,to,read,sentence";
// 1.1 Add the string to your file and log it.
// 1.2 Log the length of myString.
// 1.3 The commas make that the sentence is quite hard to read. Find a way to remove the commas from the string and replace them with spaces.
// 1.4 Log myString to see if you succeeded.

// let myString = "hello,this,is,a,difficult,to,read,sentence";

// console.log(myString.replace(/,/g ," "));

// 2. Arrays!

// Consider the following array:

// let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
// 2.1 Add a statement that adds Mauro's favorite animal 'turtle' to the existing array.
// 2.2 Log your new array!
// 2.3 Now add Jim's favorite animal to the array, it's 'meerkat', but make sure it will be placed after 'blowfish' and before 'capricorn'.
// 2.4 Write a console.log statement that explains in words you think the new value of the array is.
// 2.5 Log your new array!
// 2.6 Log the length of the array, add a message: 'The array has a length of: ' (here you should show the length of the array).
// 2.7 Jason does not like 'giraffe', delete this animal from the array.
// 2.8 Again log your new array.
// 2.9 Now if unlike Jim, you don't like 'meerkat' and you want to delete it from the array, but you don't know the position or the index of the item in the array, how can you find it?
// 2.10 Log the index of 'meerkat'. Add a message so it says: 'The item you are looking for is at index: ' (here you should show the index of the item).

let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];

favoriteAnimals.push("turtle");

console.log(favoriteAnimals);

favoriteAnimals[1] = "meerkat";

console.log(favoriteAnimals);
console.log(`this array (favoriteAnimals) of ${favoriteAnimals.length} is awesone`);

console.log("I just changed the data inside the array by adding with array methods new data to my array");

favoriteAnimals.splice(2, 1);
console.log(favoriteAnimals);

console.log("the index of meerkat in favorite animals is " + favoriteAnimals.indexOf("meerkat"));

//starting to work on the second excercise 
//forked Eduardo's repo
//made my own branch
//homework ref. https://github.com/HackYourFuture/JavaScript1/blob/master/Week3/MAKEME.md
// More JavaScript 

//1. Create a function that takes 3 arguments and returns the sum of the these arguments.
function add(first, second, third) {
    return first+second+third;
}
var sum = add(1, 2, 3);
console.log(sum);

//2. Create a function named colorCar that receives a color, and prints out, 'a red car' for example.
function colorCar(color) {
    return color;
}
var car = colorCar("'a red car'");
console.log(car);

//3. Create an object and a function that takes the object as a parameter and prints out all of its properties and values.
function fun(name, age) {
    return ("My name is " + name + " and i am " + age);
}
var me = fun("Mahmoud", 28);
console.log(me);

//4. Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. And prints 'a blue motorbike' for example when called as vehicleType("blue", 2)
function vehicleType(blue, M, C) {
    return (blue + M)
}
var vehicles = vehicleType("a blue", " Motorbike", " Car");
console.log(vehicles);

//5. Can you write the following without the if statement, but with just as a single line with console.log(...);?
console.log(3 === 3 ? "yes" : "no");

//6. Create a function called vehicle, like before, but takes another parameter called age, so that vehicle("blue", 1, 5) prints 'a blue used car'
function vehicle(blue, M, C, age) {
    return (blue + age + C)
}
var transPortation = vehicle("a blue", " Motorbike", " Car", " used");
console.log(transPortation);

//7. Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.
let array = ["motorbike", "car", "caravan", "bike", "bus"]
console.log(array[2]); //8. How do you get the third element from that list?

//9. Change the function vehicle to use the list of question 7. So that vehicle("green", 3, 1) prints "a green new bike".



