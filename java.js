// 1. Strings!
// Strings 1.1
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);


// Strings 1.2
console.log(myString.length);

// Strings 1.3-1.4
function replaceCommasWithSpaces(myString) {
    var replace = myString.replace(/,/g ," ");
    return replace;
}
console.log(replaceCommasWithSpaces(myString));

// 2. Arrays!
let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];


// 2. Arrays 2.1 2.2
/// favoriteAnimals.push('turtle');
// console.log(favoriteAnimals);
function addNewAnimal() {
    favoriteAnimals.push('turtle');
    return favoriteAnimals;
}
console.log(addNewAnimal());


// 2. Arrays 2.3
// favoriteAnimals.splice(1, 0, 'meerkat');
// console.log(favoriteAnimals);
function addNewAnimalJim() {
    favoriteAnimals.splice(1, 0, 'meerkat');
    return favoriteAnimals;
}
console.log("The new value of array is : " +addNewAnimalJim());



console.log('The array has a length of: ' + favoriteAnimals.length); 


// https://www.w3schools.com/js/js_array_methods.asp
function delAnimalJason() {
    favoriteAnimals.splice(3, 1);
    return favoriteAnimals;
}
console.log(delAnimalJason());



// 2. Arrays 2.9-2.10
// https://stackoverflow.com/questions/5767325/how-do-i-remove-a-particular-element-from-an-array-in-javascript/5767357#5767357
var index = favoriteAnimals.indexOf('meerkat');
if(-1 !== index) {
    favoriteAnimals.splice(index, 1);
}
console.log('The item you are looking for is at index: ' + favoriteAnimals);



// More JavaScript 1
let x=1 , y=4 , z=6;
function sum(x,y,z){
    var w=x+y+z;
    return w;
}
console.log(sum(x,y,z));


// More JavaScript 2
let color="red";
function colorCar(color) {
 return color;
}
console.log('a ' + colorCar(color) +' car');


// More JavaScript 3
var car = {color:"red" , model:"2006" , type:"opel"};
function printObject(car){
    return car;
}
console.log(car);


// More JavaScript 4
var colorOf="blue";
var code=1;

function printObject(colorOf,code){
    if(code===1){
        return('a ' + colorOf +' car');
    }
else return('a ' + colorOf +' motorbike');  
};
console.log(printObject(colorOf,code));

// More JavaScript 5
3===3 ? console.log('yes') : console.log('no');

// More JavaScript 6
var code=1;
var age = " use ";
function  vehicle(colorOf,code, age){
    if(code===1){
        return('a ' + colorOf +age+'car');
    }
else return('a ' + colorOf +'can not using car');  
};
console.log( vehicle(colorOf,code, age));

// More JavaScript 7
let vehicles = ["motorbike", "caravan", "bike"];
// More JavaScript 8
console.log(vehicles [2]);

// More JavaScript 9
var code=3;
var colorg = " green ";
function  vehicle(colorg,code){
    if(code===3){
        return('a ' + colorg +'new bike');
    }
else return('a ' + colorOf +' new bike');  
};
console.log(vehicle(colorg,code));

// More JavaScript 10
// https://www.w3schools.com/js/tryit.asp?filename=tryjs_loop_for
var advertisement = ["Amazing"," Joe's"," Garage," ," we service cars," ," motorbikes," , " caravans and bikes."];
var text = "";
var i;
    for 
    (i = 0 ; i < advertisement.length; i++){
    text += advertisement[i];
}
console.log(text);

// More JavaScript 11
function addMoreVehicle() {
    advertisement.splice(4, 0, 'opel,');
    return advertisement;
}
console.log( addMoreVehicle());


// More JavaScript 12
function addEmptyVehicle() {
    advertisement.splice(5, 0, '');
    return advertisement;
}
console.log(addEmptyVehicle());

// More JavaScript 13-14
let teachers = {Nick:'html' , Tiago:'cli'};

// More JavaScript 15

let xx = [1,2,3,6,7];
    let yy = [1,2,3,7,9,0];
    let zz = yy;

    xx==yy;
console.log(zz);
console.log(xx);
xx === yy;

// More JavaScript 16
let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2;
console.log(o3);

// More JavaScript 17
let bar = 42;
console.log(typeof typeof bar);
