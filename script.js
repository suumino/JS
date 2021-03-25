// function callback() {
//     console.log("timeout");
// }
// setTimeout(callback, 3000);

// setTimeout(
//     function callback() {
//         console.log("timeout");
//     }, 3000);


// (function a() {
//     for (var i = 1; i <= 5; i++) {
//         console.log(i);
//     }
// })();


try {
    console.log("try -1");
    throw "error";
    console.log("try -2");
}

catch(e) {
    console.log("catch error :", e);
}

finally {
    console.log("finally - this code will always be executed");
}