const json = {
  a: { b: { c: 1 } },
  d: { e: 2 },
};

const path = ["a", "b", "c"];

let p = json;

path.forEach((k) => {
  console.log("%c Line:11 🍤 k", "color:#33a5ff", k);
  p = p[k];
});

// p 最终为1
console.log(p);
