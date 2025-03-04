# 0160. 相交链表

## 题目
给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 null 。


```

```

## 解题思路


## 代码
```java
public class L0160GetIntersectionNode {
        
//    考虑将链表 listA 的末尾拼接上链表 listB，链表 listB 的末尾拼接上链表 listA。
//    然后使用两个指针 c1 、c2，分别从链表 listA、链表 listB 的头节点开始遍历，如果走到共同的节点，则返回该节点。
//    否则走到两个链表末尾，返回 None。
    public Node getIntersectionNodeBetter(Node headA, Node headB) {
        if (headA == null || headB == null) {
            return null;
        }
        Node c1 = headA, c2 = headB;
        while (c1 != c2) { //
            c1 = (c1 != null) ? c1.next : headB;
            c2 = (c2 != null) ? c2.next : headA;
        }
        return c1;
    }

    public Node getIntersectionNode(Node headA, Node headB) {
        int delta = 0;
        Node c1 = headA, c2 = headB;
        while (c1 != null) {
            delta++;
            c1 = c1.next;
        }
        while (c2 != null) {
            delta--;
            c2 = c2.next;
        }
        if (delta < 0) {
            delta = -delta;
            c1 = headB;
            c2 = headA;
        }else {
            c1 = headA;
            c2 = headB;
        }
        while (delta != 0) {
            c1 = c1.next;
            delta--;
        }
        while (c1 != null && c1 != c2) {
            c1 = c1.next;
            c2 = c2.next;
        }
        return c1;
    }

    private class Node {
        int v;
        Node next;
    }
    
}
```

## 复杂度分析

