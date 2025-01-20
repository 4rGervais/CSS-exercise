
// Write a JavaScript function fetchToDo that fetches data from the given URL (https://jsonplaceholder.typicode.com/todos/1).
// The function should handle both successful responses and errors (such as network issues or invalid URLs). Upon receiving
// a successful response, it should log the fetched data to the console. If there's an error, it should catch the error and log
// an appropriate message.

// function fetchToDo(){
//     fetch('https://jsonplaceholder.typicode.com/todos/1').headers
//         .then((value) => console.log(value.))
//         .catch((error) => console.log(error.message))
// }
// fetchToDo()

let fetchToDo = () => fetch('https://jsonplaceholder.typicode.com/todos/1').then(val => console.log(val),err => console.log(err.message))
fetchToDo()





