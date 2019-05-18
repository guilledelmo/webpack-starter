// Logs out the two arguments passed
function myFunc(element1, element2) {
    console.log(element1, element2);
    console.log(`First: ${element1} and Second: ${element2}`);
}

// Object with basic info and this keyword inside a nest func as an object element
test_object = {
    name: "Delmo",
    func: function() {
        return this.name;
    },
    additional_info: "learning JS"
};

// Playing around wih arays and spreading
let myArray = ["This", "is", "a", "test"];
myFunc(...myArray);
test_object.func();
console.log(test_object.name, "is", test_object.additional_info);

// Calling the function in test_object with different names using call
let newName = {name: "Someone else"};
console.log(test_object.func.call(newName), "is", test_object.additional_info);

// Make a copy of the func in test_object with different name using bind and then call it
let newInfo = {name: "Sergio"};
let copyOfFunc = test_object.func.bind(newInfo);
console.log(copyOfFunc(), "is", test_object.additional_info);

// Testing arrow functions
// Takes parameter and returns 2 * parameter + 18
let firstArrowFunc = (parameter) => 2 * parameter + 18;
console.log(firstArrowFunc(1));
// Always returns 2 and has no arguments
let secArrowFunc = () => 2;
console.log(secArrowFunc());
console.log(typeof(firstArrowFunc));
// Multiline arrow func
let thirdArrowFunc = (a, b) => {
    return a + b;
};
console.log(thirdArrowFunc(2, 2));

// Construction functions and prototypes
// Example wihtout prototyping
function Car(id) {
    this.carId = id;
    this.start = function() {
        console.log("Car " + this.carId + " started");
    };
}
carOne = new Car(148);
console.log("Car ID:", carOne.carId);
carOne.start();
// Car ID: 148
// The problem with this is that we can create thousands of copies of the start func (not worth it)
// Example with prototyping
function Vehicle(id) {
    this.carId = id;
}
Vehicle.prototype.start = function() {
    console.log("Car " + this.carId + " started");
};
carTwo = new Vehicle(256);
carTwo.start();

// Now we will take some object and array and pass them to JSON
let firstObjectforJson = {
    name: "Delmo",
    test: 44,
    type: "Person"
};
console.log(JSON.stringify(firstObjectforJson));
let firstArrayforJson = ["food", "milk", 42, 58];
console.log(JSON.stringify(firstArrayforJson));

// Different ways of iterating through arrays
let testArr = [
    {name: "First Car", id: 456, style: "convertible"},
    {name: "Second Car", id: 834, style: "sedan"},
    {name: "Third Car", id: 690, style: "pickup"}
];
// Method 1: forEach
testArr.forEach( car => console.log(car.name) ); // Outputs names of cars
// Method 2: filter
let convertibles = testArr.filter( car => car.style === "convertible");
console.log(convertibles); // Only shows convertibles
// Method 3: every
let testEverythingCarId = testArr.every(car => car.id > 0);
console.log(testEverythingCarId); // Checks if every element has an id
// Method 4: find
console.log( testArr.find(car => car.id > 500) ); // Output first car with id higher than 500

// Creation of a class
class Cars {
    constructor(id){
        this.id = id;
    }
    identify() {
        return `Car ID: ${this.id}`;
    }
}
let pickup_truck = new Cars(345);
console.log(pickup_truck.id);
console.log(pickup_truck.identify());

// Inheritance of classes
class Vehicles extends Cars {
    constructor() {
        super(); //This refers back up to the Cars class
    }
    start() {
        console.log("Car has been started");
    }
}
let newVehicle = new Vehicles(123);
console.log(newVehicle.id);
newVehicle.start();

// Try and catch for error handling + finally
try {
    console.log(helloVar); // Variable helloVar does not exist
    throw new Error("this is my error");
}
catch(error) {
    console.log("error:" + error);
}
finally {
    console.log("This always executes.");
}
