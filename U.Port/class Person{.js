class Person{
    constructor(name = 'pers', age = 2){
        this.name = name
        this.age = age
    }
}

let person1 = new Person('Gervais', 20)

// class child extends Person{
//     constructor(gender, name, age){
//         super(name, age);
//         this.gender = gender
//     }
//     result(){
//         console.log(this.name, this.age, this.gender);
//     }
// }

// let child1 = new child('male', 'Gervais')
// child1.result()

let pro = new Proxy(person1,{
    get(target, prop){
        console.log(target);
        console.log('really ' + target[prop]);
    },
    set(target,prop,value){
        if(prop === 'name') {
            value = 'Hallo'
        }
        if(prop === 'gender'){
            value = value.toLowerCase() + '🥺🥺🥺'
        }
        target[prop] = value
    }
})
pro.name
pro.gender = 'FEMALE'
// pro.gender