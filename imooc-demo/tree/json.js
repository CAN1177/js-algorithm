const json = {
  a: { b: { c: 1 } },
  d: [1, 2],
};

// 遍历 JSON 的所有节点值,参照打印结果
const dfs = (n, path) => {
  console.log("%c Line:9 🌮 n, path", "color:#4fff4B", n, path);
  Object.keys(n).forEach((key) => {
    dfs(n[key], path.concat(key));
  });
};
dfs(json, []);
