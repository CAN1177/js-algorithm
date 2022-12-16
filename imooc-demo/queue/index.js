const queue = [];

queue.push(1);
queue.push(2);

const item1 = queue.shift();
console.log("%c Line:7 🥔 item1", "color:#42b983", item1);
console.log("%c Line:9 🍰 queue", "color:#93c0a4", queue);
const item2 = queue.shift();

