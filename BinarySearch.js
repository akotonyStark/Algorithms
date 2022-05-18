const arr = [1,2,3,4,5,6,7,8,9,10]

let target = 22
let first = 0
let end = arr.length - 1


while(first <= end){
  let mid = Math.floor((first + end)/2)
  if(arr[mid] === target){
    console.log(true)
    break
  }
  else if(target > arr[mid]){
    first = mid + 1
    }

  else if(target < arr[mid]){
    end = mid
    
  }
  console.log(false)
}
