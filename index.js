/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
  // 把被删除节点的值改为下个节点的值
  node.val = node.next.val;
  debugger;
  // 删除下个节点
  node.next = node.next.next;
};
