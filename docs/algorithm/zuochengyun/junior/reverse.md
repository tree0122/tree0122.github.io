# 反转链表

## 题目
反转链表

## 代码
```java
public class Reverse {

    public Node reverse(Node n) {
        Node cur = n, pre = null, next = null;
        while (cur != null) {
            next = cur.next;
            cur.next = pre;
            pre = cur;
            cur = next;
        }
        return pre;
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
