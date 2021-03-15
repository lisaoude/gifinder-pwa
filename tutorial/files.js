// fs stands for file system
const fs = require('fs')

// // reading files
// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// console.log('last line');



// // writing files
// fs.writeFile('./docs/blog1.txt', 'hello, world', () => {
//     console.log('file was written');
// })

// fs.writeFile('./docs/blog2.txt', 'hello, again', () => {
//     console.log('file was written');
// })



// // create & delete directories
// if (!fs.existsSync('./assets')) {

//     // mkdir stands for make directory
//     fs.mkdir('./assets', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log('folder created');
//        });
// } else {

//     // rmdir stands for remove directory
//     fs.rmdir('./assets', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log('folder deleted');
//     })
// }



// // deleting files
// if (fs.existsSync('./docs/deleteme.txt')) {

//     // unlink is used to delete a file
//     fs.unlink('./docs/deleteme.txt', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log('file deleted');
//     })
// }
