# 0958. 二叉树的完全性检验

## 题目
给你一棵二叉树的根节点 root ，请你判断这棵树是否是一棵 完全二叉树 。

在一棵 完全二叉树 中，除了最后一层外，所有层都被完全填满，并且最后一层中的所有节点都尽可能靠左。最后一层（第 h 层）中可以包含 1 到 2h 个节点。


```
示例 1：

输入：root = [1,2,3,4,5,6]
输出：true
解释：最后一层前的每一层都是满的（即，节点值为 {1} 和 {2,3} 的两层），且最后一层中的所有节点（{4,5,6}）尽可能靠左。

```

## 解题思路


## 代码
```java
class L0958IsCompleteTree {

    public boolean isCompleteTree(TreeNode root) {
        boolean leaf = false;
        LinkedList<TreeNode> q = new LinkedList<>();
        q.offer(root);
        while (!q.isEmpty()) {
            root = q.poll();
            if (root.left == null && root.right != null) {
                return false;
            }
            if (leaf && (root.left != null || root.right != null)) {
                return false;
            }
            if (root.left != null) {
                q.offer(root.left);
            } else {
                leaf = true;
            }
            if (root.right != null) {
                q.offer(root.right);
            } else {
                leaf = true;
            }
        }
        return true;
    }

    private class TreeNode {
        int v;
        TreeNode left;
        TreeNode right;
    }

}
```

## 复杂度分析

