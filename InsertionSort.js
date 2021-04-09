let arr = [2,5,8,3,9,4,1,-1,6]

function insertionSort(array){
  for(let i=1; i<arr.length; i++){
  for(let j = i; j>0; j--){
    //console.log(arr[j], arr[j-1])
    if(arr[j] < arr[j-1]){
      let temp = arr[j]
      arr[j] = arr[j-1]
      arr[j-1] = temp
    } 
  }
}
return array
}

console.log(insertionSort(arr))
