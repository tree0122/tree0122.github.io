# 0199. 二叉树的右视图

## 题目
给定一个二叉树的 根节点 root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。


```
示例 1：

输入：root = [1,2,3,null,5,null,4]

输出：[1,3,4]

```

## 解题思路


## 代码
```java
class L0199RightSideView {

    public List<Integer> rightSideView(TreeNode root) {
        ArrayList<Integer> ans = new ArrayList<>();
        LinkedList<TreeNode> q = new LinkedList<>();
        q.offer(root);
        while (!q.isEmpty()) {
            int size = q.size();
            while (size > 0) {
                root = q.poll();
                if (size == 1) {
                    ans.add(root.v);
                }
                if (root.left != null) {
                    q.offer(root.left);
                }
                if (root.right != null){
                    q.offer(root.right);
                }
                size--;
            }
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

