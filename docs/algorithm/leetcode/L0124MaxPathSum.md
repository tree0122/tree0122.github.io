# 0124. 二叉树中的最大路径和

## 题目
二叉树中的 路径 被定义为一条节点序列，序列中每对相邻节点之间都存在一条边。同一个节点在一条路径序列中 至多出现一次 。该路径 至少包含一个 节点，且不一定经过根节点。

路径和 是路径中各节点值的总和。

给你一个二叉树的根节点 root ，返回其 最大路径和 。


```
示例 1：

输入：root = [-10,9,20,null,null,15,7]
输出：42
解释：最优路径是 15 -> 20 -> 7 ，路径和为 15 + 20 + 7 = 42
```

## 解题思路


## 代码
```java
class L0124MaxPathSum {

    public int maxPathSum(TreeNode root) {
        int[] d = doMaxPathSum(root);
        return d[0];
    }

    private int[] doMaxPathSum(TreeNode node) {
        int[] res = new int[2]; // res[0]子树中最大和，res[1]过node的某孩子最大和
        if (node == null) {
            return res;
        }
        int[] left = doMaxPathSum(node.left);
        int[] right = doMaxPathSum(node.right);
        res[1] = Math.max(Math.max(left[1], right[1]) + node.v, 0);
        res[0] = Math.max(left[1] + right[1] + node.v, Math.max(left[0], right[0]));
        return res;
    }

    private class TreeNode {
        int v;
        TreeNode left;
        TreeNode right;
    }

}
```

## 复杂度分析

