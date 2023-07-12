// 42.3-Function on Arrays map - filter - reduce Challenge
let arr = [10, 20, 30, 40, 50];

function handleArray(array) {
  const add = array.reduce((prevVale, currentValue) => {
    return prevVale + currentValue;
  });
  let result = [add, array.length];
  return result;
}
console.log(handleArray(arr));
