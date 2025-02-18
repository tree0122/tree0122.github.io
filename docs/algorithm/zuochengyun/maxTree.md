# 单调栈实现一个数组的MaxTree

## 题目
一个数组的MaxTree定义如下:
1. 数组没有重复元素
2. MaxTree是一个二叉树, 数组中的每个值对应一个二叉树的节点
3. 包含MaxTree树在内, 在任何一棵子树上, 值最大的节点都是树的头
   
数组arr生成MaxTree的函数, 要求时间复杂度O(N), 空间复杂度O(N)

## 代码
```java
public class MaxTree {

    public Node maxTree(int[] a) {
        Node[] nodes = new Node[a.length];
        LinkedList<Node> q = new LinkedList<>();
        for (int i = 0; i < a.length; i++) {
            nodes[i] = new Node(a[i]);
            while (!q.isEmpty() && q.peek().v < nodes[i].v) {
                Node cur = q.pop();
                Node canParent = q.peek();
                if (canParent == null || canParent.v > nodes[i].v) {
                    canParent = nodes[i];
                }
                if (canParent.left == null) {
                    canParent.left = cur;
                } else {
                    canParent.right = cur;
                }
            }
            q.offer(nodes[i]);
        }
        while (q.size() > 1) {
            Node cur = q.pop();
            Node parent = q.peek();
            if (parent.left == null) {
                parent.left = cur;
            } else {
                parent.right = cur;
            }
        }
        return q.pop();
    }


    private class Node {
        int v;
        Node left;
        Node right;

        public Node(int v) {
            this.v = v;
        }
    }

}
```

## 复杂度分析