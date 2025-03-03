# 0092. 反转链表 II

## 题目
给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。


```
示例 1：

输入：head = [1,2,3,4,5], left = 2, right = 4
输出：[1,4,3,2,5]


示例 2：

输入：head = [5], left = 1, right = 1
输出：[5]
```

## 解题思路


## 代码
```java
public class L0092ReverseBetween {
        
    public Node reverseBetween(Node head, int left, int right) {
        Node dum = new Node(), pre = null, cur = null, preReverse = dum;
        int idx = 1;
        dum.next = head;
        while (preReverse.next != null && idx < left) {
            preReverse = preReverse.next;
            idx++;
        }
        cur = preReverse.next;
        pre = preReverse;
        while (cur != null && idx <= right) {
            Node next = cur.next;
            cur.next = pre;
            pre = cur;
            cur = next;
            idx++;
        }
        preReverse.next.next = cur;
        preReverse.next = pre;
        return dum.next;
    }

    private class Node {
        int v;
        Node next;
    }
    
}
```

## 复杂度分析

