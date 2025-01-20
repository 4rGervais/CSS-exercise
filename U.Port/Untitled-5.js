// class person{
//     constructor(first,last){
//         firstName: first
//         lastName: last
//     }
// }
let person1 = {first: 'Gervais', last: 'NIYONSHUTI'}

const pro = new Proxy(person1,{
    get(target, prop){
        return 'Bonjour, ' + target[prop]
        // console.log(target);
        // console.log(prop);
        // console.log(target[prop]);
        // let names=prop.split(['_'])
        // console.log('your full names are ' + target[names[0]] +' ' + target[names[1]]);
    },
    set(target, prop, value){
        if (prop === 'School'){
            value = 'Kepler'
        }
        target[prop] = value
    }
})
pro.first = 'Sarah'
pro.first
console.log('pro.first: ', pro.first);
pro.School = ''
console.log('pro.school: ', pro.School);
// console.log(person1.first_last);
