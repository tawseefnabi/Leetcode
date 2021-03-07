/**
 *Given an array of integers nums and an integer target, 
 *return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, 
 *and you may not use the same element twice.
 *You can return the answer in any order.

 */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = (nums, target) =>{
  for(let i=0;i<nums.length; i++){
      for(let j=i+1;j<nums.length;j++){
          if(nums[i]+nums[j] === target){
              return [i,j]
          }
      }
  }
};
console.time('twoSum runtime in ms: ')
console.log("twoSum index:",twoSum([2,3,4,5,10,1], 15))
console.timeEnd('twoSum runtime in ms: ')

var twoSum2 = (nums, target) =>{
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const another = target - nums[i];
    if (another in map) {
      return [map[another], i];
    }
    map[nums[i]] = i;
  }
};
console.time('twoSum2 runtime in ms: ')
console.log("twoSum2 index:",twoSum2([2,3,4,5,10,1], 15))
console.timeEnd('twoSum2 runtime in ms: ')

/**
 * twoSum index: [ 3, 4 ]
 * twoSum runtime in ms: : 8.050ms
 * twoSum2 index: [ 3, 4 ]
 * twoSum2 runtime in ms: : 0.507ms
 */