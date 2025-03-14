# 0024. 两两交换链表中的节点

## 题目
给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。

```
示例 1：

输入：head = [1,2,3,4]
输出：[2,1,4,3]

```

## 解题思路


## 代码
```java
class L0024SwapPairs {

    public ListNode swapPairs(ListNode head) {
        if (head == null || head.next == null) {
            return head;
        }
        ListNode dum = new ListNode(), cur = head, pre = dum;
        dum.next = head;
        while (cur != null && cur.next != null) {
            ListNode next = cur.next;
            ListNode nNext = next.next;
            pre.next = next;
            next.next = cur;
            cur.next = nNext;
            pre = cur;
            cur = nNext;
        }
        return dum.next;
    }

    private class ListNode {
        int v;
        ListNode next;
    }

}
```

## 复杂度分析

