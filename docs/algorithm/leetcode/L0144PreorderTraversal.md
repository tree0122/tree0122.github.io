# 0144. 二叉树的前序遍历


## 题目
给你二叉树的根节点 root ，返回它节点值的 前序 遍历。


```


```

## 解题思路


## 代码
```java
class L0144PreorderTraversal {

    public List<Integer> preorderTraversal(TreeNode root) {
        ArrayList<Integer> ans = new ArrayList<>();
        LinkedList<TreeNode> stack = new LinkedList<>();
        stack.push(root);
        while (!stack.isEmpty()) {
            root = stack.pop();
            ans.add(root.v);
            if (root.right != null) {
                stack.push(root.right);
            }
            if (root.left != null) {
                stack.push(root.left);
            }
        }
        return ans;
    }

    public List<Integer> preorderTraversalMorris(TreeNode root) {
        ArrayList<Integer> ans = new ArrayList<>();
        while (root != null) {
            TreeNode mr = root.left;
            if (mr != null) {
                while (mr.right != null && mr.right != root) {
                    mr = mr.right;
                }
                if (mr.right == null) {
                    mr.right = root;
                    ans.add(root.v);
                    root = root.left;
                    continue;
                }else {
                    mr.right = null;
                }
            }else {
                ans.add(root.v);
            }
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

