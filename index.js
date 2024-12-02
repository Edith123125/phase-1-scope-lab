// Step 1: Global variable declaration
var customerName = 'bob';  

// Step 2: Uppercasing function
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase(); 
}

// Step 3: Declare bestCustomer globally
var bestCustomer;  

function setBestCustomer() {
    bestCustomer = 'not bob';  
}
// Step 4: Overwriting bestCustomer
function overwriteBestCustomer(){
    bestCustomer = 'maybe bob'
    console.log(bestCustomer)
}
// Step 5: Constant declaration and trying to change it
const leastFavoriteCustomer = 'Edith'
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer='Kobia'
}