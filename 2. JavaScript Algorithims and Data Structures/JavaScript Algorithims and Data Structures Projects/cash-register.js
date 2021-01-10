// CASH REGISTER PROJECT

function checkCashRegister(price, cash, cid) {

    // How much we owe the customer.
    let whatWeOwe = (cash - price) * 100;

    // Denominations / Currency unit value
    const denominations = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000];

    // Object to return
    let obj = {status: null,change: []}

    // Loop backwards through the cid array from highest to lowest value.
    for (let i = cid.length - 1; i >= 0; i--) {
        let amount = 0;
        let availableBills = cid[i][1] * 100;
        let value = denominations[i];

        // While what we owe is more than the value of the current bill and while the current bill has bills available - remove a bill from the till, deduct that bill's value from what we owe the customer and add it to the amount we will return the customer
        while (whatWeOwe >= value && availableBills >= value) {
            availableBills -= value;
            whatWeOwe -= value;
            amount += value;
        }
        // If the amount to return is more than zero, add the bill value to a running total of what we can return of that bill and divide by 100 to return to its original value.
        if (amount > 0) {
            obj.change.push([cid[i][0], amount / 100]);
        };
        // If there are no bills available, the register is closed.
        if (availableBills == 0) {
            obj.status = "CLOSED";
        } 
        // Otherwise the register is open.
        else {
            obj.status = "OPEN";
        }
    }
    // If we looped through the entire cid array and what we owe is above 0 then it means we could not return the customer their full amount, so return INSUFFICIENT_FUNDS and an empty array.
    if (whatWeOwe > 0) {
        obj.status = "INSUFFICIENT_FUNDS";
        obj.change = [];
        return obj;
    } 
    // Otherwise if what we owe IS zero and the register is closed, it means we found the exact amount in our register so return the cid array.
    else if (obj.status == "CLOSED") {
        obj.change = cid;
    }
    return obj;
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);