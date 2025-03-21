# 0450. 删除二叉搜索树中的节点

## 题目
给定一个二叉搜索树的根节点 root 和一个值 key，删除二叉搜索树中的 key 对应的节点，并保证二叉搜索树的性质不变。返回二叉搜索树（有可能被更新）的根节点的引用。

一般来说，删除节点可分为两个步骤：

- 首先找到需要删除的节点；
- 如果找到了，删除它。


```
示例 1：

输入：root = [5,3,6,2,4,null,7], key = 3
输出：[5,4,6,2,null,null,7]
解释：给定需要删除的节点值是 3，所以我们首先找到 3 这个节点，然后删除它。
一个正确的答案是 [5,4,6,2,null,null,7], 如下图所示。
另一个正确答案是 [5,2,6,null,4,null,7]。

```

## 解题思路


## 代码
```java
class L0450DeleteNode {

    public TreeNode deleteNode(TreeNode root, int key) {
        TreeNode parent = null, cur = root;
        while (cur != null && cur.v != key) {
            parent = cur;
            if (cur.v < key) {
                cur = cur.right;
            }else {
                cur = cur.left;
            }
        }
        if (cur == null) {
            return root;
        }
        TreeNode tmp = cur;
        if (cur.left == null) {
            cur = cur.right;
        }else if (cur.right == null) {
            cur = cur.left;
        }else {
            TreeNode mr = cur.left;
            while (mr.right != null) {
                mr = mr.right;
            }
            mr.right = cur.right;
            cur = cur.left;
        }
        if (tmp == root) {
            return cur;
        }
        if (parent.left == tmp) {
            parent.left = cur;
        }else {
            parent.right = cur;
        }
        return root;
    }

    public TreeNode deleteNode2(TreeNode root, int key) {
        if (root == null) {
            return null;
        }
        if (root.v < key) {
            root.right = deleteNode2(root.right, key);
            return root;
        }
        if (root.v > key) {
            root.left = deleteNode2(root.left, key);
            return root;
        }
        // root.v == key
        if (root.left == null) {
            return root.right;
        }
        if (root.right == null) {
            return root.left;
        }
        TreeNode successor = root.right;
        while (successor.left != null) {
            successor = successor.left;
        }
        successor.left = root.left;
        return root.right;
    }

    private class TreeNode {
        int v;
        TreeNode left;
        TreeNode right;
    }

}
```

## 复杂度分析

