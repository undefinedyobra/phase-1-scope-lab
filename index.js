// Declare a variable in global scope called customerName using the var keyword and assign it the value 'bob'.
var customerName = 'bob';

// Write a function that accesses that global customerName variable, and uppercases it.
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase(); // Access the global variable and update its value.
}

// Write a function that when called, declares a variable called bestCustomer in global scope and assigns it to be 'not bob'.
function setBestCustomer() {
    bestCustomer = 'not bob'; // Avoid using var, let, or const to declare a variable inside the function to make it global.
}

// Write a new function called overwriteBestCustomer() that changes that bestCustomer variable to 'maybe bob'.
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'; // Since bestCustomer is already declared globally, we can directly assign a new value to it.
}

// Declare a constant in global scope called leastFavoriteCustomer and assign it some initial value.
const leastFavoriteCustomer = 'someone';

// Write a function called changeLeastFavoriteCustomer() that attempts to change that constant.
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'new person'; // This will result in an error because you cannot change the value of a constant.
}