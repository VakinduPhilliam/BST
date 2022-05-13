/**
 * Binary Search Tree (BST):
 * JavaScript BST Coding Challenges, Problems & Solutions.
 * > Insert: insert new node into BST.
 * > Search: find data node inside BST.
 * > Tree Depth: measure maximum depth of BST.
 * > Validity of BST: check validity of BST.
 * > Lowest Common Ancestor: find the lowest common ancestor of two nodes.
 * > Balanced BST: is BST balanced/unbalanced.
 *   HINT: A balanced tree is defined to be one such that the heights of the 
 *   two sub-trees of any node never differ more than one.
 */

//Node class
class node {
    constructor(data){
        this.data=data
        this.left=null
        this.right=null
    }
}

// Binary Search Tree Class
class BST {
    constructor(){
        this.root = null
    }
    // if node is empty
    insert(data){
        let newNode=new node(data)
        if(this.root===null){
            this.root=newNode
        } else{
            this.insertNode(this.root,newNode)
        }
    }
    //traverse node
    insertNode(node,newNode){
        if(newNode.data<node.data){
            if(node.left===null){
                node.left=newNode
            } else {
                this.insertNode(node.left,newNode)
            }
        } else {
            if(node.right===null){
                node.right=newNode
            } else {
                this.insertNode(node.right,newNode)
            }
        }
    }
    //search method
    search(keyword){
        return this.searchNodes(this.root,keyword)
    }
    //search data in bst
    searchNodes(node,keyword){
        if(node===null){
            return null;
        } else if (keyword<node.data){
            return this.searchNodes(node.left,keyword)
        } else if (keyword>node.data){
            return this.searchNodes(node.right,keyword)
        } else {
            return node
        }

    }
    //bst depth method
    depth(){
        return this.maxDepth(this.root)
    }
    //bst maximum depth
    maxDepth(node){
        if (node===null){
            return null
        } else {
            let lDepth=this.maxDepth(node.left)
            let rDepth=this.maxDepth(node.right)

            if(lDepth>rDepth){
                return lDepth+1
            } else {
                return rDepth+1
            }
        }
    }
    // check validity of bst
    validBST(){
        return this.isBST(this.root)
    }
    // bst validity
    isBST(node){
    if (node == null)
        return true;
    if (node.left != null && node.left.data > node.data)
        return false;
    if (node.right != null && node.right.data < node.data)
        return false;
    if (!this.isBST(node.left) || !this.isBST(node.right))
        return false;
    return true;
    }
    //lowest common ancestor
    lca(n1,n2){
        return this.LowestCommonAncestor(this.root,n1,n2)
    }
    //find Lowest Common Ancestor
    LowestCommonAncestor(node, n1, n2){
    while (node != null)
    {
        if (node.data > n1 && node.data > n2)
            node = node.left;
        else if (node.data < n1 && node.data < n2)
            node = node.right;
        else break;
    }
    return node;
    }
    //check if bst is balanced
    isBalanced(){
        return this.balanced(this.root, 0) >= 0;
    }
    //detect if bst is balanced
    balanced (node, depth) {
        if (!node) return depth;
        var left = this.balanced(node.left, depth + 1);
        var right = this.balanced(node.right, depth + 1);
        if (left === -1 || right === -1 || Math.abs(left - right) > 1) return -1;
        return Math.max(left, right);
    }
}

const tree = new BST() // initialize tree
tree.insert(10) // insert data into tree
tree.insert(9)
tree.insert(11)
tree.insert(3)
tree.insert(6)

console.log(tree) // print tree

console.log(tree.search(11)) // search data node in bst

console.log(tree.depth()) // find maximum depth of bst

console.log(tree.validBST()) // check validity of bst

console.log(tree.lca(3,6)) // find lowest common ancestor of two nodes

console.log(tree.isBalanced()) // check if bst is balanced

