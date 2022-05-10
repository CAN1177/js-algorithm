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

var intersection = function (nums1, nums2) {
  const map = new Map();
  nums1.forEach((item) => {
    map.set(item, true);
  });
  const res = [];
  nums2.forEach((item) => {
    if (map.get(item)) {
      res.push(item);
      // 立即删除防止重复
      map.delete(item);
    }
  });

  return res;
};

let nums1 = [4, 9, 5],
  nums2 = [9, 4, 9, 8, 4];
console.log(
  "%c 🍻 intersection: ",
  "font-size:20px;background-color: #42b983;color:#fff;",
  intersection(nums1, nums2)
);

// 20:有效括号

var isValid = function (s) {
  if (s.length % 2 === 1) return false;
  const stack = [];
  const map = new Map();
  map.set("(", ")");
  map.set("{", "}");
  map.set("[", "]");
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (map.has(c)) {
      stack.push(c);
    } else {
      const t = stack[stack.length - 1];
      if (map.get(t) === c) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};


// 3. 无重复字符的最长子串
var lengthOfLongestSubstring = function(s) {
	let leftNext = 0
	let res =0
	const map = new Map();
	for (let rightNext = 0; rightNext < s.length; rightNext+=1) {
		if (map.has(rightNext)) {
			leftNext = map.get(s[rightNext])+1
		}
		res = Math.max(res, rightNext-l+1)
		map.set(s[rightNext], r)
	}
	return res
};