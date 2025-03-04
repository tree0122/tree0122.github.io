# 0143. 重排链表

## 题目
给定一个单链表 L 的头节点 head ，单链表 L 表示为：

L0 → L1 → … → Ln - 1 → Ln
请将其重新排列后变为：

L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。


```
示例 1：

输入：head = [1,2,3,4]
输出：[1,4,2,3]
```

## 解题思路


## 代码
```java
public class L0143ReorderList {
        
    public void reorderList(Node head) {
        Node mid = head, fast = head.next;
        while (fast != null && fast.next != null) { // 找到中间节点
            mid = mid.next;
            fast = fast.next.next;
        }
        Node cur = mid.next, pre = null;
        mid.next = null;
        while (cur != null) { // 右半边反转
            Node next = cur.next;
            cur.next = pre;
            pre = cur;
            cur = next;
        }
        Node revRight = pre;
        cur = head;
        while (revRight != null) {
            Node next = cur.next;
            Node rNext = revRight.next;
            cur.next = revRight;
            cur.next.next = next;
            cur = next;
            revRight = rNext;
        }
    }

    private class Node {
        int v;
        Node next;
    }
    
}
```

## 复杂度分析

