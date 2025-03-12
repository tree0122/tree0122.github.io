# L0230. 二叉搜索树中第 K 小的元素

## 题目
给定一个二叉搜索树的根节点 root ，和一个整数 k ，请你设计一个算法查找其中第 k 小的元素（从 1 开始计数）。


```
示例 1：

输入：root = [5,3,6,2,4,null,null,1], k = 3
输出：3

```

## 解题思路


## 代码
```java
class L0230KthSmallest {

    public int kthSmallest(TreeNode root, int k) {
        int[] res = {0, k};
        doKthSmallest(root, res);
        return res[0];
    }

    private void doKthSmallest(TreeNode node, int[] res) {
        if (node == null) {
            return;
        }
        doKthSmallest(node.left, res);
        if (res[1] == 0) {
            return;
        }
        if (--res[1] == 0) {
            res[0] = node.v;
            return;
        }
        doKthSmallest(node.right, res);
    }

    private class TreeNode {
        int v;
        TreeNode left;
        TreeNode right;
    }

}
```

## 复杂度分析

