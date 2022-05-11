// 先序遍历
const bt = require("./bt");

const preorder = (root) => {
  if (!root) {
    return;
  }
  console.log(root.val);
  preorder(root.left);
  preorder(root.right);
};

 preorder(bt)