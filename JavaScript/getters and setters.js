//   getters and setters in js 

const person = {
    firstname : 'mosh',
    lastname : 'hamadani',
    get fullname () {
        return ` ${person.firstname}  ${person.lastname}`
    },
    set fullname (value) {
        const parts = value.split(' ');
        this.firstname = parts[0];
        this.lastname = parts[1];
    }
}
person.fullname = 'elsa khan';
console.log(person);