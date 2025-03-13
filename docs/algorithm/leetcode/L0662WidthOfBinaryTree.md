# 0662. 二叉树最大宽度

## 题目
给你一棵二叉树的根节点 root ，返回树的 最大宽度 。

树的 最大宽度 是所有层中最大的 宽度 。

每一层的 宽度 被定义为该层最左和最右的非空节点（即，两个端点）之间的长度。将这个二叉树视作与满二叉树结构相同，两端点间会出现一些延伸到这一层的 null 节点，这些 null 节点也计入长度。

题目数据保证答案将会在  32 位 带符号整数范围内。


```
示例 1：

输入：root = [1,3,2,5,3,null,9]
输出：4
解释：最大宽度出现在树的第 3 层，宽度为 4 (5,3,null,9) 。

```

## 解题思路


## 代码
```java
class L0662WidthOfBinaryTree {

    public int widthOfBinaryTree(TreeNode root) {
        int width = 0;
        LinkedList<Object[]> q = new LinkedList<>();
        q.offer(new Object[]{root, 0});
        while (!q.isEmpty()) {
            width = Math.max(width, (int) q.peekLast()[1] - (int) q.peekFirst()[1] + 1);
            int size = q.size();
            while (size > 0) {
                Object[] cur = q.poll();
                root = (TreeNode) cur[0];
                int idx = (int) cur[1];
                if (root.left != null) {
                    q.offer(new Object[]{root.left, idx * 2 + 1});
                }
                if (root.right != null) {
                    q.offer(new Object[]{root.right, idx * 2 + 2});
                }
                size--;
            }
        }
        return width;
    }

    private class TreeNode {
        int v;
        TreeNode left;
        TreeNode right;
    }

}
```

## 复杂度分析

