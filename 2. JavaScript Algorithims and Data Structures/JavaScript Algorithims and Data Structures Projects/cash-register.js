function checkCashRegister(price, cash, cid) {
<<<<<<< HEAD
    
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
=======

    // create a function that multiplies num by 100 to avoid floating points and a function that converts back
    const toPennies = (num) => num * 100;
    const convertBack = (num) => num / 100;

    // amount we owe the customer
    let amountOwed = cash-price;
    // console.log(amountOwed);

    // object to return
    let answer = {
        status: null,
        change: []
    }

    // find the total amount of the cash register
    function checkRegisterTotal(cid) {
        let total = 0;
        for (let i = 0; i < cid.length; i++) {
            total += cid[i][1];
        }
        return total;
    }
    let registerTotal = checkRegisterTotal(cid);
    // console.log(registerTotal * 100);


    // create a reference of currency unit values
    const currency = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];

    
    // loop through the cash in the drawer
    for (let i = cid.length - 1; i >= 0; i--) {

        // create an amount variable we can push into our object to return, depending on whether or not there are availableBills
        let amount = 0;

        // console.log(amountOwed);

        let availableBills = cid[i][1];
        console.log(availableBills);
        console.log(cid[0][1]);

        let currencyUnit = currency[i];
        console.log(currencyUnit);

        console.log(currency[i] * 100)

        console.log(amountOwed > currency[i])
        console.log(amountOwed < cid[i][1])
        console.log(cid[i][0])

        console.log(amountOwed);
        console.log(currencyUnit);

        

        // if the amount we owe the customer is larger than the currency unit, check how many notes/coins are available..
        if (amountOwed >= currencyUnit) {

            

            // if the amountOwed value is the same as the amount in the availableBill, return the cid array. (This only works for this specific use-case currently)
            if (amountOwed == cid[0][1]) {
                answer.status = "CLOSED";
                answer.change = cid;
                return answer;
            }


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
                if (amountOwed == cid[0][1]) {
                    let anotherArr = [];
                    answer.status = "CLOSED";
                    answer.change.push(cid);
                    console.log('we got here lol');
                }
            // if there are no availableBills that we can return the customer, return insufficient funds.
            } 
            else {
                answer.status = "INSUFFICIENT_FUNDS";
                return answer;
            }
        }
    }
    

    // if cash-in-drawer is less than the change due, or if you cannot return the exact change.
    if (toPennies(registerTotal) < toPennies(amountOwed)) {
        answer.status = "INSUFFICIENT_FUNDS";
        return answer;
    } 
    // Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
    // else if (toPennies(registerTotal) == toPennies(amountOwed)) {
    //     answer.status = "CLOSED";
    //     answer.change.push(cid);
    //     return answer;
    // } 
    // Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
    else if (toPennies(registerTotal) > toPennies(amountOwed)) {
        let result = toPennies(registerTotal) - toPennies(amountOwed);
        registerTotal = result;
        answer.status = "OPEN";
        answer.change.push(registerTotal, amountOwed);
        // console.log('my code makes it to here');
        return answer;
    }


  }
  
  checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
>>>>>>> acfdc62e4ba7d16edbdb6168ad1046134ac57463
