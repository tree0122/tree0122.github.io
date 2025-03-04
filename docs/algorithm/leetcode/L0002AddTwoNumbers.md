# 0002. 两数相加

## 题目
给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

请你将两个数相加，并以相同形式返回一个表示和的链表。

你可以假设除了数字 0 之外，这两个数都不会以 0 开头。


```
示例 1：

输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[7,0,8]
解释：342 + 465 = 807.


示例 2：

输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
输出：[8,9,9,9,0,0,0,1]

```

## 解题思路


## 代码
```java
public class L0002AddTwoNumbers {
        
    public Node addTwoNumbers(Node l1, Node l2) {
        Node res = new Node(), cur = res;
        int carry = 0;
        while (l1 != null || l2 != null || carry > 0) {
            int v1 = 0, v2 = 0, sum = 0;
            if (l1 != null) {
                v1 = l1.v;
                l1 = l1.next;
            }
            if (l2 != null) {
                v2 = l2.v;
                l2 = l2.next;
            }
            sum = v1 + v2 + carry;
            carry = carry / 10;
            cur.next = new Node(sum % 10);
            cur = cur.next;
        }
        return res.next;
    }

    private class Node {
        int v;
        Node next;
    }
    
}
```

## 复杂度分析

