const bt = require("./bt");

// const inorder = (root) => {
//   if (!root) {
//     return;
//   }
//   inorder(root.left);
//   console.log(root.val);
//   inorder(root.right);
// };

// inorder(bt);

const inorder = (root) => {
  if (!root) return;
  const stack = [];
  let p = root;
  while (stack.length || p) {
    while (p) {
      stack.push(p);
      p = p.left;
    }
    const n = stack.pop();
    console.log(
      "%c 🍥 n: ",
      "font-size:20px;background-color: #4b4b4b;color:#fff;",
      n.val
    );
    // 指针指向右节点
    p = n.right;
  }
};

inorder(bt);
