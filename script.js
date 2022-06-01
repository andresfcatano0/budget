let budgetAmount = document.querySelector("#budgetAmount"); //budgetForm
let expenseName = document.querySelector("#expenseName"); //expenseForm
let expenseAmount = document.querySelector("#expenseAmount"); //expenseForm
let bSubmit = document.querySelector("#bSubmit"); //budgetForm button
let eSubmit = document.querySelector("#eSubmit"); //expenseForm button
let moneyIn = document.querySelector("#moneyIn"); 
let moneyOut = document.querySelector("#moneyOut");
let balanceAmount = document.querySelector("#balanceAmount");
let balance = 0;
let totalExpenses = 0;
let tbody = document.querySelector("tbody");


let expenseList = {};


bSubmit.addEventListener("click", function(){
	moneyIn.textContent = "$" + Number(budgetAmount.value); 
	balance += Number(budgetAmount.value);
	balanceAmount.textContent = "$" + balance;
	color();
	// event.preventDefault() will prevent form from submitting.
	event.preventDefault();
});

eSubmit.addEventListener("click", function(){
	totalExpenses += Number(expenseAmount.value)
	moneyOut.textContent = "$" + totalExpenses; 
	balance -= Number(expenseAmount.value);
	balanceAmount.textContent = "$" + balance;
	color();
	filltable();
	event.preventDefault();

	//Adds keys and values to the expenseList object
	expenseList[expenseName.value] = expenseAmount.value
});

const color = () => {
	if(balance === 0){
	balanceAmount.style.color = "black";
	} else if(balance > 0){
		balanceAmount.style.color = "green";
	} else if(balance < 0){
		balanceAmount.style.color = "red";
	}
}

const filltable = () => {
	let name = expenseName.value;
	let expense = expenseAmount.value;
	let tr = document.createElement("tr");
	tr.innerHTML = (`<td>${name}</td><td>${expense}</td><i class="fas fa-trash-alt"></i>`);
	tbody.appendChild(tr);
}

const trash = (item) => {
	//.target in this case "I", refers to the trash can icon.
	if (item.target.tagName === "I"){
		item.target.parentElement.remove();

		// console.log(Number(Object.values(expenseList)))
		// console.log(Object.values(expenseList))

		console.log(expenseList[])

		let num = Number(Object.values(expenseList))
		totalExpenses -= num;
		balance += num;
		moneyOut.textContent = "$" + Number(totalExpenses);
		balanceAmount.textContent = "$" + Number(balance);
	}
}

tbody.addEventListener("click", function(item){
	trash(item);
})
