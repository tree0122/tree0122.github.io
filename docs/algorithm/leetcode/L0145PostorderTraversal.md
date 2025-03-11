# 0145. 二叉树的后序遍历


## 题目
给你一棵二叉树的根节点 root ，返回其节点值的 后序遍历 。


```


```

## 解题思路


## 代码
```java
class L0145PostorderTraversal {

    public List<Integer> postorderTraversal(TreeNode root) {
        ArrayList<Integer> ans = new ArrayList<>();
        LinkedList<TreeNode> help = new LinkedList<>();
        LinkedList<TreeNode> stack = new LinkedList<>();
        help.push(root);
        while (!help.isEmpty()) {
            root = help.pop();
            help.push(root);
            if (root.left != null) {
                help.push(root.left);
            }
            if (root.right != null) {
                help.push(root.right);
            }
        }
        while (!stack.isEmpty()) {
            ans.add(stack.pop().v);
        }
        return ans;
    }

    private class TreeNode {
        int v;
        TreeNode left;
        TreeNode right;
    }

}
```

## 复杂度分析

