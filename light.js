// const boxes = document.querySelectorAll('.box');

// // Attach click event listeners
// boxes.forEach((box, index) => {
//     box.addEventListener('click', () => {
//         // Clear color classes first
//         box.classList.remove('red', 'yellow', 'green');

//         // Apply color based on index
//         if (index === 0) {
//             box.classList.add('red');
//         } else if (index === 1) {
//             box.classList.add('yellow');
//         } else if (index === 2) {
//             box.classList.add('green');
//         }
//     });
// });
const trafficLightContainer = document.getElementById('traffic-light');
const boxes = document.querySelectorAll('.box');

// Add event listeners to start and stop the animation on mouseover and mouseout
trafficLightContainer.addEventListener('mouseover', function () {
    boxes.forEach(box => {
        return box.classList.add('active');
    });
});

trafficLightContainer.addEventListener('mouseout', function () {
    boxes.forEach(box => box.classList.remove('active'));
}); 