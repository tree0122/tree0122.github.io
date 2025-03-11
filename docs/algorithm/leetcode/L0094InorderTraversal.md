# 0094. 二叉树的中序遍历


## 题目
给定一个二叉树的根节点 root ，返回 它的 中序 遍历 。


```


```

## 解题思路


## 代码
```java
class L0094InorderTraversal {

    public List<Integer> inorderTraversal(TreeNode root) {
        ArrayList<Integer> ans = new ArrayList<>();
        LinkedList<TreeNode> stack = new LinkedList<>();
        while (root != null || !stack.isEmpty()) {
            if (root != null) {
                stack.push(root);
                root = root.left;
            }else {
                root = stack.pop();
                ans.add(root.v);
                root = root.right;
            }
        }
        return ans;
    }

    public List<Integer> inorderTraversalMorris(TreeNode root) {
        ArrayList<Integer> ans = new ArrayList<>();
        while (root != null) {
            TreeNode mr = root.left;
            if (mr != null) {
                while (mr.right != null && mr.right != root) {
                    mr = mr.right;
                }
                if (mr.right != null) {
                    mr.right = root;
                    root = root.left;
                    continue;
                }else {
                    mr.right = null;
                }
            }
            ans.add(root.v);
            root = root.right;
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

