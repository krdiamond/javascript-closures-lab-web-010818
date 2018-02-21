function bumpCounter() {
  let counter = 0;

  function addBump() {
    counter++;
  }

  function getBumps() {
    return counter;
  }

  return {
    addBump,
    getBumps,
  };
}


//1.) Create a parent function that has access to a counter variable
//      This variable will be passed to the closure functions
//      This variable will not be accessible outside of the function

//2.) Create this variable (let counter = 0) inside the function
//      This will get passed to all the closure functions

//3.) Add closure functions inside the parent function
//      addBumps will take in the counter and add 1, not returning anything
//      getBumps will only return the counter

//4.) return both functions so that you can use these functions

//5.) To call these methods in the console
//      Set the function to a variable -->   const x = bumpCounter()
//      call the inside functions --> x.addBump() to add bumps, x.getBumps() to see total


function createAnimal(animalType){

  return function(deadlyDevice){
    return {animalType, deadlyDevice};
  }
}

var sharkCreator = createAnimal('Shark');
var sharkWithFrickinLaserbeam =  sharkCreator('Laserbeam');
var sharkWithFrickinCannon = sharkCreator('Cannon');

//1.) Create a parent function that accepts an argument of animalType

//2.) Create a function that will be returned, this function is nameless, takes in argument

//3.) This nameless function returns the animalType and the deadlDevice

//4.) To call these methods in the console
//      Set the function to a variable that takes in a type of animal
//      Put a deadlyDevice through to the variable to create the object

//5.) THE DIFFERENCE BETWEEN THE QUESTIONS
//    1.) The first question says the function names explicitely
//         They both do different things and then they are returned
//    2.) The second question says the function implicitely and returns it immediately
//        Also returning the result of that implict function
//        call it
