# 链表按某值划三块

## 题目
将单向链表按某值划分成左边小、中间相等、右边大的形式

## 代码
```java
public class SmallEqualBig {

    public Node smallEqualBig(Node h, int v) {
        Node sb = new Node(), se = sb, eb = new Node(), ee = eb, bb = new Node(), be = bb;
        while (h != null) {
            if (h.v < v) {
                se.next = h;
                se = se.next;
            }else if (h.v == v) {
                ee.next = h;
                ee = ee.next;
            }else {
                be.next = h;
                be = be.next;
            }
            h = h.next;
        }
        ee.next = bb.next;
        se.next = eb.next;
        return sb.next;
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
