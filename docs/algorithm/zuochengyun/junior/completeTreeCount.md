# 完全二叉树节点数量

## 题目
完全二叉树节点数量

## 代码
```java
public class CompleteTreeCount {

    public int completeTreeCount(Node root) {
        return doCompleteTreeCount(root, 1, cH(root, 1));
    }

    private int doCompleteTreeCount(Node n, int level, int h) {
        if (level == h) {
            return 1;
        }
        if (cH(n.right, level + 1) == h) {
            return (2 << (h - level)) + doCompleteTreeCount(n.right, level + 1, h);
        } else {
            return (2 << (h - level - 1)) + doCompleteTreeCount(n.left, level + 1, h);
        }
    }

    private int cH(Node n, int level) {
        while (n.left != null) {
            level++;
            n = n.left;
        }
        return level;
    }

    private class Node {
        int v;
        Node left;
        Node right;
        Node parent;
    }
}
```

## 复杂度分析
