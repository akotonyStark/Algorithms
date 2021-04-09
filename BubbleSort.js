/* solution one */

let array = [2,1,5,-1,7,8,14,0,9]
  function bubbleSort(array){
    let i = 0;
    do{
      for(let i = 0; i<array.length-1; i++){
         let a = array[i] 
         let b = array[i+1]
         if(a > b){
           let temp = array[i]
           array[i] = array[i+1]
           array[i+1] = temp
         }  
        }
        i++
    }while(i<array.length)
    return array
}

console.log(bubbleSort(array))
console.log(bubbleSort([2,1,5,8]))



/* solution two */
let arr = [2,5,8,3,9,4,1,-1,6]

let sorted = false
for(let j=0; j<arr.length-1; j++){
  for(let i=0; i<arr.length-1; i++){
    if(arr[i] < arr[i+1]){
      sorted = true
    }
    else{
      let temp = arr[i]
      arr[i] = arr[i+1]
      arr[i+1] = temp 
    }
  }
}
console.log(arr)

//solution three

let array = [2,1,5,-1,7,8,14,0,9]
  function bubbleSort(array){
  
    for(let index = 0; index < array.length-1; index++){
      for(let i = 0; i<array.length-1; i++){
               let a = array[i] 
               let b = array[i+1]
               if(a > b){
                 let temp = array[i]
                 array[i] = array[i+1]
                 array[i+1] = temp
               }  
              }
    }
    return array
}

console.log(bubbleSort(array))
console.log(bubbleSort([2,1,5,8]))

