Array.prototype.selectionSort = function () {
  for (let i = 0; i < this.length - 1; i++) {
    // 这里的i 代表当前第几轮，i和j保持同频
    let indexMin = i;
    for (let j = i; j < this.length; j++) {
      if (this[j] < this[indexMin]) {
        indexMin = j;
      }
    }
    if (indexMin !== i) {
      const temp = this[i];
      this[i] = this[indexMin];
      this[indexMin] = temp;
    }

    // let indexMin = 0;
    // for (let j = 0; j < this.length; j++) {
    // 	if (this[j] < this[indexMin]) {
    // 		indexMin = j;
    // 	}
    // }
    // const temp = this[0]
    // this[0] = this[indexMin]
    // this[indexMin] = temp
  }
};
const arr = [1, 67, 46, 435, 6];
const res = arr.selectionSort();
console.log("%c Line:16 🥕 res", "color:#465975", res, arr);
