async function add(num1, num2){
    return new Promise((resolve) => {
        console.log(`Sum: ${2+3}`);
        resolve(2 + 3)
    })
}
async function mult(){
    let s = await add() * 2
    console.log(`Mult: ${s}`);
    return new Promise((resolve) => resolve(s))
}
async function sub(){
    let item = await mult()
    console.log(`Sub: ${item - 5}`);
}
sub()