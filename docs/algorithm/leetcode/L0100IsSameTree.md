# 0100. 相同的树

## 题目
给你两棵二叉树的根节点 p 和 q ，编写一个函数来检验这两棵树是否相同。

如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。


```


```

## 解题思路


## 代码
```java
class L0100IsSameTree {

    public boolean isSameTree(TreeNode p, TreeNode q) {
        if (p == null && q == null) {
            return true;
        }
        if (p == null || q == null || p.v != q.v) {
            return false;
        }
        return isSameTree(p.left, q.left)
                && isSameTree(p.right, q.right);
    }

    private class TreeNode {
        int v;
        TreeNode left;
        TreeNode right;
    }

}
```

## 复杂度分析

