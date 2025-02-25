# 两个链表相交点

## 题目
两个单链表相交的一系列问题
```
在本题中, 单链表可能有环, 也可能无环. 给定两个单链表的头节点 head1和head2, 这两个链表可能相交, 也可能不相交. 

请实现一个函数,  如果两个链表相交, 请返回相交的第一个节点;如果不相交, 返回null 即可.  

要求:如果链表1的长度为N, 链表2的长度为M, 时间复杂度请达到 O(N+M), 额外空间复杂度请达到O(1).
 ```

## 代码
```java
public class FirstIntersect {

    public Node firstIntersect(Node h1, Node h2) {
        HashSet<Node> set = new HashSet<>();
        while (h1 != null && set.add(h1)) {
            h1 = h1.next;
        }
        while (h2 != null && !set.contains(h2)) {
            h2 = h2.next;
        }
        return h2;
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
