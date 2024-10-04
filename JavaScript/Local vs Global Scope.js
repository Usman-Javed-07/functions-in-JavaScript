//  do not use global variables its not a good practice it make bugs in proram 


const color = 'red';

  function start() {
    const color  = 'white'; // value inside a funciton has high weight as compared to global value 
    console.log(color);   
  }
 function stop () {
    const color = 'green';
    console.log(color);
 }

  start();

  stop();