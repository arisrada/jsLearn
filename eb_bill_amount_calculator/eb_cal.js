function ebCalculator() {
    let units = Number(document.getElementById('input').value);
    let amount = 0;
    if (units <= 50){
        amount = units * 0.75
    }
    else if (units > 50 && units <= 150){
        amount = 50*0.75 + (units-50)*1
    }
    else if (units > 150 && units <= 250){
        amount = 50*0.75 + 100*1 + (units-150)*1.30
    }
    else{
        amount = 50*0.75 + 100*1 + 100*1.30 + (units-250)*1
    }
    let result = document.querySelector("#result");
    result.innerHTML = "Your EB Bill amount is Rs." + amount
}