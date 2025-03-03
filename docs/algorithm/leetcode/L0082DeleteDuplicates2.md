# 0082. 删除排序链表中的重复元素 II

## 题目
给定一个已排序的链表的头 head ， 删除原始链表中所有重复数字的节点，只留下不同的数字 。返回 已排序的链表 。


```
示例 1：

输入：head = [1,2,3,3,4,4,5]
输出：[1,2,5]


示例 2：

输入：head = [1,1,1,2,3]
输出：[2,3]
```

## 解题思路


## 代码
```java
public class L0082DeleteDuplicates2 {
        
    public Node deleteDuplicates2(Node head) {
        if (head == null) {
            return null;
        }
        Node dum = new Node(), cur = dum;
        dum.next = head;
        while (cur.next != null && cur.next.next != null) {
            if (cur.next.v == cur.next.next.v) { // 重复元素
                Node dup = cur.next;
                while (dup != null && dup.next != null && dup.v == dup.next.v) { // 过了这个重复元素
                    dup = dup.next;
                }
                cur.next = dup.next;
            }else {
                cur = cur.next;
            }
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

