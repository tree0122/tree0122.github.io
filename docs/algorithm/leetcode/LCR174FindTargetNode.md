# LCR174. 二叉搜索树的第k大节点

## 题目
描述：给定一棵二叉搜索树的根节点 root，以及一个整数 k。

要求：找出二叉搜索树书第 k 大的节点。


```
示例 1：

输入: root = [10, 5, 15, 2, 7, null, 20, 1, null, 6, 8], cnt = 4
       10
      / \
     5   15
    / \    \
   2   7    20
  /   / \ 
 1   6   8
输出: 8

```

## 解题思路


## 代码
```java
class LCR174FindTargetNode {

    public int findTargetNode(TreeNode root, int cnt) {
        int[] res = {0, cnt};
        doFindTargetNode(root, res);
        return res[0];
    }

    private void doFindTargetNode(TreeNode node, int[] res) {
        if (node == null) {
            return;
        }
        doFindTargetNode(node.right, res);
        if (res[1] == 0) {
            return;
        }
        if (--res[1] == 0) {
            res[0] = node.v;
            return;
        }
        doFindTargetNode(node.left, res);
    }

    private class TreeNode {
        int v;
        TreeNode left;
        TreeNode right;
    }

}
```

## 复杂度分析

