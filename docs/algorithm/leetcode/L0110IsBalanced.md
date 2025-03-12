# 0110. 平衡二叉树

## 题目
给定一个二叉树，判断它是否是 平衡二叉树  

```


```

## 解题思路


## 代码
```java
class L0110IsBalanced {

    public boolean isBalanced(TreeNode root) {
        return height(root) >= 0;
    }

    private int height(TreeNode node) {
        if (node == null) {
            return 0;
        }
        int left = height(node.left);
        if (left < 0) {
            return -1;
        }
        int right = height(node.right);
        if (right < 0) {
            return -1;
        }
        if (Math.abs(left - right) > 1) {
            return -1;
        }
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

