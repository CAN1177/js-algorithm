

Array.prototype.insertionSort = function () {
	for (let i = 1; i < this.length; i++) {
		const temp = this[i]
		let j = i
		while (j > 0) {
			if (this[j-1] > temp) {
				this[j] = this[j-1]
			} else {
				break
			}
			j--
		}
		this[j] = temp
	}
};
const arr = [1, 67, 46, 435, 6];
const res = arr.insertionSort();
console.log("%c Line:16 🥕 res", "color:#465975", arr);
