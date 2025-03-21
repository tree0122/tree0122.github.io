# 0086. 分隔链表

## 题目
给你一个链表的头节点 head 和一个特定值 x ，请你对链表进行分隔，使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前。

你应当 保留 两个分区中每个节点的初始相对位置。


```
示例 1：

输入：head = [1,4,3,2,5,2], x = 3
输出：[1,2,2,4,3,5]


示例 2：

输入：head = [2,1], x = 2
输出：[1,2]


```

## 解题思路



## 代码
```java
class L0086Partition {

    public ListNode partition(ListNode head, int x) {
        ListNode smallHead = new ListNode(), smallTail = smallHead, bigHead = new ListNode(), bigTail = bigHead;
        while (head != null) {
            if (head.v < x) {
                smallTail.next = head;
                smallTail = smallTail.next;
            } else {
                bigTail.next = head;
                bigTail = bigTail.next;
            }
            head = head.next;
        }
        bigTail.next = null;
        smallTail.next = bigHead.next;
        return smallHead.next;
    }

    private class ListNode {
        int v;
        ListNode next;
    }

}
```

## 复杂度分析

