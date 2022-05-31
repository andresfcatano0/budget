var budgetAmount = document.querySelector("#budgetAmount");
var expenseAmount = document.querySelector("#expenseAmount");
var expenseName = document.querySelector("#expenseName");
var dollarAmount = document.querySelector("#dollarAmount");
var creditAmount = document.querySelector("#creditAmount");
var balanceAmount = document.querySelector("#balanceAmount");
var bSubmit = document.querySelector("#bSubmit");
var eSubmit = document.querySelector("#eSubmit");
var balance = 0;
let tbody = document.querySelector("tbody");

bSubmit.addEventListener("click", function(event){
	dollarAmount.textContent = "$" + Number(budgetAmount.value); 
	balance += Number(budgetAmount.value);
	balanceAmount.textContent = "$" + balance;
	color();
	event.preventDefault();
});

eSubmit.addEventListener("click", function(event){
	creditAmount.textContent = "$" + Number(expenseAmount.value); 
	balance -= Number(expenseAmount.value);
	balanceAmount.textContent = "$" + balance;
	color();
	event.preventDefault();
	filltable()
});

function color(){
	if(balance === 0){
	balanceAmount.style.color = "black";
	} else if(balance > 0){
		balanceAmount.style.color = "green";
	} else if(balance < 0){
		balanceAmount.style.color = "red";
	}
}

function filltable(){
	let name = expenseName.value;
	let expense = expenseAmount.value;
	let tr = document.createElement("tr");
	tr.innerHTML = (`<td>${name}</td><td>${expense}</td><i class="fas fa-trash-alt"></i>`);
	tbody.appendChild(tr);
}



