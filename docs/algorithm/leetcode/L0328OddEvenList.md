# 0328. 奇偶链表

## 题目
给定单链表的头节点 head ，将所有索引为奇数的节点和索引为偶数的节点分别组合在一起，然后返回重新排序的列表。

第一个节点的索引被认为是 奇数 ， 第二个节点的索引为 偶数 ，以此类推。

请注意，偶数组和奇数组内部的相对顺序应该与输入时保持一致。

你必须在 O(1) 的额外空间复杂度和 O(n) 的时间复杂度下解决这个问题。


```
示例 1：

输入: head = [1,2,3,4,5]
输出: [1,3,5,2,4]


示例 2：

输入: head = [2,1,3,5,6,4,7]
输出: [2,3,6,7,1,5,4]
```

## 解题思路


## 代码
```java
public class L0328OddEvenList {
        
    public Node oddEvenList(Node head) {
        if (head == null || head.next == null) {
            return head;
        }
        Node odd = head , even = head.next, firstEven = even;
        while (even != null && even.next != null) {
            odd.next = even.next;
            odd = odd.next;
            even.next = odd.next;
            even = even.next;
        }
        odd.next = firstEven;
        return head;
    }

    private class Node {
        int v;
        Node next;
    }
    
}
```

## 复杂度分析

