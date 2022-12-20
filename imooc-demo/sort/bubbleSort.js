Array.prototype.bubbleSort = function () {
  console.log("%c Line:3 🍅 this", "color:#465975", this);
  for (let i = 0; i < this.length; i++) {
    // -i是因为第一循环就缩小了范围，只需进行余下数组的排序
    for (let j = 0; j < this.length - i; j++) {
      // console.log("%c Line:4 🌽 this", "color:#e41a6a", this[j-1], this[j]);
      if (this[j - 1] > this[j]) {
        const temp = this[j - 1];
        this[j - 1] = this[j];
        this[j] = temp;
      }
    }
  }
};
const arr = [1, 67, 46, 435, 6];
const res = arr.bubbleSort();
console.log("%c Line:16 🥕 res", "color:#465975", res, arr);
