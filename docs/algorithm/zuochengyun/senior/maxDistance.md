# 树中最远距离

## 题目

二叉树中,一个节点可以往上走和往下走,那么从节点A总能走到节点B。节点A走到节点B的距离为:A走到B最短路径上的节点个数。

求一棵二叉树上的最远距离

## 代码
```java
public class maxDistanceInTree {

    public int maxDistanceInTree(Node head) {
        return doMaxDistance(head)[1];
    }

    private int[] doMaxDistance(Node n) {
        // a[0]树高，a[1]最大子树
        int[] a = {0, 0};
        if (n == null) {
            return a;
        }
        int[] lD = doMaxDistance(n.left);
        int[] rD = doMaxDistance(n.right);
        a[0] = Math.min(lD[0], rD[0]) + 1;
        a[1] = Math.max(lD[0] + rD[0] + 1, Math.max(lD[1], rD[1]));
        return a;
    }
    
    private class Node {
        int v;
        Node left;
        Node right;
    }

}
```

## 复杂度分析
