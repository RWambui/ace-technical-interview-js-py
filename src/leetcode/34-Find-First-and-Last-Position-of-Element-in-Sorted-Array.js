const findFirstAndLast = (nums, target) => {
  const first = firstEl(nums, target);  
  const last = lastEl(nums, target, first);
  return [first, last];
}

function firstEl(nums, target) {
      let leftPointer = 0;
      let rightPointer = nums.length - 1;
      let firstPosition = -1;
    while(leftPointer <= rightPointer) {
      let mid = Math.floor((leftPointer + rightPointer)/2);
      if(nums[mid] >= target) {
        if(nums[mid] === target){
          firstPosition = mid;
        }
        rightPointer = mid - 1;        
      } else {
        leftPointer = mid + 1;
      }
    }
       return firstPosition;    
  }
  
function lastEl(nums, target, first){
      let leftPointer = first;
      let rightPointer = nums.length - 1;
      let lastPosition = first;
    while(leftPointer <= rightPointer) {
      let mid = Math.floor((leftPointer + rightPointer)/2);
      if(nums[mid] <= target) {
        if(nums[mid] === target){
          lastPosition = mid;
        }
        leftPointer = mid + 1;                
      } else {
        rightPointer = mid - 1;
      }
    }
       return lastPosition;
  }