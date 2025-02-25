# 复制含有随机指针节点的链表

## 题目
复制含有随机指针节点的链表

## 代码
```java
public class CopyList {

    public Node copyList(Node n) {
        HashMap<Node, Node> map = new HashMap<>();
        Node cur = n;
        while (cur != null) {
            map.put(cur, new Node(cur.v));
            cur = cur.next;
        }
        cur = n;
        while (cur != null) {
            Node cp = map.get(cur);
            cp.next = map.get(cur.next);
            cp.rand = map.get(cur.rand);
            cur = cur.next;
        }
        return map.get(n);
    }

    private class Node {
        int v;
        Node next;
        Node rand;
        Node() {

        }
        Node(int v) {
            this.v = v;
        }
    }
}
```

## 复杂度分析
