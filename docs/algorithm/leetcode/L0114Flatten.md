# 0114. 二叉树展开为链表

## 题目
给你二叉树的根结点 root ，请你将它展开为一个单链表：

展开后的单链表应该同样使用 TreeNode ，其中 right 子指针指向链表中下一个结点，而左子指针始终为 null 。
展开后的单链表应该与二叉树 先序遍历 顺序相同。


```
示例 1：

输入：root = [1,2,5,3,4,null,6]
输出：[1,null,2,null,3,null,4,null,5,null,6]

```

## 解题思路


## 代码
```java
class L0114Flatten {

    public void flatten(TreeNode root) {
        TreeNode pre = null;
        LinkedList<TreeNode> stack = new LinkedList<>();
        stack.push(root);
        while (!stack.isEmpty()) {
            TreeNode cur = stack.pop();
            if (cur.right != null) {
                stack.push(cur.right);
            }
            if (cur.left != null) {
                stack.push(cur.left);
            }
            if (pre != null) {
                pre.left = null;
                pre.right = cur;
            }
            pre = cur;
        }
    }

    public void flattenByMorris(TreeNode root) {
        TreeNode pre = null, cur = root;
        while (cur != null) {
            TreeNode mr = cur.left;
            if (mr != null) {
                while (mr.right != null && mr.right != cur) {
                    mr = mr.right;
                }
                if (mr.right == null) {
                    mr.right = cur;
                    if (pre != null) {
                        pre.left = null;
                        pre.right = cur;
                    }
                    pre = cur;
                    cur = cur.left;
                    continue;
                } else {
                    mr.right = null;
                }
            } else {
                if (pre != null) {
                    pre.left = null;
                    pre.right = cur;
                }
                pre = cur;
            }
            cur = cur.right;
        }
    }

    private class TreeNode {
        int v;
        TreeNode left;
        TreeNode right;
    }

}
```

## 复杂度分析

