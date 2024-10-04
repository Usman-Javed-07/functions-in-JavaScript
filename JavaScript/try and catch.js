//  try and catch 

const person = {
    firstname : 'mosh',
    lastname : 'hamadani',
    get fullname () {
        return ` ${person.firstname}  ${person.lastname}`
    },
    set fullname (value) {
        if (typeof value !== 'string')
        throw new Error ('value is not a string');
        const parts = value.split(' ');
        if (parts.length !==2)
        throw new Error (' enter first and last name ')
        this.firstname = parts[0];
        this.lastname = parts[1];
    }
}

try {
person.fullname = 'elsa khan';

}
catch (err){
    alert(err);
}
console.log(person);