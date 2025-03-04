# 0019. 删除链表的倒数第 N 个结点

## 题目
给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

```
示例 1：

输入：head = [1,2,3,4,5], n = 2
输出：[1,2,3,5]
```

## 解题思路


## 代码
```java
public class L0019RemoveNthFromEnd {
        
    public Node removeNthFromEnd(Node head, int n) {
        Node dum = new Node(), fast = head, cur = dum;
        dum.next = head;
        while (n != 0) {
            fast = fast.next;
            n--;
        }
        while (fast != null) {
            fast = fast.next;
            cur = cur.next;
        }
        cur.next = cur.next.next;
        return dum.next;
    }

    private class Node {
        int v;
        Node next;
    }
    
}
```

## 复杂度分析

