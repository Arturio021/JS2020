function outputNumbers(one, two) {
    var num = two;
    setTimeout(function time() {
        console.log(num);
        if (num !== one) setTimeout(time, 1000);
        num--;
    }, 5000);
}
outputNumbers(1, 14);

// function outputNumbers(one, two) {
//     var current = one;
//     setTimeout(function go() {
//         console.log(current);
//         if (current !== two) setTimeout(go, 1000);
//         current++;
//     }, 1000);
// }

// outputNumbers(1, 10);

// function time(one, two) {
//     setTimeout(function() {
//         for (var i = one; i <= two; i++) {
//             console.log(i);
//         }
//     }, 1000)
// }
// time(1, 25)

// function time(one, two) {
//     for (var i = one; i <= two; i++) {
//         // console.log(i);
//         // setTimeout(console.log(i), 1000)
//         setTimeout(i, 1000)
//     }
// }

//setTimeout(time, 1000, 1, 20)
// time(1, 20);
// setTimeout(time, 1000, 1, 20)

// function printMessage() {
//     alert('hi');
// }
// setTimeout(printMessage, 5000);

// setTimeout(function time(one, two) {
//     for (var i = one; i <= two; i++) {
//         console.log(i);
//     }

// }, 1000)

// function time(one, two) {
//     setTimeout(function() {
//         for (var i = 0; i <= two; i++) {
//             console.log(i);
//         }
//     }, 1000)
// }
// time(1, 20)