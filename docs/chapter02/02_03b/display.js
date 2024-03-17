/*
 * This program will simulate a deposit to a bank account.
 * It does the following:
 *   - Prompt the customer for the current balance
 *     (and convert to float).
 *   - Prompt the customer for the amount to deposit
 *     (and convert to float).
 *   - If the amount is greater than or equal to 10,000,
 *     tell the customer
 *       "Funds may be on hold for three days."
 *   - Add the deposit amount to the balance.
 *   - Report the updated balance to the customer.
 */

let balance = parseFloat(prompt("Input current balance: "));
let amount = parseFloat(prompt("Input amount for deposit: "));

if(amount >= 10000) {
	console.log("Funds may be on hold for three days");
}

balance += amount;
console.log("Updated balance is: " + balance);