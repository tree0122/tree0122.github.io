# 判断一棵二叉树是否是平衡二叉树

## 题目
判断一棵二叉树是否是平衡二叉树

## 代码
```java
public class IsB {

    public boolean isB(Node n) {
        return h(n) >= 0;
    }

    private int h(Node n) {
        if (n == null) {
            return 0;
        }
        int l = h(n.left);
        if (l < 0) {
            return -1;
        }
        int r = h(n.right);
        if (r < 0) {
            return -1;
        }
        if (Math.abs(l - r) > 1) {
            return -1;
        }
        return Math.max(l, r) + 1;
    }

    private class Node {
        int v;
        Node left;
        Node right;
    }

}
```

## 复杂度分析
