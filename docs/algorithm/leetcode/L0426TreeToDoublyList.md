# 0426. 将二叉搜索树转化为排序的双向链表

## 题目
给定一棵二叉树的根节点 root。

要求：将这棵二叉树转换为一个已排序的双向循环链表。要求不能创建新的节点，只能调整树中节点指针的指向。


```


```

## 解题思路


## 代码
```java
class L0426TreeToDoublyList {

    TreeNode head = null, tail = null;
    public TreeNode treeToDoublyList(TreeNode root) {
//        TreeNode[] tmp = new TreeNode[2];
//        doTreeToDoublyList(root, tmp);
//        tmp[0].left = tmp[1];
//        tmp[1].right = tmp[0];
//        return tmp[0];

        dfs(root);
        head.left = tail;
        tail.right = head;
        return head;
    }

    private void dfs(TreeNode root) {
        if (root == null) {
            return;
        }
        dfs(root.left);
        if (tail != null) {
            tail.right = root;
            root.left = tail;
        }else {
            head = root;
        }
        tail = root;
        dfs(root.right);
    }

    private void doTreeToDoublyList(TreeNode root, TreeNode[] tmp) {
        if (root == null) {
            return;
        }
        doTreeToDoublyList(root.left, tmp);
        if (tmp[1] == null) {
            tmp[0] = root;
        }else {
            tmp[1].right = root;
            root.left = tmp[1];
        }
        tmp[1] = root;
        doTreeToDoublyList(root.right, tmp);
    }

    public TreeNode treeToDoublyListByMorris(TreeNode root) {
        TreeNode head = null, tail = null;
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
                }else {
                    mr.right = null;
                }
            }
            if (tail != null) {
                tail.right = root;
                root.left = tail;
            }else {
                head = root;
            }
            tail = root;
            root = root.right;
        }
        head.left = tail;
        tail.right = head;
        return head;
    }

    private class TreeNode {
        int v;
        TreeNode left;
        TreeNode right;
    }

}
```

## 复杂度分析

