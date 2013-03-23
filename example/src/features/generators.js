 // A binary tree class.
function Tree(left, label, right) {
  this.left = left;
  this.label = label;
  this.right = right;
}

// A recursive generator that iterates the Tree labels in-order.
function* inorder(t) {
  if (t) {
    yield* inorder(t.left);
    yield t.label;
    yield* inorder(t.right);
  }
}

// Make a tree
function make(array) {
  // Leaf node:
  if (array.length == 1) return new Tree(null, array[0], null);
  return new Tree(make(array[0]), array[1], make(array[2]));
}

module.exports = function () {
  let tree = make([[['a'], 'b', ['c']], 'd', [['e'], 'f', ['g']]]);
  console.log('generating tree labels in order:');

  // Iterate over it
  for (let node of inorder(tree)) {
    console.log(node); // a, b, c, d, ...
  }
};
