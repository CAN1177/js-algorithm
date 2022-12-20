/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const map = new Map();
   for(let item of nums){
       map.set(item, (map.get(item) || 0) + 1);
   }
   const arr = [...map].sort((a,b) => b[1] - a[1]);
   const result = [];
   for(let i = 0; i < k; i++){
       result.push(arr[i][0]);
   }
   return result;
};