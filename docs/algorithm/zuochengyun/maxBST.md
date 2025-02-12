# 最大搜索二叉子树的大小

## 题目
给定一棵二叉树的头节点head,请返回最大搜索二叉子树的大小

树行dp 通用方法论:
1. 列可能性
1. 简化信息
1. 改递归

## 代码
```java
public class MaxSubBST {

    public int maxSubBST(Node head) {
        return doProcess(head).count;
    }

    private TData doProcess(Node n) {
        if (n == null) {
            return new TData(null, Integer.MAX_VALUE, Integer.MIN_VALUE, 0);
        }
        TData leftData = doProcess(n.left);
        TData rightData = doProcess(n.right);
        if (n.left == leftData.head && n.right == rightData.head && leftData.max < n.v && rightData.min > n.v) {
            return new TData(n, leftData.min, rightData.max, leftData.count + rightData.count + 1);
        }
        return leftData.count >= rightData.count ? leftData : rightData;
    }

    private class TData {
        Node head;
        int min;
        int max;
        int count;
        public TData(Node head, int min, int max, int count) {
            this.head = head;
            this.min = min;
            this.max = max;
            this.count = count;
        }
    }


    private class Node {
        int v;
        Node left;
        Node right;
    }

}
```

## 复杂度分析
