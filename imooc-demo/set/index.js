/* 数据结构 集合 */

// // 去重
// const arr = [1, 2, 2, 1, 3];
// console.log(
//   "%c 🥚 arr: ",
//   "font-size:20px;background-color: #FFDD4D;color:#fff;",
//   [...new Set(arr)]
// );

// // 判断元素是否在集合中
// const set = new Set(arr);
// const has = set.has(1)

// // 求交集
// const set2 = new Set([2,3])
// const set3 = new Set([...set].filter(item => set2.has(item)))

let nums1 = [4,9,5],
  nums2 = [9,4,9,8,4];

var intersection = function (nums1, nums2) {
// return [...new Set(nums1)].filter(item=> new Set(nums2).has(item))
/* 优化 */
return [...new Set(nums1)].filter(item=> nums2.includes(item))
};
console.log(
  "%c 🍯 intersection: ",
  "font-size:20px;background-color: #B03734;color:#fff;",
  intersection(nums1, nums2)
);
