//  defalut parameters 

function intrust (principal , rate = 3.5 , years = 5) {
 return  principal * rate / 100 * years ;

}

console.log (intrust(100000));