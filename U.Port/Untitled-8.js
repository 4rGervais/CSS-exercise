// Write a javascript function that displays a number every two seconds and stops displaying after 5 seconds

function display(){
    let x = setInterval(()=>{
        // console.log(Math.ceil(Math.random()* 100));
        console.log();
    },2000)
    setTimeout(()=>{
        clearInterval(x)
    },5000)
}
display()
