import inquirer from "inquirer";

interface ansType {
  UserID: string;
  UserPin: string;
  accountType: string;
  transactionType: string;
  amount: number;
}

const answer: ansType = await inquirer.prompt([
  {
    type: "input",
    name: "UserID",
    message: "Kindly Enter your Id:",
  },
  {
    type: "input",
    name: "UserPin",
    message: "Kindly Enter your PinCode:",
  },
  {
    type: "list",
    name: "accountType",
    choices: ["Current", "Saving"],
    message: "Select your account type:",
  },
  {
    type: "list",
    name: "transactionType",
    choices: ["Fast Cash", "Withdraw"],
    message: "Select your transaction",
    when: (answers) => answers.accountType !== undefined,
  },
  {
    type: "list",
    name: "amount",
    choices: [1000, 2000, 10000, 20000],
    message: "Select your amount",
    when: (answers) => answers.transactionType === "Fast Cash",
  },
  {
    type: "input",
    name: "amount",
    message: "Enter your amount",
    when: (answers) => answers.transactionType === "Withdraw",
  },
]);
if(answer.UserID && answer.UserPin){
    const balance = Math.floor(Math.random() *10000000);
    console.log(balance);
    const EnteredAmount = answer.amount;
    if(balance >= EnteredAmount){
        const remaining = balance - EnteredAmount;
        console.log("Your current balance is",remaining);
    } else {
        console.log("Insufficient balance")
    }
}
