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

        // Basically, as long as what we owe is greater than the value of the current bill and while there are bills available to take, reduce how many available bills we have by what they are worth, decrease what we owe by the same value and add the value of the bill to the amount we can return.
        while (amountOwed >= value && availableBills >= value) {
            availableBills -= value;
            amountOwed -= value;
            amount += value;
        }
        console.log(availableBills);
        console.log(amountOwed);
        console.log(amount);

        // If there are no available bills, change the register to closed.
        if (availableBills == 0) {
            answer.status = "CLOSED";
        }

        // Otherwise, the register is open. 
        else {
            answer.status = "OPEN";
        };

<<<<<<< HEAD
            // if there are availableBills, deduct them from the availableBills and add them to the amount we will give back to the customer
            if (availableBills >= amountOwed) {
                // while the amountOwed and the amount we have to return the customer are different, keep taking money out until the customer has the right amount to be returned.
                while (amount !== amountOwed) {
                    availableBills = availableBills - currencyUnit;
                    amount = amount + currencyUnit;
                        // if the value stored in the amount variable is the same as what we owed the customer, append that to the object we send back.
                        if(amount == amountOwed) {
                            let returnArray = [];
                            answer.status = "OPEN";
                            returnArray.push(cid[i][0], amount);
                            answer.change.push(returnArray);
                            return answer;
                        }
                }
                // if the amount owed is the same as the value stored in that currency unit's bills, then push the original cid array back into our returning object.
                if (amountOwed == cid[0][1]) {
                    let anotherArr = [];
                    answer.status = "CLOSED";
                    answer.change.push(cid);
                    console.log('we got here lol');
                }
            } 
            // if there are no availableBills that we can return the customer, return insufficient funds.
            else {
                answer.status = "INSUFFICIENT_FUNDS";
                return answer;
            }
=======
        // If the amount we will return to the customer is more than 0 during the current iteration, add the value of the current bill that we can return to the running total of that bill we will be returning.
        if (amount > 0) {
            answer.change.push([currentBill[0], amount / 100]);
>>>>>>> 605cfd42bae569bf20f64c49b8e92e77f0a9bd27
        }
    }
    // If the amount we owe is more than 0, it means we've looped through all of our availableBills and can't make up the total, so return insufficient funds.
    if (amountOwed > 0) {
        answer.status = "INSUFFICIENT_FUNDS";
        answer.change = [];
        return answer;
    }
    // Otherwise, if the status of the object was changed to closed but what we owe equals 0 it means that we had just enough change in the register to return to the customer so return the cid array.
    else if (answer.status == "CLOSED") {
        answer.change = cid;
    }
    return answer;


}

checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
]);