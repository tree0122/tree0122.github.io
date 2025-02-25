# 两顺序链表的相同部分

## 题目
两顺序链表的相同部分

## 代码
```java
public class SamePart {

    public Node samePart(Node n1, Node n2) {
        while (n1 != null && n2 != null && n1.v != n2.v) {
            if (n1.v < n2.v) {
                n1 = n1.next;
            }else {
                n2 = n2.next;
            }
        }
        return n2 == null ? null : n1;
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
