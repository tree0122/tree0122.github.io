# 0061. 旋转链表

## 题目
给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置。


```
示例 1：

输入：head = [1,2,3,4,5], k = 2
输出：[4,5,1,2,3]


示例 2：

输入：head = [0,1,2], k = 4
输出：[2,0,1]
```

## 解题思路


## 代码
```java
public class L0061RotateRight {
        
    public Node rotateRight(Node head, int k) {
        Node cur = head, tail = head;
        int len = 0;
        while (cur != null) {
            len++;
            cur = cur.next;
        }
        k = k % len;
        if (k == 0) {
            return head;
        }
        len = 0;
        cur = head;
        while (len < k) {
            tail = tail.next;
            len++;
        }
        while (tail.next != null) {
            tail = tail.next;
            cur = cur.next;
        }
        tail.next = head;
        head = cur.next;
        cur.next = null;
        return head;
    }

    private class Node {
        int v;
        Node next;
    }
    
}
```

## 复杂度分析

