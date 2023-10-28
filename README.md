# ATM Machine Code Explanation

This README provides a step-by-step explanation of the provided TypeScript code for an ATM machine simulation using the "inquirer" library.

## Code Overview

The code simulates an ATM machine where a user can perform operations such as checking their balance, making withdrawals, or accessing their account information.

## Getting Started

To run this code, follow these steps:

1. Make sure clone the Git Repository

2. Change into the project directory:
   ```bash
   cd atm-typescript-node-project
   ```

3. Install Dependencies:
   ```bash
   npm install
   ```

## Code Structure

The code consists of the following major components:

1. Importing Dependencies: The code imports the necessary dependencies, with a focus on the "inquirer" library for handling user input.

2. User Input Interface: An interface named "ansType" is defined to specify the expected structure of user answers.

3. User Input Prompts: The code utilizes the "inquirer" library to prompt the user for various pieces of information, such as UserID, UserPin, accountType, transactionType, and amount. The prompts allow the user to interact with the ATM.

4. Balance Simulation: After gathering user input, the code simulates the user's account balance using a random number between 0 and 10,000,000. It then checks whether the entered amount for transactions is within the available balance.

5. Displaying Results: The code outputs the balance and transaction results to the console, informing the user of their current balance or an "Insufficient balance" message.

## Code Execution

Here's how the code executes step by step:

1. The user is prompted to enter their UserID and UserPin to identify themselves.

2. The user is asked to select their account type, which can be "Current" or "Saving."

3. Based on the selected account type, the user is prompted to choose a transaction type, which can be "Fast Cash" or "Withdraw."

4. If "Fast Cash" is selected, the user is prompted to choose an amount from predefined options.

5. If "Withdraw" is selected, the user is prompted to enter a specific amount.

6. The code then generates a random account balance for demonstration purposes.

7. It checks whether the entered amount for the transaction is within the available balance.

8. Finally, the code outputs the user's current balance or an "Insufficient balance" message as appropriate.

## Note

This code is a simplified simulation and does not interact with a real bank or financial system. It serves as an example of how to use the "inquirer" library to collect user input and simulate ATM operations.

Feel free to adapt and expand this code for your specific needs or integrate it into a larger banking application.
