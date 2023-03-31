// console.log('connected')
document.getElementById('green').addEventListener('click', function () {
    const comment = document.getElementById('commentBox');
    comment.style.backgroundColor = 'green';

})
document.getElementById('blue').addEventListener('click', function () {
    const comment = document.getElementById('commentBox');
    comment.style.backgroundColor = 'blue';

})
document.getElementById('red').addEventListener('click', function () {
    const comment = document.getElementById('commentBox');
    comment.style.backgroundColor = 'red';

})
document.getElementById('yellow').addEventListener('click', function () {
    const comment = document.getElementById('commentBox');
    comment.style.backgroundColor = 'yellow';

})

document.getElementById('clear').addEventListener('click', function () {
    const comment = document.getElementById('commentBox');
    comment.style.backgroundColor = '';

})

// document.getElementById('random').addEventListener('click', function () {
//     const comment = document.getElementById('commentBox');
//     comment.style.backgroundColor = randomColor();

// })

// function randomColor() {
//     let color = [];
//     for (let i = 0; i < 3; i++) {
//         color.push(Math.floor(Math.random() * 256));
//     }
//     return 'rgb(' + color.join(', ') + ')';
// }

