# 二叉树的序列化和反序列化

## 题目
二叉树的序列化和反序列化

## 代码
```java
public class BinaryTreeSerialize {

    public String serializeByLevel(Node n) {
        StringBuilder sb = new StringBuilder().append(n.v).append(",");
        LinkedList<Node> q = new LinkedList<>();
        q.offer(n);
        while (!q.isEmpty()) {
            n = q.poll();
            if (n.left != null) {
                q.offer(n.left);
                sb.append(n.left.v).append(",");
            } else {
                sb.append("#,");
            }
            if (n.right != null) {
                q.offer(n.right);
                sb.append(n.right.v).append(",");
            } else {
                sb.append("#,");
            }
        }
        return sb.toString();
    }

    public Node deserializeByLevel(String s) {
        LinkedList<Node> q = new LinkedList<>();
        String[] sa = s.split(",");
        int i = 0;
        Node n = newNode(sa[i++]);
        q.offer(n);
        while (!q.isEmpty()) {
            n = q.poll();
            n.left = newNode(sa[i++]);
            if (n.left != null) {
                q.offer(n.left);
            }
            n.right = newNode(sa[i++]);
            if (n.right != null) {
                q.offer(n.right);
            }
        }
        return n;
    }

    private Node newNode(String s) {
        if ("#".equals(s)) {
            return null;
        }
        Node n = new Node();
        n.v = Integer.parseInt(s);
        return n;
    }

    public String serializeByPreOrder(Node n) {
        if (n == null) {
            return "#,";
        }
        return n.v + "," + serializeByPreOrder(n.left) + serializeByPreOrder(n.right);
    }

    public Node deserializeByPreOrder(String s) {
        String[] sa = s.split(",");
        LinkedList<String> q = new LinkedList<>();
        for (String is : sa) {
            q.offer(is);
        }
        return deserializeByPreOrder(q);
    }

    private Node deserializeByPreOrder(LinkedList<String> q) {
        String v = q.poll();
        if ("#".equals(v)) {
            return null;
        }
        Node node = newNode(v);
        node.left = deserializeByPreOrder(q);
        node.right = deserializeByPreOrder(q);
        return node;
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
