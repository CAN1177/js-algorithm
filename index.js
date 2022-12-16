/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var addTwoNumbers = function (l1, l2) {
  const l3 = new ListNode(0);
  let p1 = l1;
  let p2 = l2;
  let p3 = l3;

  let carry = 0;
  while (p1 || p2) {
    const v1 = p1 ? p1.val : 0;
    const v2 = p2 ? p2.val : 0;

    const val = v1 + v2;

    // 得到和的十位上的数， 要放到下一轮
		carry = Math.floor(val / 10);
		
		// 个位数追加到新链表上
		p3.next = new ListNode(val % 10)


		if (p1) p1 = p1.next
		if (p2) p2 = p2.next
		p3 = p3.next


	}
	if (carry) {
		p3.next = new ListNode(carry)
	}
	return l3.next
};


const l1 = [2,4,3],l2 = [5,6,4]

console.log("%c Line:31 🥒 addTwoNumbers", "color:#7f2b82", addTwoNumbers(l1, l2));