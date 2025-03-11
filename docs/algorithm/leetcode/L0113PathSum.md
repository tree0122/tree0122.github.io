# 0113. 路径总和 II

## 题目
给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。

叶子节点 是指没有子节点的节点。


```
示例 1：

输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
输出：[[5,4,11,2],[5,8,4,5]]
```

## 解题思路


## 代码
```java
class L0113PathSum {

    public List<List<Integer>> pathSum(TreeNode root, int targetSum) {
        ArrayList<List<Integer>> ans = new ArrayList<>();
        ArrayList<Integer> list = new ArrayList<>();
        doPathSum(root, targetSum, list, ans);
        return ans;
    }

    private void doPathSum(TreeNode root, int t, ArrayList<Integer> list, ArrayList<List<Integer>> ans) {
        if (root == null) {
            return;
        }
        list.add(root.v);
        t -= root.v;
        if (root.left == null && root.right == null && t == 0) {
            ans.add(new ArrayList<>(list));
        }
        doPathSum(root.left, t, list, ans);
        doPathSum(root.right, t, list, ans);
        list.remove(list.size() - 1);
    }

    private class TreeNode {
        int v;
        TreeNode left;
        TreeNode right;
    }

}
```

## 复杂度分析

