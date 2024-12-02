// Step 1: Global variable declaration
var customerName = 'bob';

// Step 2: Uppercasing
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// Step 3: Function bestCustomer
function setBestCustomer() {
    bestCustomer = 'not bob'; 
}

// Step 4: Overwriting bestCustomer
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

// Step 5: Constant declaration and trying to change it
const leastFavoriteCustomer = 'number one';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'number three'; 
}

// Function calls
console.log(customerName); 

upperCaseCustomerName(); 
console.log(customerName); 

setBestCustomer(); 
console.log(bestCustomer); 

overwriteBestCustomer(); 
console.log(bestCustomer); 

console.log(leastFavoriteCustomer); 

changeLeastFavoriteCustomer(); 

