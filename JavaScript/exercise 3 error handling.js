//  error handling 
try {
const  number = [1,2,3,4,5,5,5];
const count = countOccrrence (null , 5);
console.log(count);
}
catch (e){
    console.log(e.message);
}
function countOccrrence ( array , searchelement) {
if (!Array.isArray(array))
    throw new Error ('invalid input');
return array.reduce((accumalator , current) => {
   const occrence = (current === searchelement)
   console.log(accumalator , current , searchelement)
   return accumalator + occrence;
},0)
}