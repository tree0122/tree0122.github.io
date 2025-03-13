# 0129. 求根节点到叶节点数字之和

## 题目
给你一个二叉树的根节点 root ，树中每个节点都存放有一个 0 到 9 之间的数字。
每条从根节点到叶节点的路径都代表一个数字：

例如，从根节点到叶节点的路径 1 -> 2 -> 3 表示数字 123 。
计算从根节点到叶节点生成的 所有数字之和 。

叶节点 是指没有子节点的节点。


```
示例 1：

输入：root = [4,9,0,5,1]
输出：1026
解释：
从根到叶子节点路径 4->9->5 代表数字 495
从根到叶子节点路径 4->9->1 代表数字 491
从根到叶子节点路径 4->0 代表数字 40
因此，数字总和 = 495 + 491 + 40 = 1026

```

## 解题思路


## 代码
```java
class L0129SumNumbers {

    public int sumNumbers(TreeNode root) {
        return doSumNumbers(root, 0);
    }

    private int doSumNumbers(TreeNode node, int pre) {
        if (node == null) {
            return 0;
        }
        pre = pre * 10 + node.v;
        if (node.left == null && node.right == null) {
            return pre;
        }
        return doSumNumbers(node.left, pre) + doSumNumbers(node.right, pre);
    }

    private class TreeNode {
        int v;
        TreeNode left;
        TreeNode right;
    }

}
```

## 复杂度分析

