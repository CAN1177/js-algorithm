class MinHeap {
  constructor() {
    this.heap = [];
  }

  // 交换节点方法
  swap(i1, i2) {
    const temp = this.heap[i1];
    this.heap[i1] = this.heap[i2];
    this.heap[i2] = temp;
  }
  // 获取父节点
  getParentIndex(i) {
    // return Math.floor((i-1) / 2)
    // 直接取商的简便方法
    return (i - 1) >> 2;
  }

  // 获取左层子节点
  getLeftIndex(i) {
    // return Math.floor((i-1) / 2)
    // 直接取商的简便方法
    return i * 2 + 1;
  }
  // 获取右侧子节点
  getRightIndex(i) {
    // return Math.floor((i-1) / 2)
    // 直接取商的简便方法
    return i * 2 + 2;
  }

  // 位置上移
  shiftUp(index) {
    // 上移到了堆定
    if (index === 0) {
      return;
    }

    const parentIndex = this.getParentIndex(index);
    if (this.heap[parentIndex] > this.heap[index]) {
      // 实现交换
      this.swap(parentIndex, index);
      // 继续上移
      this.shiftUp(parentIndex);
    }
  }

  // 下移
  shiftDown(index) {
    const leftIndex = this.getLeftIndex(index);
    const rightIndex = this.getRightIndex(index);
    // 左侧子节点 小于 当前节点就交换
    if (this.heap[leftIndex] < this.heap[index]) {
      this.swap(leftIndex, index);
      this.shiftDown(leftIndex);
    }
    if (this.heap[rightIndex] < this.heap[index]) {
      this.swap(rightIndex, index);
      this.shiftDown(rightIndex);
    }
  }

  // 插入方法
  insert(value) {
    this.heap.push(value);
    // 上移值的下标
    this.shiftUp(this.heap.length - 1);
  }

  // 删除方法
  pop() {
    this.heap[0] = this.heap.pop();
    this.shiftDown(0);
  }
  // 获取堆顶
  peek() {
    return this.heap[0];
  }
  // 获取堆大小
  size() {
    return this.heap.length;
  }
}

const h = new MinHeap();
h.insert(3);
h.insert(2);
h.insert(1);

h.pop();
