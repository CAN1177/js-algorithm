// const graph = require("./graph");

// const visited = new Set();
// visited.add(2);

// const q = [2];

// while (q.length) {
//   const n = q.shift();
//   console.log(n);
//   graph[n].forEach((c) => {
//     if (!visited.has(c)) {
//       q.push(c);
//       visited.add(c);
//     }
//   });
// }

// 65 有效数字
// var isNumber = function (s) {
//   const graph = {
//     //点和边构成的临接表
//     0: { blank: 0, sign: 1, ".": 2, digit: 6 },
//     1: { digit: 6, ".": 2 },
//     2: { digit: 3 },
//     3: { digit: 3, e: 4 },
//     4: { digit: 5, sign: 7 },
//     5: { digit: 5 },
//     6: { digit: 6, ".": 3, e: 4 },
//     7: { digit: 5 },
//   };

//   let state = 0; //初始状态

//   for (let c of s.trim().toLowerCase()) {
//     //循环字符串
//     if (c >= "0" && c <= "9") {
//       c = "digit";
//     } else if (c === " ") {
//       c = "blank";
//     } else if (c === "+" || c === "-") {
//       c = "sign";
//     }

//     state = graph[state][c]; //返回下一个状态

//     if (state === undefined) {
//       //状态转移之后不在临接表中 返回false
//       return false;
//     }
//   }

//   if (state == 3 || state == 5 || state == 6) {
//     //状态是3、5、6中的一个说明是有效数字
//     return true;
//   }

//   return false;
// };

// 417太平洋大西洋水流问题
var pacificAtlantic = function (heights) {
  if (!heights || !heights[0]) {
    return [];
  }

  const m = heights.length;
  const n = heights[0].length;
  const flow1 = Array.from({ length: m }, () => new Array(n).fill(false));
  const flow2 = Array.from({ length: m }, () => new Array(n).fill(false));

  const dfs = (r, c, flow) => {
    flow[r][c] = true;
		[[r - 1, c], [r + 1, c], [r, c - 1], [r, c + 1]].forEach(
      ([nr, nc]) => {
        if (
          // 保证在矩阵中
          nr >= 0 &&
          nr < m &&
          nc >= 0 &&
          nc < n &&
          // 防止死循环
          !flow[nr][nc] &&
          // 保证逆流而上
          heights[nr][nc] >= heights[r][c]
        ) {
          dfs(nr, nc, flow);
        }
      }
    );
  };

  // 沿着海岸线逆流而上
  for (let r = 0; r < m; r += 1) {
    dfs(r, 0, flow1);
    dfs(r, n - 1, flow2);
  }
  for (let c = 0; c < n; c += 1) {
    dfs(0, c, flow1);
    dfs(m - 1, c, flow2);
  }
  // 收集坐标
  const res = [];
  for (let r = 0; r < m; r += 1) {
    for (let c = 0; c < n; c += 1) {
      if (flow1[r][c] && flow2[r][c]) {
        res.push([r, c]);
      }
    }
  }
	return res;
};
