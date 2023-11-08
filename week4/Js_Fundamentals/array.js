function divideArray(arr) {
  const odd = []
  const even = []
  for(let i=0;i<arr.length;i++){
    if(arr[i]%2 === 0) even.push(arr[i])
    else odd.push(arr[i])
  }

  odd.sort()
  even.sort()
  if(odd.length !== 0) {
    console.log("odd numbers:")
    for(let i = 0 ; i< odd.length; i++) {
      console.log(odd[i])
    }
  } else console.log("Odd numbers: none");
  if(even.length !== 0) {
    console.log("even numbers:")
    for(let i = 0 ; i< even.length; i++) {
      console.log(even[i])
    }
  } else console.log("Even numbers: none");
}

let nums = [4, 2, 9, 1, 8]; 
let noOddNums =[4,2,8];
let noEvenNums = [1,3,9,7]
divideArray([]);

