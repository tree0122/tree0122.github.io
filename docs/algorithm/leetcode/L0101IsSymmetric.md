# 0101. 对称二叉树

## 题目
给你一个二叉树的根节点 root ， 检查它是否轴对称。


```
示例 1：

输入：root = [1,2,2,3,4,4,3]
输出：true
```

## 解题思路


## 代码
```java
class L0101IsSymmetric {

    public boolean isSymmetric(TreeNode root) {
        if (root == null) {
            return true;
        }
        return doIsSymmetric(root.left, root.right);
    }

    private boolean doIsSymmetric(TreeNode n1, TreeNode n2) {
        if (n1 == null && n2 == null) {
            return true;
        }
        if (n1 != null || n2 != null || n1.v != n2.v) {
            return false;
        }
        return doIsSymmetric(n1.left, n2.right) && doIsSymmetric(n1.right, n2.left);
    }

    private class TreeNode {
        int v;
        TreeNode left;
        TreeNode right;
    }

}
```

## 复杂度分析

