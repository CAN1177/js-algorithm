Array.prototype.sequentialSearch = function(item) {
	for (let i = 0; i < this.length; i++) {
		if (this[i] === item) {
			return i
		}
	}
	return -1
}

const res = [1,2,4556,787,90,9].sequentialSearch(2)
console.log("%c Line:11 🍡 res", "color:#ffdd4d", res);

const arr = [1, 2, 4556, 787, 90, 9]
const es6Res = arr.indexOf(2)
console.log("%c Line:16 🍞 es6Res", "color:#b03734", es6Res);