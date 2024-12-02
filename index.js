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
console.log(`Initial customerName: ${customerName}`); 

upperCaseCustomerName();
console.log(`After upperCaseCustomerName: ${customerName}`); 

setBestCustomer();
console.log(`Initial bestCustomer: ${bestCustomer}`); 

overwriteBestCustomer();
console.log(`After overwriteBestCustomer: ${bestCustomer}`); 

console.log(`Initial leastFavoriteCustomer: ${leastFavoriteCustomer}`);

changeLeastFavoriteCustomer(); 

