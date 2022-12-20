Array.prototype.mergeSort = function () {
  const rec = (arr) => {
    if (arr.length === 1) {
      return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid, arr.length);
    const orderLeft = rec(left);
    const orderRight = rec(right);
    const res = [];
    while (orderLeft.length || orderRight.length) {
      if (orderLeft.length && orderRight.length) {
        res.push(
          orderLeft[0] < orderRight[0] ? orderLeft.shift() : orderRight.shift()
        );
			} else if(orderLeft.length) {
				res.push(orderLeft.shift())
			}else if(orderRight.length) {
				res.push(orderRight.shift())
			}
		}
		return res 
  };

	const res = rec(this);
	// 最终拷贝到this上,加了倒叙
	this.reverse(res.forEach((n,i) => this[i] = n)) 
};
const arr = [1, 67, 46, 435, 6];
const res = arr.mergeSort();
console.log("%c Line:16 🥕 res", "color:#465975", arr);
