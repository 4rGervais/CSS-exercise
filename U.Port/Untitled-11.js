// function* gen(name){
//     console.log(name + ' what is your name');
//     yield
//     console.log(name + ' how old are you');
//     yield
//     console.log(name + ' do you need coffee');
// }
// let isaac = gen('Isaac')
// let Gervais = gen('Gervais')
// isaac.next()
// isaac.next()
// Gervais.next()

// const [x,y,z] = PointerEvent


let name = 'Gervais'
let obj = {
    name,
    status(){
        console.log(name);
    }
}
obj.status()