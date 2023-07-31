
function splitAmount() {
    let amount = parseInt(document.getElementById("amount").value);
    let people = parseInt(document.getElementById("People").value);
    let warningmsg1 = document.getElementById("warningmsg1");
    let warningmsg2 = document.getElementById("warningmsg2");


    //Warning Message While Entering Amount
    if (isNaN(amount)||amount<=0) {
        warningmsg1.textContent = "Please provide valid amount";
        return;
    } 
    else {
        warningmsg1.textContent = "";
    }


    //Warning Message While Entering Number of Peoples
    if (isNaN(people)||people<2) {
        warningmsg2.textContent = "Value should be greater than 1";
        return;
    } 
    else {
        warningmsg2.textContent = "";
    }

    
    //Splitting Bill Amount
    let splitAmount = amount/people;
    document.getElementById("result").value = ` ${splitAmount.toFixed(2)}`;

}