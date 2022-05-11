// const m = new Map();

// // add
// m.set("a", "aa")
// m.set("b", "bb")

// //get
// let item = m.get('a')

// // delete
// m.delete('a')
// // 删除所有
// m.clear()

// // update
// m.set('a', "aa11")

/* leetCode 349 两个数组的交集 */

// var intersection = function (nums1, nums2) {
//   const map = new Map();
//   nums1.forEach((item) => {
//     map.set(item, true);
//   });
//   const res = [];
//   nums2.forEach((item) => {
//     if (map.get(item)) {
//       res.push(item);
//       // 立即删除防止重复
//       map.delete(item);
//     }
//   });

//   return res;
// };

// let nums1 = [4, 9, 5],
//   nums2 = [9, 4, 9, 8, 4];
// console.log(
//   "%c 🍻 intersection: ",
//   "font-size:20px;background-color: #42b983;color:#fff;",
//   intersection(nums1, nums2)
// );

// 20:有效括号

// var isValid = function (s) {
//   if (s.length % 2 === 1) return false;
//   const stack = [];
//   const map = new Map();
//   map.set("(", ")");
//   map.set("{", "}");
//   map.set("[", "]");
//   for (let i = 0; i < s.length; i++) {
//     const c = s[i];
//     if (map.has(c)) {
//       stack.push(c);
//     } else {
//       const t = stack[stack.length - 1];
//       if (map.get(t) === c) {
//         stack.pop();
//       } else {
//         return false;
//       }
//     }
//   }
//   return stack.length === 0;
// };

// 3. 无重复字符的最长子串
// var lengthOfLongestSubstring = function(s) {

// 	let l = 0
// 	let res =0
// 	const map = new Map();
// 	for (let r = 0; r < s.length; r+=1) {
// 		if (map.has(r) && map.get(s[r])>=l) {
// 			l = map.get(s[r])+1
// 		}
// 		res = Math.max(res, r-l+1)
// 		map.set(s[r], r)
// 	}
// 	return res
// };
// let s = "abcabcbb"
// console.log('%c 🍸 lengthOfLongestSubstring: ', 'font-size:20px;background-color: #7F2B82;color:#fff;', lengthOfLongestSubstring(s));


/*76. 最小覆盖子串  */
var minWindow = function (s, t) {
  //维护左右指针
  let l = 0;
  let r = 0;
  // Map 表示字串需要的字符和个数
  const need = new Map();
  for (const c of t) {
    need.set(c, need.has(c) ? need.get(c) + 1 : 1);
  }

  // 移动右指针
  let needType = need.size;
  let res = "";
  while (r < s.length) {
    const c = s[r];
    if (need.has(c)) {
      need.set(c, need.get(c) - 1);
      if (need.get(c) === 0) {
        needType -= 1;
      }
    }
    // 左指针
    while (needType === 0) {
      const newRes = s.substring(l, r + 1);
      if (!res || newRes.length < res.length) {
        res = newRes;
      }
      const c2 = s[l];
      if (need.has(c2)) {
        need.set(c2, need.get(c2) + 1);
        if (need.get(c2) === 1) {
          needType += 1;
        }
      }

      l += 1;
    }
    r += 1;
  }
  return res;
};
