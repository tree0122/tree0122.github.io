# 0148. 排序链表

## 题目
给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。


```
示例 1：

输入：head = [4,2,1,3]
输出：[1,2,3,4]
```

## 解题思路


## 代码
```java
public class L0148SortList {
        
    public Node sortList(Node head) {
        if (head == null || head.next == null) {
            return head;
        }
        Node mid = head, fast = head.next;
        while (fast != null && fast.next != null) {
            mid = mid.next;
            fast = fast.next.next;
        }
        fast = mid.next;
        mid.next = null;
        Node left = sortList(head);
        Node right = sortList(fast);
        Node dum = new Node(), cur = dum;
        while (left != null && right != null) {
            if (left.v <= right.v) {
                cur.next = left;
                left = left.next;
            }else {
                cur.next = right;
                right = right.next;
            }
            cur = cur.next;
        }
        return dum.next;
    }

    private class Node {
        int v;
        Node next;
    }
    
}
```

## 复杂度分析

