# 0111. 二叉树的最小深度


## 题目
给定一个二叉树，找出其最小深度。

最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

说明：叶子节点是指没有子节点的节点。


```
示例 1：

输入：root = [3,9,20,null,null,15,7]
输出：2
```

## 解题思路


## 代码
```java
class L0111MinDepth {

    public int minDepth(TreeNode root) {
        if (root == null) {
            return 0;
        }
        int left = minDepth(root.left);
        int right = minDepth(root.right);
        if (left == 0) { // 左子树为空，取右子树+1
            return right + 1;
        }
        if (right == 0) { // 右子树为空，取左子树+1
            return left + 1;
        }
        return Math.min(left, right) + 1;
    }

    private class TreeNode {
        int v;
        TreeNode left;
        TreeNode right;
    }

}
```

## 复杂度分析

