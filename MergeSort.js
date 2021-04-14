function merge(sortedLeftArr, sortedRightArr){
  let leftIndex = 0;
  let rightIndex = 0;
  let output = [];

  while(leftIndex < sortedLeftArr.length && rightIndex < sortedRightArr.length){
    const leftItems = sortedLeftArr[leftIndex]
    const rightItems = sortedRightArr[rightIndex]

    if(leftItems < rightItems){
      output.push(leftItems)
      leftIndex++
    }
    else{
      output.push(rightItems)
      rightIndex++
    }
  }
return [...output, ...sortedLeftArr.slice(leftIndex), ...sortedRightArr.slice(rightIndex)]
}
//console.log(merge([3,5], [1,2]))


function mergeSort(arr){
 //base case
 if(arr.length <= 1){
   return arr;
 }

 let middleIndex = Math.floor(arr.length/2)
 let leftArr = []
 let rightArr = []

//split into left and right
  for(let i=0; i<middleIndex; i++){
    leftArr.push(arr[i])
  }

  for(let i=middleIndex; i<=arr.length-1; i++){
    rightArr.push(arr[i])
  }
  
  /*
  the split could be done with a slice function
  leftArr = arr.slice(0,middleIndex)
  rightArr = arr.slice(middleIndex)
  
  */

  return merge(mergeSort(leftArr), mergeSort(rightArr))
  //console.log(leftArr, rightArr)
}

console.log(mergeSort([3,9,1,10,4,13,5,2]))

