// 先序遍历
const bt = require("./bt");

// const preorder = (root) => {
//   if (!root) {
//     return;
//   }
//   console.log(root.val);
//   preorder(root.left);
//   preorder(root.right);
// };

//  preorder(bt)

const preorder = (root) => {
  if (!root) {
    return;
  }
  const stack = [root];
  while (stack.length) {
    const n = stack.pop();
    console.log(
      "%c 🥒 n: ",
      "font-size:20px;background-color: #F5CE50;color:#fff;",
      n.val
    );
    // 因为栈先进后出
    if (n.right) stack.push(n.right);
    if (n.left) stack.push(n.left);
  }
};

preorder(bt);
