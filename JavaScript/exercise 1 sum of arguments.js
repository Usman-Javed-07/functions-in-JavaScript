
console.log(sum([3,7]));

function sum (...items) {
  if (items.length === 1 && Array.isArray(items[0]))
    items = [...items[0]];
return items.reduce((a,b) => a+b);
}

