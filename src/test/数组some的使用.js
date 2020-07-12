var arr = [1, 2, 3, 4, 5, 6, 7];
// var flag = arr.some(function(value) {
//     return value === 3
// })
// console.log(flag);

arr.forEach((item, i) => {
    if (item == 4) {
        console.log(i);
    }
})