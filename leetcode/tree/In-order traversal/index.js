function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function inorderTraversal(root) {
  let arr = [];
  // 一次小树单元的遍历
  const inorder = (root) => {
    if (root === null) return null;
    inorder(root.left);   // 左
    arr.push(root.val);   // 中
    inorder(root.right);  // 右 
  }
  inorder(root);
  return arr;
}

let a1 = new TreeNode(1);
let a2 = new TreeNode(2);
let a3 = new TreeNode(3);
a1.right = a2;
a2.left = a3;

console.log(inorderTraversal(a1));

// [1, 3, 2]In-order traversal