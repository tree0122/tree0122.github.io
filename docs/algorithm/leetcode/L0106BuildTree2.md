# 0106. 从中序与后序遍历序列构造二叉树

## 题目
给定两个整数数组 inorder 和 postorder ，其中 inorder 是二叉树的中序遍历， postorder 是同一棵树的后序遍历，请你构造并返回这颗 二叉树 。


```
示例 1：

输入：inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
输出：[3,9,20,null,null,15,7]

```

## 解题思路


## 代码
```java
class L0106BuildTree2 {

    public TreeNode buildTree2(int[] inorder, int[] postorder) {
        return doBuildTree2(inorder, postorder, 0, inorder.length - 1, 0, inorder.length - 1);
    }

    private TreeNode doBuildTree2(int[] inorder, int[] postorder, int iStart, int iEnd, int pStart, int pEnd) {
        if (iStart > iEnd || pStart > pEnd) {
            return null;
        }
        int k = 0;
        while (inorder[iStart + k] != postorder[pEnd]) {
            k++;
        }
        TreeNode node = new TreeNode(postorder[pEnd]);
        node.left = doBuildTree2(inorder, postorder, iStart, iStart + k - 1, pStart, pStart + k - 1);
        node.right = doBuildTree2(inorder, postorder, iStart + k + 1, iEnd, pStart + k, pEnd - 1);
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

