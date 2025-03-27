
const arr = order.split(",")

const stats = {}



function orderup(){
    let order = prompt("Please order flavors seperated by commas", "vanilla,vanilla,vanilla,strawberry,coffee,coffee")
    if (order != null) {
        document.getElementById("ordertext").innerHTML = "You have ordered" + stats[flavor];
    }
}

for(let i = 0; i < arr.length; i++){
    const flavor = arr[i]
    console.log(flavor)
    if(stats[flavor] === undefined){
        stats[flavor] = 0
    }
    stats[flavor]++
}