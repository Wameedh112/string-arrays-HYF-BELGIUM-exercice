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

//1. 

