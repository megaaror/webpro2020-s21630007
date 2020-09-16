let total = 0;

const account = {
    name : "Mega",
    expenses : []
};

function addExpenses(description,amount){
    account.expenses.push({description : description, amount : amount})
}
function getAccountSummary(){
    account.expenses.forEach(function(totalExpense){
        total = total + totalExpense.amount
    })
    console.log("Total pengeluaran "+ account.name, "adalah Rp. "+ total);
}

addExpenses('Beli Baju', 250000);
addExpenses('Beli Tas', 200000);
getAccountSummary();
