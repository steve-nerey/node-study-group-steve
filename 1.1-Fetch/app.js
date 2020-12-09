
/** first sample using fetch and catch */
console.log('about to get a guitar');
fetch('guitar.jpg').then(response => {
    console.log(response);
    return response.blob();
}).then(response => {
    console.log(reponse);
    document.getElementById('rainbow').src = URL.createObjectURL(blob);
}).catch(error => {
    console.log(error);
});


/** second sample using a function w/ fetch and catch*/

// async function catchRainbow() {
//     const response = await fetch('guitar.jpg');
//     const blob = await response.blob();
//     document.getElementById('rainbow').src = URL.createObjectURL(blob);
// }
// catchRainbow()
// .then(response => {
//     console.log('yes')
// })
//     .catch(error => {
//         console.log('error!');
//     });