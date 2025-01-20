// Write an async function that takes multiple Promises and uses Promise.race() to return the result 
// of the first Promise that resolves or rejects.

let promise_1








imeout(()=>resolve('the first promise won the race'), 3000)
})
let promise_2 = new Promise((resolve, reject) => {
    setTimeout(()=>resolve('the second promise won the race'), 6000)
})
let promise_3 = new Promise((resolve, reject) => {
    setTimeout(()=>resolve('the third promise won the race'), 4000)
})
let promise_4 = new Promise((resolve, reject) => {
    setTimeout(()=>resolve('the fourth promise won the race'), 2500)
})

async function check(){
    let promiseAll = await Promise.race([promise_1, promise_2, promise_3, promise_4])
    console.log(promiseAll);
}
check()