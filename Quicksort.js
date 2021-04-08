let arr = [9,1,2,0,7,11,4,8,22,-1]

//js comes with an inbuilt sort function that works like this
console.log(arr.sort())

//but this inbuilt sort function does not employ the use of quick sort algorithm
//below is an implementation of quicksort

var items = [9,1,2,0,7,11,4,8,22,-1]

function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    return items;
}

// first call to quick sort
var sortedArray = quickSort(items, 0, items.length - 1);
console.log(sortedArray); 


/*
*
*
*
*
*
*
*
/* a more modern approach to quicksort using the full potential of js */
function quickSort(arr){
  if(arr.length === 1){
    return arr;
  }

  const pivot = arr[arr.length-1]
  let leftArr = [];
  let rightArr = [];

//partition
  for(let i = 0; i<arr.length-1; i++){
    if(arr[i] < pivot){
      leftArr.push(arr[i])  
    }
    else{
      rightArr.push(arr[i])
    }
  }

  if(leftArr.length > 0 && rightArr.length > 0){
    console.log("there is something in left and right:", [...leftArr,...rightArr])
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
  }
  else if(leftArr.length > 0){
    console.log("only left arr has: ", leftArr)
    return [...quickSort(leftArr), pivot]
  }
  else{
    console.log("only right arr has:", rightArr)
    return [pivot, ...quickSort(rightArr)]
  }  
}

//driver code
console.log(quickSort([9,1,2,0,7,11,4,8,22,-1]))
            
  
