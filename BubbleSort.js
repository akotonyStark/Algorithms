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
let bubbleSort = (inputArr) => {
    let len = inputArr.length;
    let checked;
    do {
        //set flag to false on start
        checked = false;
        for (let i = 0; i < len; i++) {
            if (inputArr[i] > inputArr[i + 1]) {
                let tmp = inputArr[i];
                inputArr[i] = inputArr[i + 1];
                inputArr[i + 1] = tmp;
                //if swap occurs, set flag to true
                checked = true;
            }
        }
    } while (checked);
    return inputArr;
 };

//solution three

let array = [2,1,5,-1,7,8,14,0,9]
  function bubbleSort(array){
    let i = 0;
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

