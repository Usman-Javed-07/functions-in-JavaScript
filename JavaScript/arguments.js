    

// Arguments 


function sum (a,b) {
   let total = 0;
   for (let value of arguments)
    total += value;
return total;
}

console.log(sum (1,2,5,10)); 