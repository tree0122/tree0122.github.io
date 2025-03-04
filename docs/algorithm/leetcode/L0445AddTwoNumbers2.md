# 0445. 两数相加 II

## 题目
给你两个 非空 链表来代表两个非负整数。数字最高位位于链表开始位置。它们的每个节点只存储一位数字。将这两数相加会返回一个新的链表。

你可以假设除了数字 0 之外，这两个数字都不会以零开头。


```
示例 1：

输入：l1 = [7,2,4,3], l2 = [5,6,4]
输出：[7,8,0,7]


示例 2：

输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[8,0,7]

```

## 解题思路


## 代码
```java
public class L0445AddTwoNumbers2 {
        
    public Node addTwoNumbers2(Node l1, Node l2) {
        Node res = null;
        LinkedList<Node> s1 = new LinkedList<>();
        LinkedList<Node> s2 = new LinkedList<>();
        while (l1 != null) {
            s1.push(l1);
            l1 = l1.next;
        }
        while (l2 != null) {
            s2.push(l2);
            l2 = l2.next;
        }
        int carry = 0;
        while (!s1.isEmpty() || !s2.isEmpty() || carry > 0) {
            int v1 = s1.isEmpty() ? 0 : s1.pop().v;
            int v2 = s2.isEmpty() ? 0 : s2.pop().v;
            int sum = v1 + v2 + carry;
            carry = sum / 10;
            Node cur = new Node(sum % 10);
            cur.next = res; // 此时res 表示上一小位的节点
            res = cur;
        }
        return res;
    }

    private class Node {
        int v;
        Node next;
    }
    
}
```

## 复杂度分析

