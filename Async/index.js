// const getTodos = (resource) => {
//     return new Promise((resolve, reject) => {
//         const request = new XMLHttpRequest();



//         request.addEventListener('readystatechange', () => {
//             // console.log(request, request.readyState)
//             if (request.readyState === 4 && request.status === 200) {
//                 const data = JSON.parse(request.responseText)
//                 resolve(data);
//             } else if (request.readyState === 4) {
//                 reject('error getting resources')
//             }
//         });


//         request.open('GET', resource);
//         request.send();
//     });
// };

// getTodos('https://jsonplaceholder.typicode.com/todos/').then(data =>{
//     console.log('promise 1 resolved:', data);
//     return getTodos("https://api.imgflip.com/get_memes".');
// }).then(data =>{
//     console.log('Promise two resolved:', data)
// }).catch(err =>{
//     console.log('promise rejected:', err)
// });


// // call bck function:
// getTodos((err, data) =>{
//     console.log('Call back fired');
//     console.log(err, data);

//     if(err){
//         console.log(err)
//     }else{
//         console.log(data);
//     }

// });

// fetch('https://api.imgflip.com/get_memes').then((response)=>{
//     console.log('resolved', response);
//     return response.json();
// }).then(data =>{
//     console.log(data);

// }).catch((err)=>{
//     console.log('reject', err);
// })

// const getTodos = async () => {
//     const response = await fetch('https://meme-api.com/gimme/wholesomememes');
//     if(response.status !== 200){
//         throw new Error('can\'t fetch the data')
//     }
//     const data = await response.json();

//     return data;

// }

// getTodos()
//     .then(data => console.log('resolved:', data))
//     .catch(err => console.log('rejected:', err.message));
