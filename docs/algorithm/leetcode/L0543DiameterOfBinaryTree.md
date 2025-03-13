# 0543. 二叉树的直径

## 题目
给你一棵二叉树的根节点，返回该树的 直径 。

二叉树的 直径 是指树中任意两个节点之间最长路径的 长度 。这条路径可能经过也可能不经过根节点 root 。

两节点之间路径的 长度 由它们之间边数表示。


```
示例 1：

输入：root = [1,2,3,4,5]
输出：3
解释：3 ，取路径 [4,2,1,3] 或 [5,2,1,3] 的长度。

```

## 解题思路


## 代码
```java
class L0543DiameterOfBinaryTree {

    public int diameterOfBinaryTree(TreeNode root) {
        int[] res = new int[1];
        height(root, res);
        return res[0];
    }

    private int height(TreeNode node, int[] rad) {
        if (node == null) {
            return 0;
        }
        int left = height(node.left, rad);
        int right = height(node.right, rad);
        rad[0] = Math.max(left + right, rad[0]);
        return Math.max(left, right) + 1;
    }

    private class TreeNode {
        int v;
        TreeNode left;
        TreeNode right;
    }

}
```

## 复杂度分析

