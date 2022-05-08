// function instanceofClone(L, R) {
// 	var O = R.prototype;
//   L = L.__proto__;
//   while (true) {
//     if (L === null) return false;
//     // 这里重点：当 O 严格等于 L 时，返回 true
//     if (O === L) return true;
//     L = L.__proto__;
//   }
// }

// 写法二

const instanceofClone = (A, B)=>{
	let p = A
	while (p) {
		if (p===B.prototype) {
			return true;
		}
		p=p.__proto__
	}
	return false;
}

var und = undefined;
console.log(
  "%c 🍍 und: ",
  "font-size:20px;background-color: #ED9EC7;color:#fff;",
  instanceofClone(und, Object)
); // false

var oDate = new Date();
console.log(
  "%c 🥧 oDate: ",
  "font-size:20px;background-color: #3F7CFF;color:#fff;",
  instanceofClone(oDate, Date)
); // true
