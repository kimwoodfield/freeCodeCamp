function checkCashRegister(price, cash, cid) {
    
    // Amount owed (multiplied by 100)
    let amountOwed = (cash - price) * 100;
    console.log(amountOwed);

    // Denominations (multiplied by 100)
    const denominations = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000];

    // Create the object we will return
    let answer = {
        status: null,
        change: []
    };

    // Loop backwards through the CID array
    for (let i = cid.length - 1; i >= 0; i--) {
        let currentBill = cid[i];
        let availableBills = cid[i][1] * 100;
        let amount = 0;
        let value = denominations[i];

        // While the amount owed is more than the value of the bill AND while the available bill has more than what it is worth, deduct the value of the bill from each one we deduct. Deduct the value of the bill from the amount we owe the customer and add the value of the bill to the amount we will return to the customer.
        while (amountOwed >= value && availableBills >= value) {
            availableBills -= value;
            amountOwed -= value;
            amount += value;
        }
        console.log(availableBills);
        console.log(amountOwed);
        console.log(amount);

        // If there are no available bills then the register is closed.
        if (availableBills == 0) {
            answer.status = "CLOSED";
        }

        // Otherwise, the register is open. 
        else {
            answer.status = "OPEN";
        };

        // If the amount we will return to the customer is more than 0, divide it by 100 to return it to its original value and push it into the object we are returning.
        if (amount > 0) {
            answer.change.push([currentBill[0], amount / 100]);
        } 
    }
    // If the amount we owe is more than 0, it means we've looped through all of our availableBills and can't make up the total, so return insufficient funds.
    if (amountOwed > 0) {
        answer.status = "INSUFFICIENT_FUNDS";
        answer.change = [];
        return answer;
    } 
    // Otherwise, if the status of the object was changed to closed, replace the array in 'change' with the cid array.
    else if (answer.status == "CLOSED") {
        answer.change = cid;
    }
    return answer;


}
  
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);