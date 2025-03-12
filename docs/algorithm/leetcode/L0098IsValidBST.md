# 0098. 验证二叉搜索树

## 题目
给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。

有效 二叉搜索树定义如下：

- 节点的左子树只包含 小于 当前节点的数。
- 节点的右子树只包含 大于 当前节点的数。
- 所有左子树和右子树自身必须也是二叉搜索树。


```
示例 1：

输入：root = [5,1,4,null,null,3,6]
输出：false
解释：根节点的值是 5 ，但是右子节点的值是 4 。

```

## 解题思路


## 代码
```java
class L0098IsValidBST {

    public boolean isValidBST(TreeNode root) {
        return doValidBST(root, Integer.MIN_VALUE, Integer.MAX_VALUE);
    }

    private boolean doValidBST(TreeNode node, int lower, int upper) {
        if (node == null) {
            return true;
        }
        if (node.v <= lower || node.v >= upper) {
            return false;
        }
        return doValidBST(node.left, lower, node.v) && doValidBST(node.right, node.v, upper);
    }

    public boolean isValidBSTByMorris(TreeNode root) {
        TreeNode pre = null;
        while (root != null) {
            TreeNode mr = root.left;
            if (mr != null) {
                while (mr.right != null && mr.right != root) {
                    mr = mr.right;
                }
                if (mr.right == null) {
                    mr.right = root;
                    root = root.left;
                    continue;
                } else {
                    mr.right = null;
                }
            }
            if (pre != null && pre.v >= root.v) {
                return false;
            }
            pre = root;
            root = root.right;
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

