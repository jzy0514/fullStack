function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var inorderTraversal = (root) => {
  var stack = [], // 堆栈
    result = [], // 解脱
    cur; // 当前的
  cur = root;
  while (stack.length > 0 || cur !== null) {
    // 结点不为空 
    if (cur !== null) {
      stack.push(cur);
      cur = cur.left; // null
    } else {
      cur = stack.pop(); // 第一次是不是最左侧的？
      result.push(cur.val);
      cur = cur.right;
    }
  }
  return result;
}

let a1 = new TreeNode(1);
let a2 = new TreeNode(2);
let a3 = new TreeNode(3);
a1.right = a2;
a2.left = a3;

console.log(inorderTraversal(a1));
