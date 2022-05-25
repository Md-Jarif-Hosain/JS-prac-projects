
// Completing task in none=-blocking way with callback function.
const takeOrder = (customer, callback) => {
    console.log(`take order from ${customer}`);
    callback(customer);
}

const processOrder = (customer, callback) => {
    console.log(`processing order for ${customer}`);

    setTimeout(() => {
        console.log(`cooking complete`);
        console.log(`order processed for ${customer}`);
        callback(customer);
    }, 3000);

};

const complete = (customer) => {
    console.log(`complete order for ${customer}`);
};


// call the function with callback 
takeOrder('customer 1', (customer) => {
    processOrder(customer, (customer) => {
        complete(customer);
    })
});