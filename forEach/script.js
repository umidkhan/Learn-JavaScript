let arr = ["swift", "java", "Python", "c++"];
console.log(arr);
let newArr = [];

// for
/* for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
} */

// forEach
arr.forEach((elem) => {
  const arrElems =
    elem.charAt().toUpperCase() +
    elem.slice(1).toLowerCase() +
    " programming language";
  newArr.push(arrElems);
});
console.log(newArr);
