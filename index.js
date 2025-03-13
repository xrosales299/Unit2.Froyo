
function orderup(){
    let order = prompt("Please order flavors seperated by commas", "vanilla,vanilla,vanilla,strawberry,coffee,coffee")
    if (order != null) {
        document.getElementById("ordertext").innerHTML = "You have ordered " + order;
    }
}

