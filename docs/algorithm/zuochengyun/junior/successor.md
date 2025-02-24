# 二叉树的后继和前驱

## 题目
二叉树的后继和前驱

## 代码
```java
public class Successor {

    public Node successor(Node n) {
        if (n != null) {
            return null;
        }
        if (n.right != null) {
            n = n.right;
            while (n.left != null) {
                n = n.left;
            }
            return n;
        }
        while (n.parent != null && n.parent.left != n) {
            n = n.parent;
        }
        return n.parent;
    }

    public Node preccesor(Node n) {
        if (n == null) {
            return null;
        }
        if (n.left != null) {
            n = n.left;
            while (n.right != null) {
                n = n.right;
            }
            return n;
        }
        while (n.parent != null && n.parent.right != n) {
            n = n.parent;
        }
        return n.parent;
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
