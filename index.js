
const input = prompt("Please enter your order.",
"vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);
const inputarr = input.split(",");

const order = [];
for (let i = 0; i < inputarr.length; i++) {
    const str = inputarr[i];
    order.push(str);
}
console.log(order);

const obj = {}

for (let i = 0; i < order.length; i++) {
    
    let flavname = order[i];
    if (obj[flavname]) {
        obj[flavname]++
    } else {
        obj[flavname] = 1
    }
}

console.table(obj);