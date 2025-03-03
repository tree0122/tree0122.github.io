# 0025. K 个一组翻转链表

## 题目
给你链表的头节点 head ，每 k 个节点一组进行翻转，请你返回修改后的链表。

k 是一个正整数，它的值小于或等于链表的长度。如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。

你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换


```
示例 1：

输入：head = [1,2,3,4,5], k = 2
输出：[2,1,4,3,5]


示例 2：

输入：head = [1,2,3,4,5], k = 3
输出：[3,2,1,4,5]
```

## 解题思路


## 代码
```java
public class L0025ReverseKGroup {
        
    public Node reverseKGroup(Node head, int k) {
        if (head == null) {
            return null;
        }
        Node dum = new Node() ,cur = head,  tail = head;
        dum.next = head;
//        int len = 1;
//        while (cur.next != null) {
//            len++;
//            cur = cur.next;
//        }
//        for (int i = 1; i <= len / k; i++) {
//            reverseBetween(dum, k * (i - 1) + 1, k * i);
//        }
        int idx = 0;
        while (tail != null) {
            idx++;
            if (idx % k == 0) {
                cur = reverse(cur, tail.next);
                tail = cur.next;
            }else {
                tail = tail.next;
            }
        }
        return dum.next;
    }

    // 返回的是反转后的倒数第二个元素
    private Node reverse(Node head, Node tail) {
        Node pre = head, cur = head.next, first = cur;
        while (cur != tail) {
            Node next = cur.next;
            cur.next = pre;
            pre = cur;
            cur = next;
        }
        first.next = tail;
        head.next = pre;
        return first;
    }

    private class Node {
        int v;
        Node next;
    }
    
}
```

## 复杂度分析

