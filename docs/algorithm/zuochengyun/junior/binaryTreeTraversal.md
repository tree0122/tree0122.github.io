# 二叉树的遍历

## 题目
二叉树的遍历

## 代码
```java
public class BinaryTreeTraversal {

    public void inOrder(Node n) {
        LinkedList<Node> stack = new LinkedList<>();
        while (n != null || !stack.isEmpty()) {
            if (n != null) {
                stack.push(n);
                n = n.left;
            } else {
                n = stack.pop();
                System.out.println(n.v);
                n = n.right;
            }
        }
    }

    public void preOrder(Node n) {
        LinkedList<Node> stack = new LinkedList<>();
        stack.push(n);
        while (!stack.isEmpty()) {
            n = stack.pop();
            System.out.println(n.v);
            if (n.right != null) {
                stack.push(n.right);
            }
            if (n.left != null) {
                stack.push(n.left);
            }
        }
    }

    public void postOrder(Node n) {
        LinkedList<Node> stack = new LinkedList<>();
        LinkedList<Node> help = new LinkedList<>();
        help.push(n);
        while (!help.isEmpty()) {
            n = help.pop();
            stack.push(n);
            if (n.left != null) {
                help.push(n.left);
            }
            if (n.right != null) {
                help.push(n.right);
            }
        }
        while (!stack.isEmpty()) {
            System.out.println(stack.pop().v);
        }
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
