# 0105. 从前序与中序遍历序列构造二叉树

## 题目
给定两个整数数组 preorder 和 inorder ，其中 preorder 是二叉树的先序遍历， inorder 是同一棵树的中序遍历，请构造二叉树并返回其根节点。


```
示例 1：

输入: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
输出: [3,9,20,null,null,15,7]

```

## 解题思路


## 代码
```java
class L0105BuildTree {

    public TreeNode buildTree(int[] preorder, int[] inorder) {
        return doBuildTree(preorder, inorder, 0, preorder.length - 1, 0, preorder.length - 1);
    }

    private TreeNode doBuildTree(int[] preorder, int[] inorder, int i, int j, int len) {
        if (len == 0) {
            return null;
        }
        int k = 0;
        while (preorder[i] != inorder[j + k]) {
            k++;
        }
        TreeNode node = new TreeNode(preorder[i]);
        node.left = doBuildTree(preorder, inorder, i + 1, j, k);
        node.right = doBuildTree(preorder, inorder, i + k + 1, j + k + 1, len - k - 1);
        return node;
    }

    private TreeNode doBuildTree(int[] preorder, int[] inorder, int pdxStart, int pdxEnd, int idxStart, int idxEnd) {
        if (pdxStart > pdxEnd || idxStart > idxEnd) {
            return null;
        }
        int k = 0;
        while (preorder[pdxStart] != inorder[idxStart + k]) {
            k++;
        }
        TreeNode node = new TreeNode(preorder[pdxStart]);
        node.left = doBuildTree(preorder, inorder, pdxStart + 1, pdxStart + k, idxStart, idxStart + k - 1);
        node.right = doBuildTree(preorder, inorder, pdxStart + k + 1, pdxEnd, idxStart + k + 1, idxEnd);
        return node;
    }

    private class TreeNode {
        int v;
        TreeNode left;
        TreeNode right;
    }

}
```

## 复杂度分析

