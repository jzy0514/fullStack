function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let a1 = new TreeNode(3);               //    3
let a2 = new TreeNode(9);             //     /  \     
let a3 = new TreeNode(20);          //      9    20
let a4 = new TreeNode(15);        //            /  \  
let a5 = new TreeNode(7);       //             15   7 
a1.left = a2;
a1.right = a3;
a3.left = a4;
a3.right = a5;

// leetcode 102 层序遍历
// 从根结点开始， 一层一层来分层遍历 结果： [[3], [9.10], [15, 7]]
// 按层次来 每个结点把子节点告诉 算法就ok 
// items [] 子节点也可能有它自己的子节点
// 队列  Queue  

function levelOrderTravesal(root) {
  if (!root) return [];
  const items = [];
  // 队列, 等待被了解情况的节点 出队，
  // shift push（）
  const queue = [root, null];
  let leveNodes = [];  // 每一层的节点
  while (queue.length > 0) {
    const t = queue.shift();
    // root
    if (t) {
      leveNodes.push(t.val);
      if (t.left) {
        queue.push(t.left);
      }
      if (t.right) {
        queue.push(t.right);
      }
    } else {
      // null 层次分隔符
      items.push(leveNodes);
      leveNodes = [];
      // null 上一层 在队列里的结点是9 和20
      // 绝对没有下下层的结点， 因为这是按层来遍历的不存在跨层次
      if (queue.length > 0) {
        queue.push(null);
      }
    }
  }
  return items; 
}

console.log(levelOrderTravesal(a1));
// queue [root, null]  [null]
// levelNode []    
// items []