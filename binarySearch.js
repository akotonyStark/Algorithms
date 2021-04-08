let binarySearch = function(arr, x, start, end) {
	
	// Base Condition
	if (start > end){
    return false;
  } 

	// Find the middle index
	let mid=Math.floor((start + end)/2);

	// Compare mid with given key x
	if (arr[mid]===x){
    return true;
  }
		
	// If element at mid is greater than x,
	// search in the left half of mid
	if(arr[mid] > x){
    return binarySearch(arr, x, start, mid-1);
  }
		
	else{
    // If element at mid is smaller than x,
		// search in the right half of mid
		return binarySearch(arr, x, mid+1, end);
  }		
}

// Driver code
let arr = [2, 3, 5, 7, 8, 9,11];
let x = 5;
   
if (binarySearch(arr, x, 0, arr.length-1)){
	
    console.log("Element found at postion", arr.indexOf(x));
}
else{
	binarySearch("Element not found");
}



/* solution 2 */
function binarySearch(sortedArray, key){

  let midpointIndex = Math.floor(sortedArray.length/2)
  let midpoint =  sortedArray[midpointIndex]

  if(key === midpoint){
    console.log(key, " found at ", midpoint)
  }
  else{    
    for(let i=0; i<midpointIndex; i++){
        if(sortedArray[i] === key){
          console.log(key, " found at ",i)
          break;
        }  
    }

    for(let j=midpointIndex; j<sortedArray.length-1; j++){
        if(sortedArray[j] === key){
        console.log(key, " found at position",j)
      }
     }
  }

}

binarySearch([1,2,3,4,6,8,9,10,90], 8)
