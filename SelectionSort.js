const arr = [5,3,4,1,2 ]

for(let i=0; i<arr.length; i++){
  let lowest = i
  for(let j=i+1; j<arr.length; j++){
   // console.log(arr[i], arr[j])
    if(arr[j] < arr[lowest]){
      lowest = j
    }
  }
  if(i != lowest){
    let temp = arr[i]
    arr[i] = arr[lowest]
    arr[lowest] = temp
    console.log(arr)
  }
  
}

