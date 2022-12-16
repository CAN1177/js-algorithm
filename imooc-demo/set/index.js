/* 数据结构 集合 */

// // 去重
const arr = [1, 2, 2,];
// console.log(
//   "%c 🥚 arr: ",
//   "font-size:20px;background-color: #FFDD4D;color:#fff;",
//   [...new Set(arr)]
// );

// 判断元素是否在集合中
const set = new Set(arr);
const has = set.has(3);
// console.log("%c Line:14 🍔 has", "color:#ffdd4d", has);
// set.delete(1);
// console.log("%c Line:14 🍒 set", "color:#42b983", set);

// 求交集
const set2 = new Set([2,3])
console.log("%c Line:20 🍫 set2", "color:#4fff4B", set2);
const set3 = new Set([...set].filter(item => set2.has(item)))
console.log("%c Line:22 🍩 set3", "color:#7f2b82", set3);

// let nums1 = [4,9,5],
//   nums2 = [9,4,9,8,4];

// var intersection = function (nums1, nums2) {
// // return [...new Set(nums1)].filter(item=> new Set(nums2).has(item))
// /* 优化 */
// return [...new Set(nums1)].filter(item=> nums2.includes(item))
// };
// console.log(
//   "%c 🍯 intersection: ",
//   "font-size:20px;background-color: #B03734;color:#fff;",
//   intersection(nums1, nums2)
// );
