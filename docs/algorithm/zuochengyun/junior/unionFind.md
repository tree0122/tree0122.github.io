# 并查集

## 题目
并查集的意义:
1. 快速查找两个元素是否是同一集合
2. 快速合并两个集合

## 代码
```java
public class UnionFind {
    HashMap<Node, Node> nodeHeadMap = new HashMap<>();
    HashMap<Node, Integer> headSizeMap = new HashMap<>();

    public boolean same(Node n1, Node n2) {
        return head(n1) == head(n2);
    }

    public void union(Node n1, Node n2) {
        Node h1 = head(n1);
        Node h2 = head(n2);
        if (h1 == h2) {
            return;
        }
        Integer size1 = headSizeMap.get(h1);
        Integer size2 = headSizeMap.get(h2);
        if (size1 >= size2) {
            headSizeMap.put(h1, size1 + size2);
            headSizeMap.remove(h2);
            nodeHeadMap.put(h2, h1);
        } else {
            headSizeMap.put(h2, size1 + size2);
            headSizeMap.remove(h1);
            nodeHeadMap.put(h1, h2);
        }
    }

    private Node head(Node n) {
        Node node = nodeHeadMap.get(n);
        if (n == node) {
            return node;
        }
        Node head = head(node);
        nodeHeadMap.put(n, head);
        return head;
    }

    private class Node {

    }

}
```

## 复杂度分析
